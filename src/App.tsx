import { Suspense } from "react";
import RocketLoader from "./components/RocketLoader";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "./data";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Suspense fallback={<RocketLoader />}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Footer />
        </div>
      </main>
    </Suspense>
  );
}
