import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000)

    return () => {
      clearInterval(timerId);
    }
  }, [text])

  useEffect(() => {
    const options = {
      method: 'POST',
      url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
      params: {
        to: `${language.value}`,
        'api-version': '3.0',
        profanityAction: 'NoAction',
        textType: 'plain'
      },
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
      },
      data: [{ Text: debouncedText }]
    };

    axios.request(options).then(response => {
      setTranslated(response.data[0]['translations'][0].text);
    }).catch(error => {
      console.error(error);
    });
  }, [language, debouncedText])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
}

export default Convert;