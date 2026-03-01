import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { ReactNode } from "react";
import { DashboardSidebar } from "./_components/dashboard-sidebar";

const DashboarLayout = async ({ children }: { children: ReactNode }) => {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar-open")?.value === "true";
  return <SidebarProvider defaultOpen={defaultOpen} className="h-svh">
    <DashboardSidebar />
    <SidebarInset className="min-h-0 min-w-0">
        <main className="flex min-h-0 flex-1 flex-col ">
            {children}
        </main>
    </SidebarInset>
  </SidebarProvider>
};

export default DashboarLayout;
