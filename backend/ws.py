import asyncio
import json
import logging
import random
from asyncio.coroutines import coroutine

import websockets

import helpers

logging.basicConfig(
	format="%(asctime)s %(message)s",
	level=logging.INFO,
)

_servers = dict()
_serverclasses = dict()

class SocketHandler:
	def __init__(self, socket, onmessage:coroutine):
		self._socket = socket
		self._onmessage = onmessage
		
	async def listen(self):
		async for msg in self._socket:
			await self._onmessage(msg, self._socket)


async def handler(sock) -> None:
	async def parseMessage(msg, s) -> None:
		try:
			m = json.loads(msg)
			if "action" not in m.keys():
				await s.send(f"Invalid ws message! Make sure it includes an [action] key pair.")
				return
			elif "action" in m.keys():
				
				if m["action"] == "update_server":
					print(m)
					if "pin" not in m.keys():
						await s.send("There is no [pin] key pair.")
						return
					pin = m['pin']
					if pin not in _servers.keys():
						await s.send("Server does not exist")
						return
					_serverclasses[pin].data = m['data']
					for socket in _servers[pin]:
						if socket != s:

							await socket.send(json.dumps({
								"action":"received_update",
								"msg":"Successfully updated server.",
								"data":m['data']
							}))

				elif m["action"] == "join_server":
					print(m)
					if "pin" not in m.keys():
						await s.send("There is no [pin] key pair.")
						return
					pin = m['pin']
					if pin not in _servers.keys():
						await s.send("Server does not exist")
						return
					_servers[pin].add(sock)
					for socket in _servers[pin]:
						if socket != s:
							await socket.send(json.dumps({
								"action":"notification",
								"msg":"Another Chef has joined the kitchen!",
								"pin":pin,
							}))
				elif m["action"] == "create_server":
					print(m)
					srv = helpers.CookingServer()
					_servers[srv.pin] = set()
					_serverclasses[srv.pin] = srv
					await s.send(json.dumps({
						"action":"notification",
						"msg":"Successfully created server",
						"data":srv.data,
						"pin":srv.pin,
					}))
				elif m["action"] == "remove_closed":
					print(m)
					if "pin" not in m.keys():
						await s.send("There is no [pin] key pair.")
						return
					pin = m['pin']
					if pin not in _servers.keys():
						await s.send("Server does not exist")
						return
					for conn in _servers[pin]:
						if conn.closed:
							_servers[pin].remove(conn)
		except Exception as e:
			print(e)
			pass
			
	
	handler = SocketHandler(sock, parseMessage)
	await handler.listen()



async def main() -> None:
	async with websockets.serve(handler, f"localhost", 4075):
		await asyncio.Future()

asyncio.run(main())
