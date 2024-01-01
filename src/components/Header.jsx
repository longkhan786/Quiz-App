import Quiz from '../assets/quiz-logo.png';
function Header() {
    return (
        <header>
            <h1>Quiz App</h1>
            <img src={Quiz} alt="Quiz" />
        </header>
    );
}
export default Header;