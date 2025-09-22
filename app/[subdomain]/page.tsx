// app/s/[subdomain]/page.tsx
import { redirect } from "next/navigation";

export default function SubdomainRoot({ params }: { params: { subdomain: string } }) {
  redirect(`/${params.subdomain}/dashboard`);
}
