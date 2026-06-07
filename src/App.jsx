export default function App() {
  const stories = [
    {
      title: "Fall Line News Launches",
      summary:
        "Fall Line News is building a regional news network focused on Augusta, the CSRA, weather, infrastructure, and community reporting."
    },
    {
      title: "Augusta History Project",
      summary:
        "Local stories, photographs, and memories are being collected to preserve the history of Augusta and the Fall Line region."
    },
    {
      title: "Station Development Continues",
      summary:
        "Work continues on weather monitoring, regional alerts, multimedia reporting, and future broadcast capabilities."
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
          borderBottom: "1px solid #333"
        }}
      >
        <h1>FALL LINE NEWS</h1>
        <p>Regional Operations Network</p>
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
              marginBottom: "15px",
              borderRadius: "8px"
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
      </section>
    </div>
  );
}
