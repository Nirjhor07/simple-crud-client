export const fetchData = async () => {
  const res = await fetch(`http://localhost:8000/users`);
  return res.json();
};

//fetch user details based on dynamic ids
export const fetchUserByid = async (id) => {
  const res = await fetch(`http://localhost:8000/users/${id}`);
  return res.json();
};
