import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BiMenuAltLeft } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

import {
    IMG_HEADER_BACK,
    IMG_LOGO,
} from '../constants/images'

import {
    NavLinks
} from '../constants/nav'

interface mobileRespProps {
    flag: boolean;
}

export const Header = () => {

    const [respFlag, setRespFlag] = useState(false);

    return (
        <React.Fragment>
            <HeaderWrapper>
                <img src={IMG_HEADER_BACK} />
                <HeaderContainer>
                    <Link to='/'>
                        <img src={IMG_LOGO} alt='header-background'></img>
                    </Link>

                    <div className="links">
                        {
                            NavLinks.map(item => (
                                <Link to={item.link} className={item?.styleFlag ? 'styled' : ''} key={item.key}>{item.title}</Link>
                            ))
                        }
                        <span> En <BiChevronDown></BiChevronDown></span>
                    </div>
                    <BiMenuAltLeft className="mobile-menu" onClick={() => setRespFlag(true)}></BiMenuAltLeft>
                </HeaderContainer>
                
            </HeaderWrapper>
            <MobileResp flag={ respFlag }>
                <div className="mobile-menu-div">
                    <GrFormClose className="mobile-menu-closer" onClick={() => setRespFlag(false)}></GrFormClose>

                    <div className="mobile-menu-container">
                        {
                            NavLinks.map(item => (
                                <Link to={item.link} className={item?.styleFlag ? 'styled' : ''} key={item.key} onClick={() => setRespFlag(false)}>{item.title}</Link>
                            ))
                        }
                        <span> En <BiChevronDown></BiChevronDown></span>
                    </div>
                </div>
            </MobileResp>
        </React.Fragment>
    )
}

const HeaderWrapper = styled.div`
    margin: auto;
    max-width: ${p => p.theme.maxWidth};
    position: relative;
    & > img:nth-child(1) {
        position: absolute;
        top: -100px;
        right: -100px;
        z-index: -1;
    }
    padding: 30px;
`

const HeaderContainer = styled.div`
    padding: 48px 140px;
    display: flex;  
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${p => p.theme.headerMobileMedia1}) {
        padding: 48px 30px;
    }

    @media screen and (max-width: ${p => p.theme.headerMobileMedia3}) {
        padding: 20px 10px;
    }

    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        
        gap: 55px;

        @media screen and (max-width: ${p => p.theme.headerMobileMedia2}) {
            gap: 30px;
        }


        @media screen and (max-width: ${p => p.theme.headerMobileMedia3}) {
            display: none;
        }

        a, span {
            text-decoration: none;
            color: ${p => p.theme.fontColor1};
            font-size: ${p => p.theme.fontSize1};
            font-style: normal;
            font-weight: 400;
            white-space: nowrap;
        }

        .styled {
            border: 1px solid ${p => p.theme.fontColor1};
            padding: 9px 21px;
            border-radius: 5px;
        }
    }
    .mobile-menu {
        display: none;
        transform: scale(2.2);
        color: ${p => p.theme.fontColor1};
        @media screen and (max-width: ${p => p.theme.headerMobileMedia3}) {
            display: block;
        }
    }
`

export const MobileResp = styled.div<mobileRespProps>`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: -100vw;
    backdrop-filter: blur(5px);

    transition: all .5s;

    @media screen and (max-width: ${p => p.theme.headerMobileMedia3}) {
        right: ${p => p.flag ? "0" : "-100vw"};
    }
    .mobile-menu-div {
        position: relative;
        .mobile-menu-closer {
            position: absolute;
            top: 30px;
            right: 30px;
            transform: scale(2.5);
        }

        .mobile-menu-container {
            display: flex;
            flex-direction: column;
            padding: 40px;
            gap: 20px;
            a, span {
                text-decoration: none;
                color: ${p => p.theme.fontColor1};
                font-size: ${p => p.theme.fontSize2};
                font-style: normal;
                font-weight: 400;
                white-space: nowrap;
            }
        }
    }
`