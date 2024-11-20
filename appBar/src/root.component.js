const LinkNavbar = ({ link }) => {
  const current = window.location.pathname;
  return (
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#333",
      }}
    >
      {link?.map((val, key) => (
        <li style={{ float: "left" }} key={key}>
          <a
            href={val?.path}
            style={{
              display: "block",
              color: "white",
              textAlign: "center",
              padding: "14px 16px",
              textDecoration: "none",
              backgroundColor: current === val?.path ? "#111" : "#333",
            }}
          >
            {val?.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default function Root(props) {
  return (
    <header>
      <LinkNavbar
        link={[
          { name: "Home", path: "/home" },
          { name: "About", path: "/about" },
          { name: "Product", path: "/product" },
          { name: "News", path: "/news" },
          { name: "Contact Us", path: "/contact-us" },
        ]}
      />
    </header>
  );
}