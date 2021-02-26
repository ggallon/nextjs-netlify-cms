export default function HomePage({ content }) {
  const { attributes } = content;

  return (
    <>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <img src={attributes.hero_image} alt='hero image' />
    </>
  );
};

export async function getStaticProps() {
  const content = await import(`../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
};
