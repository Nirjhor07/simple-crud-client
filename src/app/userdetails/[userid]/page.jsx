import { fetchUserByid } from "@/lib/data";

const UserDetailsPage = async ({ params }) => {
  const { userid } = await params;
  // console.log(userid);

  const user = await fetchUserByid(userid);

  return (
    <div>
      <p>This is user details page</p>
      <p>User name: {user.name} </p>
    </div>
  );
};

export default UserDetailsPage;
