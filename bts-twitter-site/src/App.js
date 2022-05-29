import './App.css';

function App() {
  return (
    <>
      <header>
        <section id="intro">
          <h1>visualisations using the Twiiter API</h1>
        </section>
      </header>

      <section id="cloud-map">
        <h2>Cloud Map</h2>
        <p>Most common words related to BTS in a given month</p>
        <section id="cloud-queries">
          <form id="cloud-form">
              <label for="cloud-keyword"></label>
              <input type="text" id="cloud-key" name="cloud-key" value="Jungkook"></input>
          </form>
          <form id="cloud-form">
            <label for="cloud-month">Month and Year of Choice:</label>
            <input type="datetime-local" id="cloud-month-input" name="cloud-month-input"></input>
            <input type="submit"></input>
          </form>
        </section>
        <img src="imgs/word_cloud.png" alt="word cloud"></img>
      </section>
      <section id="trends-graph">
      <h2>Trends Graph</h2>
        <p>Freqency of the word of choice in a given month</p>
        <section id="trend-queries">
          <form id="trend-form">
            <label for="trend-keyword"></label>
            <input type="text" id="trend-key" name="trend-key" value="Jimin"></input>
          </form>
          <form id="trend-form">
            <label for="trend-month">Month and Year of Choice:</label>
            <input type="datetime-local" id="trend-month-input" name="trend-month-input"></input>
            <input type="submit"></input>
          </form>
        </section>
        <img src="imgs/filler-trends.png" alt="trends graph"></img>
      </section>
      <section id="top-tweets">
        <h2>Top 10 Tweets</h2>
        <p>These are the top 10 tweets with the most retweets</p>
        <section id="tweet-queries">
          <form id="tweet-form">
            <label for="tweet-keyword"></label>
            <input type="text" id="tweet-key" name="tweet-key" value="J-Hope"></input>
          </form>
          <form id="tweet-form">
            <label for="tweet-month">Month and Year of Choice:</label>
            <input type="datetime-local" id="tweet-month-input" name="tweet-month-input"></input>
            <input type="submit"></input>
          </form>
        </section>
        <ol>
          <li>tweet 1 - 10 retweets</li>
          <li>tweet 2 - 9 retweets</li>
          <li>tweet 3 - 8 retweets</li>
          <li>tweet 4 - 7 retweets</li>
          <li>tweet 5 - 6 retweets</li>
          <li>tweet 6 - 5 retweets</li>
          <li>tweet 7 - 4 retweets</li>
          <li>tweet 8 - 3 retweets</li>
          <li>tweet 9 - 2 retweets</li>
          <li>tweet 10 - 1 retweets</li>
        </ol>
      </section>
    </>
  );
}

export default App;
