import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "@/lib/auth";

const navItems = [
  { href: "/admin", label: "نظرة عامة" },
  { href: "/admin/products", label: "المنتجات" },
  { href: "/admin/orders", label: "الطلبات" },
  { href: "/admin/coupons", label: "الكوبونات" },
  { href: "/admin/articles", label: "المقالات" },
  { href: "/admin/users", label: "المستخدمون" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const role = (session?.user as { role?: string } | undefined)?.role;

  if (!session || (role !== "ADMIN" && role !== "EDITOR")) {
    redirect("/login");
  }

  return (
    <div className="container-tolqar grid gap-8 py-12 md:grid-cols-[200px_1fr]">
      <aside className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-sm px-3 py-2 text-sm text-text-muted hover:bg-panel hover:text-text"
          >
            {item.label}
          </Link>
        ))}
      </aside>
      <div>{children}</div>
    </div>
  );
}
