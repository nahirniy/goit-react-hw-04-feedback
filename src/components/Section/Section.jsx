// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from 'components/Statistics/Statistics';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.header}>{title}</h2>
      {children}
    </section>
  );
};
