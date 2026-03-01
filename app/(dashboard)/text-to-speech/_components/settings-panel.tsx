import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { History, Settings } from "lucide-react";
import React from "react";
import { SettingsPanelSettings } from "./settings-panel-settings";
import { SettingsPanelHistory } from "./settings-panel-history";

const tabTriggerClassNames = "flex-1 h-full gap-2 bg-transparent rounded-none border-x-0 border-t-0 border-b-px border-b-transparent shadow-none data-[state=active]:border-b-foreground group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none";

export const SettingsPanel = () => {
  return (
    <div className="hidden  w-105 min-h-0 flex-col border-l lg:flex">
      <Tabs
        defaultValue="settings"
        className="flex h-full min-h-0 flex-col gap-y-4"
      >
        <TabsList className="w-full border-b bg-transparent rotate-none
        group-data-[orientation=horizontal]/tabs:h-12">
          <TabsTrigger value="settings" className={tabTriggerClassNames}>
            <Settings className="size-4" />
            Settings
          </TabsTrigger>
          <TabsTrigger value="history" className={tabTriggerClassNames}>
            <History className="size-4" />
            History
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="settings"
          className="mt-0 flex min-h-0 flex-1 flex-col overflow-y-hidden"
        >
          <SettingsPanelSettings />
        </TabsContent>
        <TabsContent
          value="history"
          className="mt-0 flex min-h-0 flex-1 flex-col overflow-y-hidden"
        >
          <SettingsPanelHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};
