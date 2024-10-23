import { redirect } from "next/navigation";

export default function Home() {
  //esto funciona para que el usuario sea redirigido directamente al dashboard
  redirect("dashboard/home");
}
