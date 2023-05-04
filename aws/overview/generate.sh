[ -x "$(command -v entr)" ] || apt install entr -y
echo main.py | entr python3 main.py
