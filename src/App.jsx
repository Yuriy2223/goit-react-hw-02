import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(
    JSON.parse(window.localStorage.getItem("feedback")) || {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback
    ? (feedback.good / totalFeedback) * 100
    : 0;

  return (
    <Container>
      <div>
        <Description />
        <Options
          handleFeedback={updateFeedback}
          totalFeedback={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            {...feedback}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </Container>
  );
};

export default App;
