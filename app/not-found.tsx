import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Mostafa Maher",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0c0c1d] px-5 text-center">
      <Image
        src="/pages-404.png"
        alt="404 — page not found"
        width={1024}
        height={768}
        sizes="(max-width: 738px) 90vw, 420px"
        priority
        className="w-[90vw] max-w-[420px] rounded-2xl"
      />
      <h1 className="text-3xl font-bold text-white">
        404 — Page Not Found <span className="text-orange-500">/</span> الصفحة غير موجودة
      </h1>
      <p className="max-w-md text-gray-400">
        The page you are looking for was moved or never existed.
        <br />
        <span dir="rtl">الصفحة اللي بتدور عليها اتنقلت أو مش موجودة من الأساس.</span>
      </p>
      <Link
        href="/"
        className="rounded-full bg-orange-500 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-orange-600"
      >
        Back to home · العودة للرئيسية
      </Link>
    </main>
  );
}
