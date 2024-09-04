import Navbar from "@/components/Navbar";
import FAQSection from "@/components/pages/FaqSection";
import FirstPage from "@/components/pages/FirstPage";

export default function Home() {
  return (
    <main >
      <div className='flex justify-center'>
        <Navbar/>
        
      </div>
      <FirstPage/>
      <FAQSection/>
    </main>
  );
}
