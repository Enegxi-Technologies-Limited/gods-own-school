import { site } from "@/lib/site";

export default function manifest() {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9fc",
    theme_color: "#1f2a5c",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
