
export default function Narrative({
  content,
}: {
  content: React.ReactNode;
}) {
  return <div
  style={{
            textAlign: "left",
            width: "90%",
            maxWidth: "600px",
            margin: "auto"
        }}>
    {content}
    </div>;
}
