import styled from "styled-components";

import { BsFillPlayFill } from 'react-icons/bs';

// ====================
// Images
// ====================
import {
    IMG_WOMAN1
} from '../../constants/images';

export const Landing = () => {
    return (
        <LandingWrapper>
            <LandingContainer>
                <p className="p1">BEST DESTINATIONS AROUND THE WORLD</p>
                <p className="p2">Travel, enjoy and live a new and full life</p>
                <p className="p3">
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>

                <div className="buttons">
                    <button className="find-more">Find out more</button>
                    <span className="play-demo">
                        <button><BsFillPlayFill></BsFillPlayFill></button>
                        <label>Play Demo</label>
                    </span>
                </div>
            </LandingContainer>
            <img src={IMG_WOMAN1} className='bg-landing'></img>
        </LandingWrapper>
    )
}

const LandingWrapper = styled.div`
    margin: auto;
    max-width: ${p => p.theme.maxWidth};
    display: flex;
    align-items: center;
    margin-top: 50px;
    padding: 0px 140px;

    position: relative;

    .bg-landing {
        position: absolute;
        top: -80px;
        right: 80px;
        z-index: -1;
    }
`

const LandingContainer = styled.div`
    width: 630px;
    .p1 {
        color: ${p => p.theme.themeColor1};
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 25px;
    }
    .p2 {
        font-style: normal;
        font-weight: 700;
        font-size: 84px;
        line-height: 89px;
        font-family: 'Volkhov-Bold';
        color: ${p => p.theme.fontColor2};
        margin-bottom: 30px;
    }

    .p3 {
        color: ${p => p.theme.fontColor3};
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        width: 80%;
        line-height: 30px;
        font-family: 'Poppins-Regular';
        margin-bottom: 35px;
    }

    .buttons {
        display: flex;
        align-items: center;
        gap: 45px;
        button {
            border: 0;
            outline: 0;
        }

        .find-more {
            background-color: ${p => p.theme.themeColor2};
            color: white;
            padding: 19px 27px;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 23px;
            box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
            border-radius: 10px;
        }

        .play-demo {
            button {
                background-color: ${p => p.theme.themeColor1};
                padding: 19px;
                border-radius: 50%;
                svg {
                    color: white;
                    transform: scale(1.5);
                }
            }

            label {
                color: ${p => p.theme.fontColor3};
                font-style: normal;
                font-weight: 500;
                font-size: 17px;
                line-height: 26px;
                margin-left: 20px;
            }
        }
    }
`