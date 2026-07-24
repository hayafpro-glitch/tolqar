"use client";

import { useRouter } from "next/navigation";

const roles = [
  { value: "ADMIN", label: "مدير" },
  { value: "EDITOR", label: "محرر" },
  { value: "CUSTOMER", label: "عميل" },
];

export default function UserRoleSelect({
  id,
  role,
}: {
  id: string;
  role: string;
}) {
  const router = useRouter();

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    await fetch(`/api/admin/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: e.target.value }),
    });
    router.refresh();
  }

  return (
    <select
      defaultValue={role}
      onChange={handleChange}
      className="rounded-sm border border-line bg-panel px-2 py-1 text-xs"
    >
      {roles.map((r) => (
        <option key={r.value} value={r.value}>
          {r.label}
        </option>
      ))}
    </select>
  );
}
