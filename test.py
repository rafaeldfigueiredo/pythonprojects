import re
class Pessoa:
    def __init__(self, nome=input("Digite seu nome:\n"), sobrenome=input("Digite seu sobrenome:\n")):
        #Takes out numbers and symbols from names.
        rgx = r'[^a-zA-Z]'
        self.nome = re.sub(rgx, '', nome)
        self.sobrenome = re.sub(rgx, '', sobrenome)
    def criarPessoa(self):
        print(f"{self.nome} {self.sobrenome}, você está cadastrado")
pessoa = Pessoa().criarPessoa() #Instantly instantiate the class object