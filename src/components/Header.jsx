import Quiz from '../assets/quiz-logo.png';

// million-ignore
function Header() {
    return (
        <header>
            <h1>Quiz App</h1>
            <img src={Quiz} alt="Quiz" />
        </header>
    );
}
export default Header;