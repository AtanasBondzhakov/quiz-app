import completeImg from '../assets/quiz-complete.png';

export default function Summary() {
    return (
        <div id="summary">
            <img src={completeImg} alt="Trophy Image" />
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
        </div>
    );
};
