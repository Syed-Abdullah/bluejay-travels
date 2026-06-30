/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { InquiryProvider } from './context/InquiryContext';

export default function App() {
  return (
    <InquiryProvider>
      <main className="min-h-screen bg-transparent pb-24 md:pb-0">
        <Navbar />
        <Hero />
        <Services />
        <Stats />
        <Fleet />
        <WhyChooseUs />
        <Testimonials />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </InquiryProvider>
  );
}