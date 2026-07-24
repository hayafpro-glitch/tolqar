import Link from "next/link";

const columns = [
  {
    title: "الشركة",
    links: [
      { href: "/about", label: "من نحن" },
      { href: "/portfolio", label: "أعمالنا" },
      { href: "/blog", label: "المدونة" },
      { href: "/contact", label: "تواصل معنا" },
    ],
  },
  {
    title: "المنتج",
    links: [
      { href: "/services", label: "الخدمات" },
      { href: "/store", label: "المتجر" },
      { href: "/pricing", label: "الأسعار" },
      { href: "/faq", label: "الأسئلة الشائعة" },
    ],
  },
  {
    title: "قانوني",
    links: [{ href: "/privacy", label: "الخصوصية والشروط" }],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-tolqar grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-bold">
            تولقار<span className="text-orange">®</span>
          </div>
          <p className="mt-3 max-w-[220px] text-sm text-text-muted">
            نبني المستقبل رقميًا.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-xs font-semibold uppercase tracking-wider text-text-faint">
              {col.title}
            </div>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line py-6">
        <div className="container-tolqar text-xs text-text-faint">
          © {new Date().getFullYear()} تولقار. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
