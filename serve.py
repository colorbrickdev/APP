import http.server, socketserver, os, webbrowser
from urllib.parse import quote
PORT = 8080
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin","*")
        self.send_header("Cache-Control","no-cache")
        super().end_headers()
    def log_message(self, f, *a): pass
os.chdir(os.path.dirname(os.path.abspath(__file__)))
webbrowser.open(f"http://localhost:{PORT}/Master%20Profile%20Mobile.html")
print("서버 시작! http://localhost:8080/Master%20Profile%20Mobile.html")
print("종료하려면 이 창 닫기")
with socketserver.TCPServer(("",PORT),H) as s: s.serve_forever()