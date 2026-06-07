export default function App() {
  const stories = [
    {
      title: "Fall Line News Launches Regional Coverage Initiative",
      summary:
        "Fall Line News is an independent regional news project focused on Augusta, the Central Savannah River Area, and the communities connected by the Fall Line. The project combines local history, current events, weather monitoring, infrastructure reporting, and community stories into a single platform designed to serve the region."
    },
    {
      title: "Why Augusta Matters",
      summary:
        "Few cities in the Southeast have a history as deep and diverse as Augusta. From Fort Augusta and the river trade to the canal system, textile mills, military installations, medicine, and technology, Augusta has played a significant role in the development of the region."
    },
    {
      title: "Building a Regional Weather and Monitoring Network",
      summary:
        "Fall Line News is developing systems that will eventually provide weather monitoring, regional alerts, transportation updates, and infrastructure reporting throughout the CSRA and Fall Line region."
    }
  ];

  return (
    <div
      style={{
        background: "#10151d",
        color: "#e6e6e6",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <header
        style={{
          padding: "20px",
          borderBottom: "1px solid #333",
          background: "#0a1220"
        }}
      >
        <h1 style={{ margin: 0 }}>FALL LINE NEWS</h1>
        <p style={{ marginTop: "8px" }}>
          Regional Operations Network
        </p>
      </header>

      <img
        src="/falllinewide.png"
        alt="Fall Line News"
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
          display: "block"
        }}
      />

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px"
        }}
      >
        <h2>Latest Stories</h2>

        {stories.map((story, index) => (
          <div
            key={index}
            style={{
              background: "#1b222d",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #2c3645"
            }}
          >
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
          </div>
        ))}

        <h2>About Fall Line News</h2>

        <p>
          Fall Line News is an independent regional news initiative serving
          Augusta, the Central Savannah River Area, and the communities of the
          Fall Line region.
        </p>

        <p>
          Coverage includes local history, weather, infrastructure,
          transportation, public safety, industry, culture, and the stories of
          the people who call this region home.
        </p>

        <p>
          Reporting from the Fall Line — where nearly 300 years of culture,
          history, and industry meet.
        </p>
      </section>
    </div>
  );
}
