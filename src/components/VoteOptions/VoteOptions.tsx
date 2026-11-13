import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const options: VoteType[] = ['good', 'neutral', 'bad'];

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={css.button}
          onClick={() => onVote(option)}
        >
          {option}
        </button>
      ))}
      {canReset && (
        <button type="button" className={css.reset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
