import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Offline — Mostafa Maher",
  description: "You are offline. Reconnect to browse the portfolio.",
  robots: { index: false, follow: false },
};

export default function Offline() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0c0c1d] px-5 text-center">
      <Image
        src="/pages-offline.png"
        alt="No internet connection"
        width={1024}
        height={768}
        sizes="(max-width: 738px) 90vw, 420px"
        priority
        className="w-[90vw] max-w-[420px] rounded-2xl"
      />
      <h1 className="text-3xl font-bold text-white">
        You are offline <span className="text-orange-500">/</span> انت غير متصل بالانترنت
      </h1>
      <p className="max-w-md text-gray-400">
        No internet connection right now. Check your network and try again.
        <br />
        <span dir="rtl">مفيش انترنت دلوقتي. اتأكد من الاتصال وحاول تاني.</span>
      </p>
      <Link
        href="/"
        className="rounded-full bg-orange-500 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-orange-600"
      >
        Retry · إعادة المحاولة
      </Link>
    </main>
  );
}
