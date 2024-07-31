function Person({ name, age, hobbies }) {
    const voteText = age >=18
    ? "Go vote!"
    : "Go study!";

const hobbiesLIs = hobbies.map(hoppy => <li>{hobby}</li>);

return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbiesLIs}
        </ul>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));