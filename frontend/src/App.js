import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";


import Homepage from "./pages/page-desktop/Homepage";
import Applypage2 from "./pages/page-desktop/Applypage2";
import Applypage from "./pages/page-desktop/Applypage";
import Benefits from "./pages/page-desktop/Benefits";
import Jobpositions from "./pages/page-desktop/Jobpositions";

import ApplypageMobile from "./pages/page-mobile/ApplypageMobile";
import JobpositionsMobile from "./pages/page-mobile/JobpositionsMobile";
import HomepageMobile from "./pages/page-mobile/HomepageMobile";
import Applypage2Mobile from "./pages/page-mobile/Applypage2Mobile";
import BenefitsMobile from "./pages/page-mobile/BenefitsMobile";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 855);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 855);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <div>
      {isMobile ? (
        <Routes>
          <Route path="/" element={<HomepageMobile />} />
          <Route path="/applypage2" element={<Applypage2Mobile />} />
          <Route path="/applypage" element={<ApplypageMobile />} />
          <Route path="/benefits" element={<BenefitsMobile />} />
          <Route path="/jobpositions" element={<JobpositionsMobile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/applypage2" element={<Applypage2 />} />
          <Route path="/applypage" element={<Applypage />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/jobpositions" element={<Jobpositions />} />
        </Routes>
      )}
    </div>
  );
}
export default App;
