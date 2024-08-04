import Image from "next/image";
import TopCard from "./components/TopCard";
import BarChart from "./components/Chart";
import Right from "./components/Right";
import TopCornor from "./components/TopCornor";
import Card from "./components/Card";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#F7F8FC' }} className="min-h-screen">
      {/* <TopCard/> */}
      <div>
        {/* <BarChart/> */}
        <div className='p-5 ml-[35%]'>
          <div style={{ backgroundColor: '#101920' }} className="border rounded w-[50vh]">
            { <TopCornor/> }
            { <Card/> }
          </div>
        </div>
      </div>
    </main>
  );
}
