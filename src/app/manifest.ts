import type { MetadataRoute } from "next";
import { defaultDescription, defaultTitle } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultTitle,
    short_name: "Sumit Beniwal",
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#3b82f6",
    categories: ["business", "productivity", "developer tools"],
    lang: "en-IN",
    orientation: "portrait-primary",
  };
}
