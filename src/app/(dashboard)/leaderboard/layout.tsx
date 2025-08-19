import LeaderboardTab from "@/components/leaderboard_component/leaderboardtab";

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-20">
      <LeaderboardTab />
      {children}
    </div>
  );
}
