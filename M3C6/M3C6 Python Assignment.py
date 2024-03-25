# Cree una clase de Python llamada Usuario que use el método init y cree un nombre de usuario y una contraseña. Crea un objeto usando la clase.

class Usuario:

    def __init__(self, user_name, user_password):
        self.user_name = user_name
        self.user_password = user_password
      
    def __str__(self):
      return (f'Usuario: {self.user_name}\nContraseña: {self.user_password}')

usuario1 = Usuario('Sean Connery', 'magic_ScotsM4n')
print(usuario1)