interface TextSectionProps {
  heading: string;
  paragraphs: string[];
}

function TextSection({ heading, paragraphs }: TextSectionProps) {
  return (
    <section className="text-section">
      <h2>{heading}</h2>
      <div className="text-section__content">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default TextSection;
