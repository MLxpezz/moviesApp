import styled from "styled-components";
import Categories from "./subcomponents/categories/Categories";

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
`;

const CustomTextField = styled.input`
    background-color: rgba(31, 38, 46, 0.4);
    color: rgb(176, 184, 196);
`

const Nav = () => {
    return (
        <StyledNav>
            <p>Logo</p>
            <CustomTextField type="text" placeholder="Buscar..."/>
            <div>
                <Categories cat={'peliculas'}/>
                <Categories cat={'series'}/>
            </div>
        </StyledNav>
    );
};

export default Nav;