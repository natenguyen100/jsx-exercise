const App = () => {
    return (
      <div className="app">
        <Tweet
          username="Nate Nguyen"
          name="User One"
          date="2024-07-30"
          message="This is the first tweet."
        />
        <Tweet
          username="John Win"
          name="User Two"
          date="2024-07-29"
          message="This is the second tweet."
        />
        <Tweet
          username="Sarah Win"
          name="User Three"
          date="2024-07-28"
          message="This is the third tweet."
        />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));