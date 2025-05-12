type EventsPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventsPageProps) {
  const slug = params.slug;
  const APP_URL = process.env.APP_URL;

  const response = await fetch(`${APP_URL}/${slug}`);
  const event = await response.json();
  console.log(event);
  return <main>Event page</main>;
}
