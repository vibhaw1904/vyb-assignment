import Navbar from "@/components/Navbar";
import FAQSection from "@/components/pages/FaqSection";
import FirstPage from "@/components/pages/FirstPage";
import FourthPage from "@/components/pages/FourthPage";

export default function Home() {
  return (
    <main >
      <div className='flex justify-center'>
        <Navbar/>
        
      </div>
      <FirstPage/>
      <FourthPage/>
      <FAQSection/>
    </main>
  );
}
