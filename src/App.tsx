import { FC, useState } from 'react';

import './style.css';
import { findLongestUniqueWord } from './utils';

export const App: FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = () => {
    const longestWord = findLongestUniqueWord(text);
    setResult(longestWord);
  };
  return (
    <div className="content">
      <div className="inner-content">
        <input
          type="text"
          placeholder="Enter your text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
      {result && (
        <div className="result">
          <p>Longest word: <b>{result}</b></p>
        </div>
      )}
    </div>
  );
};
