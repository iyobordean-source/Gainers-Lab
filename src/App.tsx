import { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { seedQuestions, type Question } from './data/questions';
import { Announcements } from './screens/Announcements';
import { Ask } from './screens/Ask';
import { Admin } from './screens/Admin';
import { Home } from './screens/Home';
import { Learning } from './screens/Learning';
import { Welcome } from './screens/Welcome';

export type Screen = 'welcome' | 'home' | 'learning' | 'announcements' | 'ask' | 'admin';

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [questions, setQuestions] = useState<Question[]>(seedQuestions);

  const navigate = (next: Screen) => {
    setScreen(next);
    window.scrollTo({ top: 0 });
  };

  const submitQuestion = (text: string) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    setQuestions((prev) => [
      {
        id: `q-${Date.now()}`,
        text,
        askedBy: 'You',
        askedAt: `Today, ${time}`,
        status: 'pending',
      },
      ...prev,
    ]);
  };

  const answeredCount = questions.filter((q) => q.status === 'answered').length;

  return (
    <div className="min-h-dvh bg-night">
      <div className="mx-auto min-h-dvh max-w-[520px] border-line sm:border-x">
        {screen === 'welcome' && <Welcome onEnter={() => navigate('home')} />}

        {screen === 'home' && <Home onNavigate={navigate} />}

        {screen === 'learning' && <Learning />}

        {screen === 'announcements' && <Announcements />}

        {screen === 'ask' && <Ask onSubmit={submitQuestion} submittedCount={questions.length - seedQuestions.length} />}

        {screen === 'admin' && (
          <Admin
            questions={questions}
            answeredCount={answeredCount}
            onToggleAnswer={(id) =>
              setQuestions((prev) =>
                prev.map((q) =>
                  q.id === id ? { ...q, status: q.status === 'pending' ? 'answered' : 'pending' } : q,
                ),
              )
            }
          />
        )}
      </div>

      {screen !== 'welcome' && <BottomNav current={screen} onNavigate={navigate} />}
    </div>
  );
}
