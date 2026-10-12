"use client";

import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0c0c1d] px-5 text-center">
      <Image
        src="/pages-error.png"
        alt="Something went wrong"
        width={1024}
        height={768}
        sizes="(max-width: 738px) 90vw, 420px"
        priority
        className="w-[90vw] max-w-[420px] rounded-2xl"
      />
      <h1 className="text-3xl font-bold text-white">
        Something went wrong <span className="text-orange-500">/</span> حدث خطأ ما
      </h1>
      <p className="max-w-md text-gray-400">
        An unexpected error occurred while loading this page.
        <br />
        <span dir="rtl">حصل خطأ غير متوقع أثناء تحميل الصفحة.</span>
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-orange-500 px-6 py-2.5 font-semibold text-white transition-colors hover:bg-orange-600"
      >
        Try again · إعادة المحاولة
      </button>
    </main>
  );
}
