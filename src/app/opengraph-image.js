import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = `${site.name}, Aaye Town, Akure, Ondo State`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const toDataUrl = async (path, type) =>
  `data:${type};base64,${await readFile(join(process.cwd(), path), "base64")}`;

const photoSrc = await toDataUrl("public/images/more-students.jpg", "image/jpeg");
const logoSrc = await toDataUrl("src/app/icon.png", "image/png");

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#1f2a5c" }}>
        <img
          alt=""
          src={photoSrc}
          width={1200}
          height={630}
          style={{ position: "absolute", objectFit: "cover", opacity: 0.35 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            width: "100%",
            height: "100%",
            backgroundImage: "linear-gradient(90deg, rgba(31,42,92,0.95) 40%, rgba(31,42,92,0.2))",
            color: "white",
          }}
        >
          <img alt="" src={logoSrc} width={120} height={120} style={{ borderRadius: 999, border: "6px solid white" }} />
          <div style={{ fontSize: 68, fontWeight: 800, marginTop: 32, maxWidth: 820, lineHeight: 1.1 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 32, marginTop: 20, color: "#bfe3f5" }}>
            {site.address.full}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
            {[
              ["Chastity", "#d6456b"],
              ["Sedulity", "#f5b301"],
              ["Tranquility", "#2f9e5b"],
            ].map(([word, color]) => (
              <div
                key={word}
                style={{
                  background: color,
                  color: color === "#f5b301" ? "#1f2a5c" : "white",
                  fontSize: 26,
                  fontWeight: 700,
                  padding: "10px 26px",
                  borderRadius: 999,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
