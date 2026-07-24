import Header from './components/Header';
import TextSection from './components/TextSection';
import Footer from './components/Footer';
import { siteContent } from './content/siteContent';

function App() {
  return (
    <div className="site">
      <Header
        title={siteContent.title}
        introduction={siteContent.introduction}
      />

      <main className="main-content">
        {siteContent.sections.map((section) => (
          <TextSection
            key={section.id}
            heading={section.heading}
            paragraphs={section.paragraphs}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;

