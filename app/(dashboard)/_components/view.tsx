import { TextInputPanel } from "./text-input-panel";
import { DashboardHeader } from "./DashboardHeader";
import { Header } from "./header";
import { HeroPattern } from "./hero-pattern";
import { QuickActionPanel } from "./quickActionPanel";

export const DashboardView = () => {
  return (
    <div className="relative">
      <Header title="Dashboard" className="lg:hidden" />
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionPanel />
      </div>
    </div>
  );
};
