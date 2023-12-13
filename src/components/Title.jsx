import styled from 'styled-components';

const GlowingText = styled.span`
  font-family: 'Your Font'; /* Replace with your desired font */
  font-size: 3rem; /* Increase the font size */
  position: relative;
  display: inline-block;
  color: transparent; /* Set text color to transparent */
  background: linear-gradient(90deg, #ff99ff, #cc66ff, #9966ff, #6699ff, #66ccff, #66ffcc, #99ff66, #ffcc66, #ff9966, #ff6666, #ff99ff); /* Bright and colorful rainbow effect */
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.5); /* Adjust the shadow for a slight glow */
`;

const Title = () => {
  return (
    <GlowingText>Raghavendra GH <br></br>  "Code. Create. Transform."</GlowingText>
  );
};

export default Title;
