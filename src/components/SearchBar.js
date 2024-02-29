import { useState } from "react";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    console.log(search)
    return (
        <div className="search_bar">
            <input type="text" placeholder="요리명을 입력해주세요." value={search} onChange={handleSearch} />
        </div>
    );
};

export default SearchBar;