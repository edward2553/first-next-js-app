
export default function GeneralLayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root and MetaData</h1>
      {children}
    </div>
  );
}
