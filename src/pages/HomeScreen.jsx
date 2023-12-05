import '../css/home.css';
import TransitionPage from '../components/transition/TransitionPage';
function HomeScreen() {
  return (
    <div className="flex col center align_center w100">
      <TransitionPage>
    <h1>home</h1>
   </TransitionPage>
    </div>
  );
}

export default HomeScreen;
