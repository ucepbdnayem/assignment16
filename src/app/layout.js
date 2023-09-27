import './globals.css'
import NextTopLoader from "nextjs-toploader";
import SiteNavber from "@/components/SiteNavber";
import SiteFooter from "@/components/SiteFooter";

export async function generateMetadata() {
    const res_data = await fetch(process.env.BASE_URL+'api/SiteMeta/home')
    const json = await res_data.json()
    return {
        title: json[0]['title'],
        description: json[0]['description'],
        keywords: json[0]['keywords'],
        openGraph: {
            images: json[0]['image'],
        },
    }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-100">
        <NextTopLoader color="#20b15a" height={3} speed={200} />
        <SiteNavber></SiteNavber>
        <div className="min-h-screen w-full mx-auto">
            {children}
        </div>
        <SiteFooter></SiteFooter>
      </body>
    </html>
  )
}
