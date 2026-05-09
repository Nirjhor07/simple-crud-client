import { Button, Table } from "@heroui/react";
import Link from "next/link";

const UserTable = ({ users }) => {
  return (
    <div className="mt-10">
      {" "}
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              <div>
                {users.map((user) => (
                  <Table.Row key={user._id}>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-1.5">
                        <Link href={``}>
                          <Button variant="secondary">Details</Button>
                        </Link>
                        <Link href={``}>
                          <Button variant="primary">edit</Button>
                        </Link>
                        <Link href={``}>
                          <Button variant="danger">delete</Button>
                        </Link>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </div>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UserTable;
