import css from './CafeInfo.module.css';

function CafeInfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.description}>
        How was your visit? Choose a rating to share your feedback.
      </p>
    </div>
  );
}

export default CafeInfo;
