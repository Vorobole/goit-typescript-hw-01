type Person = {
  name: string;
  surname: string;
  email: string;
  password: string | number;
};

function createOrUpdateUser(initialValues: Partial<Person>) {
  return {
    ...initialValues,
  };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
  name: "John",
  surname: "Doe",
});
