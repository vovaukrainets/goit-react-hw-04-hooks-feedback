import PropTypes from 'prop-types';
import shortid from 'shortid';
import './Statistics.css';

const Statistics = ({ feedbacks, total, positivePercentage }) => {
  const feedbackTags = Object.keys(feedbacks);
  return (
    <div>
      <table>
        <tbody>
          <tr key={shortid.generate()}>
            <th>Feedback</th>
            <th>Votes</th>
          </tr>
          {feedbackTags.map(tag => {
            const itemKey = shortid.generate();
            return (
              <tr key={itemKey}>
                <td>{tag}</td>
                <td>{feedbacks[tag]}</td>
              </tr>
            );
          })}
          <tr key={shortid.generate()}>
            <td>Total</td>
            <td>{total()}</td>
          </tr>
          <tr key={shortid.generate()}>
            <td>Positive feedbacks</td>
            <td>{positivePercentage()}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Statistics.propTypes = {
  feedbacks: PropTypes.object,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

export default Statistics;
