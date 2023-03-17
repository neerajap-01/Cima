import { HomeOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Breadcrumb, DatePicker, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddBox, Container, InfoDiv, Main, SubtitleText, TitleText } from './styles';

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleInspection = () => {
    navigate('/add-inspection')
  }
  const handleSearch = () => {
    navigate('/result')
  }
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item href='/'>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Home
        </Breadcrumb.Item>
      </Breadcrumb>
      <Main>
        <TitleText
          fontSize={"53px"} 
          fontWeight={"700"}
        >
          Pipeline Inspection
        </TitleText>
        <SubtitleText>Add or search data</SubtitleText>
      </Main>
      <div style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", padding: "5rem" }}>
          <AddBox onClick={handleInspection}>
            <InfoDiv>
              <PlusOutlined style={{ fontSize: "7rem", color: "#FF8639", marginBottom: '1rem' }} />
              <TitleText 
                fontSize={"34px"} 
                fontWeight={"500"}
              >
                Add new inspection
              </TitleText>
            </InfoDiv>
          </AddBox>
          <AddBox onClick={handleSearch}>
          <InfoDiv>
              <SearchOutlined style={{ fontSize: "7rem", color: "#FF8639", marginBottom: '1rem' }} />
              <TitleText 
                fontSize={"34px"} 
                fontWeight={"500"}
              >
                Search
              </TitleText>
            </InfoDiv>
          </AddBox>
      </div>
    </Container>
  )
}

export default HomePage;