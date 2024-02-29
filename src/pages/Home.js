import SearchBar from "../components/SearchBar";
import CookData from "../components/CookData";
import Response from "../components/Response";

const Home = () => {
    return (
        <div className="home">
            <Response />
            <SearchBar />
            <CookData />
        </div>
    );
};

export default Home;