import Link from "next/link";

const navLinks = [
  { href: "/services", label: "الخدمات" },
  { href: "/store", label: "المتجر" },
  { href: "/portfolio", label: "أعمالنا" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/blog", label: "المدونة" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="container-tolqar flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          تولقار<span className="text-orange">®</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm text-text-muted hover:text-text sm:block"
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/contact"
            className="rounded-sm bg-grad-orange px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            ابدأ الآن
          </Link>
        </div>
      </div>
    </header>
  );
}
