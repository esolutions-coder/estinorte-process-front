interface StartCard {
  name: string;
  link: string;
  icon: string;
}
function StartCard(props: StartCard) {
  const { name, link, icon } = props;
  return (
    <a href={link} className="start__card">
      <div className="card__icon">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className="card__name">
        <h1>{name}</h1>
      </div>
    </a>
  );
}

export default StartCard;
