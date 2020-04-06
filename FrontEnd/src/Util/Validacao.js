export default function validate(values) { 

  let errors = {};
  errors.senha = "";
  errors.usuario = "";

  if(!values.usuario || values.usuario == ""){
    errors.usuario = "Campo de usuário é necessário"
  }
  if(!values.senha || values.senha == ""){
    errors.senha = "Campo de senha é necessário"
  }
  return errors;
};