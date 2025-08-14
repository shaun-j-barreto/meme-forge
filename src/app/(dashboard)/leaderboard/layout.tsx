import LeaderboardTab from "@/components/leaderboard_component/leaderboardtab";

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LeaderboardTab />
      {children}
    </div>
  );
}
