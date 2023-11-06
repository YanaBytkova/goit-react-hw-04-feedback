import {useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';


export const App = () =>{
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    const count = evt.target.textContent;
    if (count === "good") {
      setGood(good + 1);
      console.log("Good", good);
    }
    if (count === "neutral") {
      setNeutral(neutral + 1);
      console.log("Neutral", neutral);
      
    }
     if (count === "bad") {
      setBad(bad + 1);
      console.log("Bad", bad);
      }
  }
  const countTotalFeedback = () => { 
    // const { good, neutral, bad } = setState( good, neutral, bad);
    const total = good + neutral + bad;
    console.log(total);
    return total;
  }

  const countPositivePercentage = () => { 
    return Math.round((good / countTotalFeedback()) * 100)
  } 

    return (
      <div>
        <Section title="Please leave your feedback here">
        <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={onLeaveFeedback} />
        {countTotalFeedback() <= 0 && (<Notification message="There is no feedback" />)
        }
        </Section>
      
        
        
          {countTotalFeedback() > 0 && (<Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositivePercentage()} />
        
          </Section>)}
      </div>
    )
  }

