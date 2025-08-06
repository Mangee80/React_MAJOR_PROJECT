import Profile from "../../assets/profileBig.png";
const Info = () => {
  const info = JSON.parse(window.localStorage.getItem("userData"));
  const genre = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <div
      style={{
        width: "31vw",
        height: "35.4vh",
        background: "#5746EA",
        borderRadius: "12px",
        padding: "6px",
        display: "flex",
        gap: "40px",
        boxSizing: "border-box"
      }}
    >
      <div>
        <img
          src={Profile}
          style={{
            height: "31vh",
            width: "7vw",
            marginLeft: "20px",
            marginTop: "14px",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", boxSizing: "border-box" }}>
        <p style={{ color: "white", fontSize: "22px", marginTop: "35px" }}>{info.name}</p>
        <p style={{ color: "white", fontSize: "23px" }}>{info.mail}</p>
        <p style={{ color: "white", fontSize: "48px" }}>{info.username}</p>
        <Chips categories={genre} color={"#9F94FF"} />
      </div>
    </div>
  );
};

const Chips = ({ color, categories }) => {
  return (
    <div style={{ width: "23vw" }}>
      {categories.map((category) => (
        <button
          style={{
            background: `${color}`,
            borderRadius: "12px",
            width: "8vw",
            color: "white",
            border: "none",
            padding: "6px",
            height: "28px",
            flexShrink: 0,
            margin: "5px 20px 10px 0px",
          }}
        >
           {category}{/*{" "}
          <span style={{ color: "black", marginLeft: "4px" }}>X</span> */}
        </button>
      ))}
    </div>
  );
};

export default Info;
