import type { Metadata } from "next";
import { Inter, Cormorant, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Professional font configuration
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BrightMlk Industries - Industrial Dairy & Fruit Powder Manufacturer",
    template: "%s | BrightMlk Industries"
  },
  description: "India's premier B2B manufacturer of industrial dairy and fruit powders. ISO 22000:2018 certified. SMP, WPC-80, fruit powders. Export to 25+ countries.",
  keywords: [
    "dairy powder manufacturer India", 
    "milk powder supplier", 
    "whey protein manufacturer", 
    "fruit powder exporter", 
    "SMP supplier", 
    "industrial dairy ingredients", 
    "B2B food ingredients", 
    "spray drying services"
  ],
  authors: [{ name: "BrightMlk Industries Private Limited" }],
  creator: "BrightMlk Industries Private Limited",
  publisher: "BrightMlk Industries Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.brightmlk.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrightMlk Industries - Industrial Dairy & Fruit Powder Manufacturer",
    description: "India's premier B2B manufacturer of industrial dairy and fruit powders. ISO 22000:2018 certified. Export to 25+ countries.",
    url: "https://www.brightmlk.in",
    siteName: "BrightMlk Industries",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrightMlk Industries - Industrial Dairy & Fruit Powder Manufacturing",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightMlk Industries - Industrial Dairy & Fruit Powder Manufacturer",
    description: "India's premier B2B manufacturer of industrial dairy and fruit powders. ISO 22000:2018 certified.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  category: "Industrial Food Manufacturing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${cormorant.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#82a573" />
        <meta name="msapplication-TileColor" content="#82a573" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Laxmi Nagar, Delhi" />
        <meta name="geo.position" content="28.6298;77.2789" />
        <meta name="ICBM" content="28.6298, 77.2789" />
        
        {/* Business details for search engines */}
        <meta name="format-detection" content="telephone=+918750751765" />
        <meta name="address" content="G-81 & G-82, Old No. G-23-A, PVT Office NO-201, Second Floor, Laxmi Nagar, Delhi - 110092" />
      </head>
      <body className="font-sans antialiased bg-white min-h-screen relative">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-6 py-3 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-white font-medium"
        >
          Skip to main content
        </a>
        
        <Navbar />
        
        <main 
          id="main-content"
          className="relative min-h-[calc(100vh-200px)] pt-20"
        >
          {/* Page transition wrapper */}
          <div className="animate-fadeIn">
            {children}
          </div>
        </main>
        
        <Footer />
        <ScrollToTop />
        
        {/* Simple status indicator - more subtle */}
        <div className="fixed bottom-4 left-4 z-40">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-neutral-200 text-xs text-neutral-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>All systems operational</span>
          </div>
        </div>
        
        {/* Schema.org markup for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BrightMlk Industries Private Limited",
              "url": "https://www.brightmlk.in",
              "logo": "https://www.brightmlk.in/logo.png",
              "description": "India's premier B2B manufacturer of industrial dairy and fruit powders. ISO 22000:2018 certified facility producing Skimmed Milk Powder, Whey Protein, and fruit powders.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "G-81 & G-82, Old No. G-23-A, PVT Office NO-201, Second Floor, Laxmi Nagar",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110092",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8750751765",
                "contactType": "B2B procurement",
                "email": "shukla.dry@gmail.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/brightmlk-industries"
              ],
              "hasCertification": [
                {
                  "@type": "Certification",
                  "name": "ISO 22000:2018"
                },
                {
                  "@type": "Certification",
                  "name": "FSSAI License"
                },
                {
                  "@type": "Certification",
                  "name": "Hpi Certified"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Skimmed Milk Powder",
                    "description": "Industrial grade skimmed milk powder, protein 34% min"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Whey Protein Concentrate",
                    "description": "WPC-80 for food manufacturing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Fruit Powders",
                    "description": "Spray dried mango, banana, and other fruit powders"
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}