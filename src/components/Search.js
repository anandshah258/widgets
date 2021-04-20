import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000)

    return () => {
      clearInterval(timerId);
    }
  }, [term])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        }
      });
      setResults(data.query.search)
    };
    if (debouncedTerm) search();
  }, [debouncedTerm])

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">
            <a href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
              {result.title}
            </a>
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="term">Enter Search Term</label>
          <input
            id="term"
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;