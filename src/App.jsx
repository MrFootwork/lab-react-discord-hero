import './App.css';
import logo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';

function App() {
	return (
		<div className='App'>
			<nav>
				<div id='logoContainer'>
					<img className='logo' src={logo} alt='logo' />
				</div>
				<div id='hamburgerContainer'>
					<img src={menuIcon} alt='hamburger icon' />
				</div>
			</nav>

			<article>
				<h1>Imagine a place...</h1>
				<p>
					...where you can belong to a school club, a gaming group, or a
					worldwide art community. Where just you and a handful of friends can
					spend time together. A place that makes it easy to talk every day and
					hang out more often.
				</p>
				<button>Download for Mac</button>
				<button>Open Discord in your browser</button>
			</article>
		</div>
	);
}

export default App;
