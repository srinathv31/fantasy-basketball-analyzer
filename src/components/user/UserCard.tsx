import { User } from "@/interfaces/sleeper";
import Image from "next/image";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="flex items-center space-x-4 border rounded-md p-4 w-1/2">
      <Image
        src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`}
        alt={`${user.username} avatar`}
        height={50}
        width={50}
      />
      <p>{user.display_name}</p>
    </div>
  );
}
