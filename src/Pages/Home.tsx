import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div className="mx-auto my-auto p-7 text-justify">
            <h1 className="font-bold text-4xl text-center">Welcome</h1>
            <p>This is A simple example of <Link to="https://reactjs.org/" target="_blank" className="hover:text-white">React</Link> + <Link to="https://tailwindcss.com/" target="_blank" className="hover:text-white">Tailwind</Link> + <Link to="https://www.typescriptlang.org/" target="_blank" className="hover:text-white">Typescript</Link></p>
        </div>
     );
}
 
export default Home;