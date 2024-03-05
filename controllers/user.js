const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "mensaje enviado desde el controlador",
  });
};

//metodo de registro de usuario
const register = (req, res) => {
  //recoger los datos del usuario

  //validar datos

  //control usuario duplicado

  //cifrar la contraseña

  //guardar usuario en la base de datos

  //devolver respuesta

  return res.status(200).json({
    message: "metodo de registro de usuario",
  });
};
module.exports = {
  pruebaUser,
  register,
};
