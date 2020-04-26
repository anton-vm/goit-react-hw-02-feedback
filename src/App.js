import React, { Component } from "react";
// import Feedbacks from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
import Section from "./Components/Section/Section";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Notification from "./Components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (type) => {

   this.setState((prev) => ({ [type]: prev[type] + 1 }));

  };

  countTotalFeedback = () => {

    return (this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback() * 100).toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const onLeaveFeedback = this.onLeaveFeedback;
    const total = this.countTotalFeedback();
    const positive =this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistic">
          {
            (total > 0  ? (
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
              
            ) : (
              <Notification message={"No feedback given"}/>
            ))
          }
        </Section>
      </>
    );
  }
}

export default App;
