import styled from "@emotion/styled";
import goitLogo from '../../images/goitLogo.png';
import chatIcons from '../../images/chatIcons.png';

export const ProfileCard = styled.div`
position: relative;
width: 380px;
height: 460px;
margin-left: auto;
margin-right: auto;
padding: 284px 0px 36px;

background-image: url(${goitLogo}), url(${chatIcons}),
linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
background-size: 78px, 308px, cover;
background-repeat: no-repeat;
background-position: left 20px top 20px, left 36px top 28px, center;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
box-sizing: border-box;
`;

export const Line = styled.div`
position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
  inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const Circle = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 150px;
top: 178px;
background: #ebd8ff;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
  inset 0px -2.19582px 4.39163px #ae7be3,
  inset 0px 4.39163px 3.29372px #fbf8ff;
border-radius: 50%;
`;

export const Avatar = styled.img`
position: absolute;
width: 62px;
  height: 62px;
  left: 159px;
  top: 187px;
background-color: #EBD8FF;
  border-radius: 50%;

  object-fit: contain;
  box-shadow: 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
`;

export const TweetsLabel = styled.p`
margin-bottom: 16px;
text-align: center;
font-size: 20px;
line-height: 1.2;
text-transform: uppercase;
color: #ebd8ff;
`;

export const FollowBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 14px 28px;
margin-left: auto;
margin-right: auto;
width: 196px;
height: 50px;
background: #ebd8ff;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
font-weight: 600;
font-size: 18px;
line-height: 1.22;
text-transform: uppercase;
color: #373737;
transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        scale: 1.02;
        background: #5CD3A8;
      }
  }
`;