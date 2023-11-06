import css from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <div className={css.statistContainer}>
      <b>Good: {good}</b>
      <b>Neutral: {neutral}</b>
      <b>Bad: {bad}</b>
      <b>Total: {total}</b>
      <b>Positive Feadback: {positivePercentage}</b>
    </div>
    );
          
    };

  export default Statistics;
