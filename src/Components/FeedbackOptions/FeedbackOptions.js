import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
{
    
    return (
    
        <div>
            {options.map(mark => {
                return (
                     <button
                type="button"
                onClick={onLeaveFeedback}
                name={mark}
            >
                {mark}
            </button>
                )
            })}
           
    </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;