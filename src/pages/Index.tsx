import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsCalculatorSection from '@/components/ProjectsCalculatorSection';
import ReviewsContactFooter from '@/components/ReviewsContactFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProjectsCalculatorSection />
      <ReviewsContactFooter />
    </div>
  );
};

export default Index;
