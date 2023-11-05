import css from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    
          <div className={css.statistContainer}>
            <b>Good: {good}</b>
            <b>Neutral: {neutral}</b>
            <b>Bad: {bad}</b>
            <b>Total: {total}</b>
            <b>Positive Feadback: {positivePercentage}</b>
          </div>
  );
