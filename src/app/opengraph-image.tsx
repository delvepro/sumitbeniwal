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
          background: "linear-gradient(135deg, #070b16 0%, #0c1a36 50%, #0a2744 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#60a5fa",
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
            background: "linear-gradient(90deg, #60a5fa, #38bdf8, #22d3ee)",
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
                border: "1px solid #3b82f6",
                background: "rgba(59, 130, 246, 0.15)",
                fontSize: 22,
                color: "#dbeafe",
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
