import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';

function Day() {
  const day = useParams().day;
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <div>
      <h2>day : {day}</h2>

      {words.length === 0 && <p>Loading...</p>}

      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Day;
