import LeagueList from "@/components/user/LeagueList";
import { getUser } from "@/lib/user";
import Image from "next/image";
import { Suspense } from "react";

export default async function UserSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const user = await getUser(await searchParams);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <p>Welcome, {user.display_name}</p>
      <div className="flex items-center space-x-4 border rounded-md p-4 w-1/2">
        <Image
          src={`https://sleepercdn.com/avatars/thumbs/${user.avatar}`}
          alt={`${user.username} avatar`}
          height={50}
          width={50}
        />
        <p>{user.display_name}</p>
      </div>

      <hr />
      <p>Select which league you want to review:</p>
      <Suspense fallback={<div>Loading leagues...</div>}>
        <LeagueList userId={user.user_id} />
      </Suspense>
    </div>
  );
}
