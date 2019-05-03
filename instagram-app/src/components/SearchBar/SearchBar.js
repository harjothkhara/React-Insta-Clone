import React from 'react';
// import './SearchBar.css';
import igcamera from '../../images/igcameralogo.png';
import iglogo from '../../images/iglogo.png';
import heart from '../../images/searcheart.png';
import styled from "styled-components";

const Header = styled.header `
    margin: 0 auto;
    margin-top: 20px;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
    padding-bottom: 20px;
`;

const SearchBarImg = styled.img`
    height: 40px;
    margin: 0 20px;
`;

const InputWrapper = styled.div`
    width: 245px;
    height: 32px;
    outline: none;
    background-color: #efefef;
    border: 1px solid grey;
    border-radius: 3px;
    font-size: 1.6rem;
`;

const SearchInput = styled.input`
  height: 34px;
  width: 244px;
  /* text-align: center; */
`;

const SearchLogo = styled.div `
    margin: 0 90px;
    padding: 0% 24% 0% 0%
`;

const HeartImg = styled.img`
   margin: 0 150px;
`;

const CommentForm = styled.form`
  border-top: 5px ;
  width: 100%;
  height: 70px;
`;

const SearchBar = props => {
  return (
  <Header>
    <SearchBarImg src={igcamera} alt="igcamera"/>
    <SearchBarImg src={iglogo} alt="iglogo"/>
  
    <CommentForm onChange={props.performSearch} 
        onSubmit={props.performSearch} > 
      <InputWrapper>
        <SearchInput type="text"  value={props.search}
         placeholder="Search..." onChange={props.handleChanges}/>
      </InputWrapper>  
    </CommentForm>


    <SearchLogo>
        <HeartImg src={heart} alt="heart" />
      </SearchLogo>

 </Header> 
  )
}

export default SearchBar;