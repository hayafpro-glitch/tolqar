import { prisma } from "@/lib/prisma";
import UserRoleSelect from "./UserRoleSelect";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  let users: Awaited<ReturnType<typeof prisma.user.findMany>> = [];
  try {
    users = await prisma.user.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    users = [];
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">المستخدمون</h1>

      <div className="mt-8 overflow-x-auto rounded-md border border-line">
        <table className="w-full text-right text-sm">
          <thead className="border-b border-line text-text-faint">
            <tr>
              <th className="p-4">الاسم</th>
              <th className="p-4">البريد الإلكتروني</th>
              <th className="p-4">الصلاحية</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-line last:border-0">
                <td className="p-4">{u.name ?? "—"}</td>
                <td className="p-4" dir="ltr">{u.email}</td>
                <td className="p-4">
                  <UserRoleSelect id={u.id} role={u.role} />
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={3} className="p-8 text-center text-text-muted">
                  لا يوجد مستخدمون بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
