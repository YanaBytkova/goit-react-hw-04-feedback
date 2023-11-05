import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import Section from 'components/Section/Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0, 
    // total: 0,
    // positivePercentage: 0
  };
  onLeaveFeedback = evt => {
    const count = evt.target.textContent;
    if (count === "good") {
      this.setState({
        good: this.state.good + 1
      });
      
    }
    if (count === "neutral") {
      this.setState({
        neutral: this.state.neutral + 1
      });
      
    }
     if (count === "bad") {
       this.setState({
        bad: this.state.bad + 1
       });
      }
  }
  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositivePercentage = () => { 
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  } 

  render() { 
    const { good, neutral, bad } = this.state
    const countTotal = this.countTotalFeedback();
    const percenatge = this.countPositivePercentage();
    return (
      <div>
        <Section title="Please leave your feedback here">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        {countTotal <= 0 && (<Notification message="There is no feedback" />)
        }
        </Section>
      
        
        
          {countTotal > 0 && (<Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotal} positivePercentage={percenatge} />
        
          </Section>)}
      </div>
    )
  }
}
