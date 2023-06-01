import Header from '../components/HomePage/Header';
import AboutSection from '../components/HomePage/AboutSection';
import FeaturesSection from '../components/HomePage/FeaturesSection';
import PopularTourSection from '../components/HomePage/PopularTourSection';
import StoriesSection from '../components/HomePage/StoriesSection';
import BookingSection from '../components/HomePage/BookingSection';
import HomePageNavigation from '../components/HomePage/HomePageNavigation';

const HomePage = () => {
  return (
    <main>
      <HomePageNavigation />
      <Header />
      <AboutSection />
      <FeaturesSection />
      <PopularTourSection />
      <StoriesSection />
      <BookingSection />
    </main>
  );
};

export default HomePage;
