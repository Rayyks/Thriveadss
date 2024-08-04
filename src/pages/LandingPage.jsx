import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Client } from "../components/Client";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Consultation, Questions } from "../components/Consultation";
import Benefits from "../components/Benefits";
import { Pricing } from "../components/Pricing";
import { About } from "../components/About";

const LandingPage = () => {
  return (
    <main className="bg-[#FFFFFF]">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Client />
      </section>
      <section className="bg-gray-50">
        <WhyChooseUs />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Consultation />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <Questions />
      </section>
      {/* <section>
        <FaqSection />
      </section> */}
    </main>
  );
};

export default LandingPage;
