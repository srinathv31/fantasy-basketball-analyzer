import LeagueList from "@/components/user/LeagueList";
import UserCard from "@/components/user/UserCard";
import { getUser } from "@/lib/user";
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
      <UserCard user={user} />
      <hr />
      <p>Select which league you want to review:</p>
      <Suspense fallback={<div>Loading leagues...</div>}>
        <LeagueList userId={user.user_id} />
      </Suspense>
    </div>
  );
}
