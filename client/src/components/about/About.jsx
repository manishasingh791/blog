
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">About Me</Typography>
                <Text variant="h5">I'm an 4th year undergraduate from nit raipur in information technology. 
                    I've built websites using tech stack like reactjs,mongodb.<br />
                    If you are interested, you can view my projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/manishasingh791" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    you can contact me on instagram
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="manishasingh791791@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;