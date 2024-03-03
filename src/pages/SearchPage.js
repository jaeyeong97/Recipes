import { useState } from "react";
import Search from "./Search";
import SearchItem from "../components/SearchItem";
import styled from "styled-components";

const Title = styled.h2`
    width : 100%;
    text-align : center;
    font-size : 28px;
    line-height : 1em;
    padding : 30px;
`;

const SearchPage = ({
    ATT_FILE_NO_MAIN,
    RCP_NM,
    recipes }) => {
    const [search, setSearch] = useState("");

    const filterSearch = () => {
        return search === '' ? [] : recipes.filter((it) => it.RCP_NM.toLowerCase().includes(search.toLowerCase()));
    }

    return (
        <div className="search_page">
            <Title>레시피 파인더</Title>
            <Search search={search} setSearch={setSearch} />
            {filterSearch().map((it) => (<SearchItem key={it.RCP_SEQ} {...it} />))}
        </div>
    );
};

export default SearchPage;
