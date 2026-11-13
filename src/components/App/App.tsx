import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes';
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import css from './App.module.css';

const initialVotes: Votes = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [votes, setVotes] = useState<Votes>(initialVotes);
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const hasVotes = totalVotes > 0;
  const positiveRate = hasVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  function handleVote(type: VoteType) {
    setVotes((previousVotes) => ({
      ...previousVotes,
      [type]: previousVotes[type] + 1,
    }));
  }

  function resetVotes() {
    setVotes(initialVotes);
  }

  return (
    <main className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={hasVotes}
      />
      <section aria-label="Feedback statistics" aria-live="polite">
        {hasVotes ? (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        ) : (
          <Notification />
        )}
      </section>
    </main>
  );
}

export default App;
