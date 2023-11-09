import styled from 'styled-components';

import { Row, Col } from 'antd';


function Header() {
  return (
    <div>
       <Container>
       <Top>
           <div className='left'>
               <h1>You’ve got <span>7 book</span></h1>
               <h3>Your task today</h3>
           </div>
           <div className='right'>
              <input placeholder='enter your name'/>
              <button>+ Create a book</button>
           </div>
       </Top>
      <Row>
        <Col  sm={24} md={12} lg={8} xl={8}>
           <Card>
             <h2>Title PI fdfdsfds</h2>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Alias aliquam modi q
                uidem ut totam? Tempore ipsa officiis
                 eaque voluptate at.</p>
             <h3>Dawlet Kenesbaev 2023</h3>
             <span>259 pages</span>
            </Card> 
        </Col>
        <Col  sm={24} md={12} lg={8} xl={8}>
           <Card>
             <h2>Title PI fdfdsfds</h2>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Alias aliquam modi q
                uidem ut totam? Tempore ipsa officiis
                 eaque voluptate at.</p>
             <h3>Dawlet Kenesbaev 2023</h3>
             <span>259 pages</span>
            </Card> 
        </Col><Col  sm={24} md={12} lg={8} xl={8}>
           <Card>
             <h2>Title PI fdfdsfds</h2>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Alias aliquam modi q
                uidem ut totam? Tempore ipsa officiis
                 eaque voluptate at.</p>
             <h3>Dawlet Kenesbaev 2023</h3>
             <span>259 pages</span>
            </Card> 
        </Col><Col  sm={24} md={12} lg={8} xl={8}>
           <Card>
             <h2>Title PI fdfdsfds</h2>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Alias aliquam modi q
                uidem ut totam? Tempore ipsa officiis
                 eaque voluptate at.</p>
             <h3>Dawlet Kenesbaev 2023</h3>
             <span>259 pages</span>
            </Card> 
        </Col>
        <Col  sm={24} md={12} lg={8} xl={8}>
           <Card>
             <h2>Title PI fdfdsfds</h2>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Alias aliquam modi q
                uidem ut totam? Tempore ipsa officiis
                 eaque voluptate at.</p>
             <h3>Dawlet Kenesbaev 2023</h3>
             <span>259 pages</span>
            </Card> 
        </Col>
        <Col  sm={24} md={12} lg={8} xl={8}>
           <Card>
             <h2>Title PI fdfdsfds</h2>
             <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Alias aliquam modi q
                uidem ut totam? Tempore ipsa officiis
                 eaque voluptate at.</p>
             <h3>Dawlet Kenesbaev 2023</h3>
             <span>259 pages</span>
            </Card> 
        </Col>  
      </Row>
       </Container>
    </div>
  )
}
const Container = styled.div`
  margin:0 auto;
  padding: 0 20px;
  max-width: 1240px;
`
const Top = styled.div`
    display: flex;
    position: relative;
    margin:50px 0 100px 0;
    h1 {
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
        letter-spacing: 0px;
        text-align: left;
    }
    h3 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0px;

    }
    .left {
       position: absolute;
       left: 0;
       span {
        color: #6200EE;
;
       }
    }
    .right {
        position: absolute;
        right: 0;
        input {
            width: 320px;
            height: 47px;
            padding: 14px 16px 14px 16px;
            border-radius: 6px;
            border: 1px;
            gap: 16px;
            font-size:19px;
            outline: none;
        }
        button {
            width: 181px;
            height: 40px;
            padding: 10px 24px 10px 24px;
            border-radius: 4px;
            font-size:17px;
            font-weight:500;
            margin-left: 5px;
            gap: 12px;
            color: #fefefe;
            background: #6200EE;
            cursor: pointer;
            transition: 0.6s;
            border: 2px solid transparent;

        }
        button:hover {
            background: white;
            color: #6200EE;
            border: 2px solid #6200EE;
            transform: scale(1.02);

        }
    }
`
const Card = styled.div`
    max-width: 390.33px;
    min-height: 209px;
    padding: 32px;
    border-radius: 12px;
    border: 1px;
    gap: 16px;
    background: #d6a5a5;
    margin:30px;
    font-family: Montserrat;

    h2 {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
    }
    p {
        font-family: Mulish;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: left;
        margin:20px 0;
    }
    h3 {
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
    }
    span {
        display: inline-block;
        margin-left: 10px;
        padding:3px 7px;
        border-radius:9px;
        background: green;
        margin-right:auto;
    }
`

export default Header
