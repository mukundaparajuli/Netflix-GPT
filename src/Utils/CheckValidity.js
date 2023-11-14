export const checkValiditySignUp = (name, email, password) => {
  const emailValidity = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const passwordValidity =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
  const nameValidity = /^[a-zA-Z\s]*$/.test(name);

  // if any error occcurs in the validity
  if (!nameValidity) return "Name not valid!";
  if (!emailValidity) return "Email not valid!";
  if (!passwordValidity) return "Password not valid!";

  // if no error occurs
  return null;
};

export const checkValiditySignIn = (email, password) => {
  const emailValidity = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const passwordValidity =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  // if any error occcurs in the validity

  if (!emailValidity) return "Email not valid!";
  if (!passwordValidity) return "Password not valid!";

  // if no error occurs
  return null;
};
