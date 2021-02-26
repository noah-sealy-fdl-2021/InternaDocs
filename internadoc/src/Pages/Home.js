import MainNavBar from '../Components/MainNavBar';
import { Link } from 'react-router-dom';

const Home = () => {
    // test
    return (
        <div>
            <MainNavBar pageName={'Home'} />
            <h2>Welcome to Intradocs</h2>
            <h3>This site is under development!</h3>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/search'>
                    <li>Doc Search</li>
                </Link>
                <Link to='/found'>
                    <li>Search Results Example</li>
                </Link>
            </ul>
        </div>
    )
}

export default Home
