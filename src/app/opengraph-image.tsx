import { ImageResponse } from "next/og";

export const alt = "Sumit Beniwal — Full Stack Developer & Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#a5b4fc",
            marginBottom: 16,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
            background: "linear-gradient(90deg, #c7d2fe, #818cf8, #6366f1)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Sumit Beniwal
        </div>
        <div style={{ fontSize: 32, color: "#cbd5e1", marginBottom: 40, maxWidth: 900 }}>
          Senior Full Stack Developer · MERN · Next.js · TypeScript · AWS DevOps
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid #6366f1",
                background: "rgba(99, 102, 241, 0.15)",
                fontSize: 22,
                color: "#e0e7ff",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
