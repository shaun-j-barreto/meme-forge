import HomeFeedTab from "@/components/homefeed_component/homefeedtab";

export default function HomeFeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HomeFeedTab />
      {children}
    </div>
  );
}
