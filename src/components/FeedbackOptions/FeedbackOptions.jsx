import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      {options.map(option => {
        return (
          <button
          className={css.button}
            type="button"
            onClick={onLeaveFeedback}
            key={option}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}; 
export default FeedbackOptions;
