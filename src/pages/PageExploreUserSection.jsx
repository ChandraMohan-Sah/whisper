
import { ExploreSection } from "../components/ExploreUsers/ExploreSection";
import { useTitle } from "../hooks/useTitle";

export const PageExploreUserSection = () => {
  useTitle("Explore")
  return (
    <div >
      <ExploreSection />     
    </div>
  )
};



