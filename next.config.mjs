import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: process.env.PAGES_BASE_PATH || "",
  assetPrefix: process.env.PAGES_BASE_PATH || ""
});
