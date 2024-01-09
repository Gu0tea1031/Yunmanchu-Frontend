import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      {/* 奧特曼行銷追蹤代碼 */}
      {/* <Script type="text/javascript">
        {`
          var s=document.createElement('script');s.async=1;
          s.src='https://api.popin.tw/pixel.php?aid=tXPynn6M7g&t='+Date.now(); var
          t=document.getElementsByTagName('script')[0];t.parentNode.insertBefore(s,t);
        `}
      </Script> */}

      <body>
        <Header />
        {children}
        <Footer />

        {/* GOOGLE TAG MANGER */}
        <noscript>
          <iframe
            src={`src=https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
        {/* GOOGLE 分析 */}
        <Script type="text/javascript" src="/webfont.js" />

        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLEANALYTICS_ID}`}
        />

        <Script id="ga-script" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLEANALYTICS_ID}');
  `}
        </Script>

        {/* GOOGLE TAG MANGER */}
        <Script id="gtm-script">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
  `}
        </Script>
        <Toaster />
      </body>
    </html>
  );
}
