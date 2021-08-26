import './App.css';
import './Feedback.css'
import { useState } from 'react'
import Statistics from './Components/Statistic'
import Notification from './Components/Notification'
import FeedbackOptions from './Components/FeedbackOptions'
import Section from './Components/Section'



function App () {
  const [good,setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [visibility, setVisibility] = useState(false);
   
    
    const onLeaveFeedback = (event) => {
        const {name} = event.target;
      switch (name) {
        case 'good':
          setGood(prevGood => prevGood + 1)
          break
        case 'neutral':
          setNeutral(prevNeutral => prevNeutral + 1)
          break
        case 'bad':
          setBad(prevBad => prevBad + 1)
          break
        default: return;
      }
      
        countTotalFeedback();
    }
  
    const countTotalFeedback = () => {
      setTotal(prevTotal => prevTotal + 1);
      setVisibility(true);
    }
    
  
   
        const positive = good / total * 100;
        const arrayMarks = ['good', 'neutral','bad'];
        return <div className="btn-field">
            <Section title="Please leave feedback">
            <FeedbackOptions options={arrayMarks } onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
            
            {visibility &&
                <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive} />
                }
                
            {!visibility&& <Notification message="No feedback given"/>}
            </Section>
            
        </div>
    
}
export default App;
