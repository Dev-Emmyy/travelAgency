/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverExternalPackages: ["@prisma/client", "bcryptjs"],
  },
  env: {
    DATABASE_URL:
      process.env.NODE_ENV === "production"
        ? "postgresql://neondb_owner:npg_cZukEFB3mR2J@ep-snowy-fire-a5zxxs4w-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
        : "postgresql://postgres:Gunna@localhost:5432/travelAgency_db?schema=public",
  },
};

export default nextConfig;

