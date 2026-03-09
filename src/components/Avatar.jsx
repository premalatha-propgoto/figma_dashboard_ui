import "./Avatar.css";

function Avatar(props) {
  const name = props.name ?? "User";
  const src = props.src;
  const size = props.size ?? 36;
  const style = props.style; // Add support for custom style

  let content;

  if (src) {
    content = <img src={src} alt={name} />;
  } else if (name) {
    const firstLetter = name.charAt(0).toUpperCase();
    content = <span className="avatar-initial">{firstLetter}</span>;
  } else {
    content = (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="avatar-placeholder"
      ></svg>
    );
  }

  return (
    <div className="avatar" style={{ width: size, height: size, ...style }}>
      {content}
    </div>
  );
}

export default Avatar;
