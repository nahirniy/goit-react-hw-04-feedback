import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, countFeedback }) => {
  return (
    <ul className={css.btn_list}>
      {options.map(option => {
        return (
          <li key={option} className={css.btn_item}>
            <button className={css.btn} onClick={() => countFeedback(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
