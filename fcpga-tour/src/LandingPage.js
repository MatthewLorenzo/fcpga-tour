import landingPage from "./landing_page.png";
export default function LandingPage() {
  const buttonStyles = {
    height: "10%",
    width: "100%",
    marginBottom: "50px",
    borderRadius: "10px",
    fontWeight: "bold",
  };
  return (
    <div
      className="pageContainer"
      style={{
        overflow: "hidden",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage: `url(${landingPage})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {" "}
      <div
        className="pageCard"
        style={{
          placeSelf: "center",
          alignContent: "center",
          borderRadius: "20px",
          width: "20%",
          height: "75vh",
          backdropFilter: `blur(5px)`,
          border: `1px solid rgba(255,255, 255, 1)`,
          padding: "40px",
          boxShadow: `-10px 10px 10px 0px rgba(0,0,0,0.5)`,
        }}
      >
        <button style={{ ...buttonStyles }}>Create League</button>
        <button style={{ ...buttonStyles }}>Join League</button>
      </div>
    </div>
  );
}
