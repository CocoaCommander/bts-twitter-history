import { useEffect, useState } from 'react';

const CloudMap = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [time, setTime] = useState("");
  
    const getData = e => {
        fetch(`http://localhost:3100/tweets?date=${time}&query=${query}`)
            .then(res => res.json())
            .then(d => setData(d))
            .catch(err => console.log(err));
    }
  
    useEffect(() => {
      console.log(data);
    }, [data]);

    const ProcessedData = ({
        d
    }) => {
        return (
            <>
                {d.data.map(tweet => <div className='tweet'>{tweet.text}</div>)}
            </>
        )
    }

    console.log(data);

    return (
        <section id="cloud-map">
        <h2>Cloud Map</h2>
        <p>Most common words related to BTS in a given month</p>
        <section id="cloud-queries">
            <label htmlFor="cloud-keyword"></label>
            <input type="text" id="cloud-key" name="cloud-key" onChange={e => setQuery(e.target.value)}></input>
            <label htmlFor="cloud-month">Month and Year of Choice:</label>
            <input type="datetime-local" id="cloud-month-input" name="cloud-month-input" onChange={e => setTime(e.target.value)}></input>
            <button onClick={e => getData(e)}>Generate Word Cloud</button>
        </section>
        {/* <img src="./imgs/word_cloud.png" alt="word cloud"></img> */}
        {(("errors" in data) || data.length === 0 || data.meta === 0) ? <div>No Tweets Found</div> : <ProcessedData d={data} />}
      </section>
    )
}

export default CloudMap;