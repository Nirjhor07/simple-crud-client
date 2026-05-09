import { fetchData } from "@/lib/data";
import UserTable from "../Components/UserTable";

const UsersPAge = async () => {
  const users = await fetchData();
  return (
    <div className="w-10/12 mx-auto flex flex-col mt-7 font-bold text-4xl">
      <div className="flex justify-between">
        <p>This is users page</p>
        <p>Total users: {users.length}</p>
      </div>
      <div>
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default UsersPAge;
