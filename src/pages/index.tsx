import { NavbarPrimarySection } from "@/components/navbar/navbar_primary";
import { TabsSection } from "@/components/pages/tabs";

export default function Home() {
  return <>
    <NavbarPrimarySection Mode={true} />
    <TabsSection />
  </>
}
