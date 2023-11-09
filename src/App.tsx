/** @format */

import Footer from './components/molecules/footer';
import BenefitsSection from './components/organisms/BenefitsSection';
import CTASection from './components/organisms/CTASection';
import CleanSection from './components/organisms/CleanSection';
import ClientsSection from './components/organisms/ClientsSection';
import HeroSection from './components/organisms/HeroSection';
import SecuritySection from './components/organisms/SecuritySection';
import ServicesSection from './components/organisms/ServicesSection';
import WhoSection from './components/organisms/WhoSection';

function App() {
	return (
		<div className='bg-[#fdfdfd] '>
			<HeroSection />
			<WhoSection />
			<CleanSection />
			<SecuritySection />
			<ServicesSection />
			<ClientsSection />
			<BenefitsSection />
			<CTASection />
			<Footer />
		</div>
	);
}

export default App;
