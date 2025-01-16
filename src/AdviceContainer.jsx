const AdviceContainer = ({id, advice, getAdviceFunc}) => {
  return (
    <div className="advice-container">
      <p className="advice-id">ADVICE #{id}</p>
      <h3 className="advice">“{advice}”</h3>
      <div className="pattern-divider"></div>
      <button className="dice-button" onClick={getAdviceFunc} aria-label="dice">
        <img src="./images/icon-dice.svg" alt="" />
      </button>
    </div>
  );
}

export default AdviceContainer
