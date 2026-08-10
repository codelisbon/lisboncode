import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lisbon Code - Hack Club em Lisboa";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#121217",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            maxWidth: "980px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#ff8c37",
              display: "flex",
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 0.9,
            }}
          >
            &lt;lisbon&gt;
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 168,
              fontWeight: 700,
              lineHeight: 0.78,
            }}
          >
            code
          </div>
          <div
            style={{
              background: "#ec3750",
              borderRadius: 999,
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              lineHeight: 1,
              padding: "18px 28px",
              width: "fit-content",
            }}
          >
            Hack Club em Lisboa
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.78)",
              display: "flex",
              fontSize: 34,
              fontWeight: 500,
              lineHeight: 1.25,
              maxWidth: "880px",
            }}
          >
            Para teens que gostam de tecnologia e querem construir projetos
            reais.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
