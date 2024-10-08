import HeroSection from '../components/Sections/HeroSection';
import Section2 from '../components/Sections/Section2';
import Section3 from '../components/Sections/Section3';
import SectionFour from '../components/Sections/SectionFour';
import SectionFive from '../components/Sections/SectionFive';

export const metadata = {
  title: 'FYLP: Filipino Youth Leadership Program 2024',
  description: 'The official Filipino Youth Leadership Program 2024 Website.',
};

export default function Home() {
  return (
    <main>
      {/* add sections here */}
      <HeroSection />
      <Section2 />
      <Section3 />
      <SectionFour />
      <SectionFive />
      {/* FYLP: Filipino Youth Leadership Program 2024 */}
    </main>
  );
}
