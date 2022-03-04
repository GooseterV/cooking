import json, random, base64, secrets

class CookingServer:
	def __init__(self, pswd=None):
		if pswd != None:
			self.locked = True
			self.pswd = pswd
		elif pswd == None:
			self.locked = False
			self.pswd = None
		self.pin = gen_server_code()
		self.data = {}

def gen_server_code() -> str:
	return secrets.token_hex(3).upper()


def check_server_exists(_servers, pin) -> bool:
    return (pin in _servers.keys())