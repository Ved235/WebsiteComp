/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Text,
  Input,
  Label,
  Button,
  Select,
  Heading,
  Container,
} from 'theme-ui';
import { useState } from 'react';
import { rgba } from 'polished';
import Image from 'components/image';
import Swal from 'sweetalert2'
import SideImage from 'assets/images/beans.png';
import ReactStars from 'react-stars'

const tlds = [
  {
    label: '.com',
    value: '.com',
  },
  {
    label: '.net',
    value: '.net',
  },
  {
    label: '.org',
    value: '.org',
  },
];
const Banner = () => {
const FORMSPARK_ACTION_URL = "https://submit-form.com/IjEPvrGq";
const [message, setMessage] = useState();
const onSubmit = async (e) => {
  e.preventDefault();
  await fetch(FORMSPARK_ACTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });
  Swal.fire(
    'Thanks',
    'Your Feedback Is Appreciated',
    'success'
  )
};

  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        
        <Box sx={styles.grid}>
        <Heading sx={styles.none}>"Never to
 </Heading>
          <Box sx={styles.domainCard}>
          <Heading >"Never too much
 chocolate!"</Heading>
<form onSubmit={onSubmit} sx={styles.inputGroup}>

 <ReactStars
  count={5}
  value={message}
  onChange={(e) => setMessage(e)}
  size={48}
  color2={'#ffd700'} />
 <Button type="submit" variant="primary" sx={styles.submit}>
              Submit
            </Button>
            <Text as="p" sx={styles.note}>
              Thank you for your feedback
            </Text>
  
</form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    backgroundImage: 'url("https://media.discordapp.net/attachments/673481456105947146/1008768055008047164/banner.png?width=485&height=677")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16],
  },
  none:{
    opacity: 0,
 
  },
  grid: {
    gap: ['30px 60px', null, null, null, '30px 40px', '30px 60px'],
    display: 'flex',
    minHeight: [null, null, null, null, null, '66vh', '81vh'],
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      'repeat(1, 1fr)',
      '510px 1fr',
    ],
  },
  domainCard: {
    background: 'white',

    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
    borderRadius: 10,
    p: ['30px 25px 50px', null, null, '40px 55px 40px'],
    m: ['20px', null, null, '0 auto', '100px'],
    maxWidth: [null, null, null, 480, 'none'],
    h2: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 9, 14],
      lineHeight: 1.36,
      letterSpacing: 'heading',
      color: 'textSecondary',
      mb: [5, null, null, 7, 4],
    },
  },
  inputGroup: {
    display:'flex',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    input: {
      border: 0,
      borderRadius: 0,
      fontSize: [1, null, null, 2],
      minHeight: [40, null, null, 45 ],
      p: 0,
      ':focus': {
        boxShadow: 'none',
      },
      '::placeholder': {
        fontSize: '15px',
        lineHeight: 1.33,
        color: rgba('#02073E', 0.4),
      },
      ':-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 30px white inset !important',
      },
    },
    select: {
      border: 0,
      color: 'textSecondary',
      fontWeight: 500,
      fontSize: [0, null, null, '15px'],
      lineHeight: 1.33,
      letterSpacing: 'heading',
      minHeight: [45, null, null, 60],
      minWidth: [60, null, null, 75],
      p: 0,
      textTransform: 'uppercase',
      ':focus': {
        outline: 0,
      },
      '+ svg': {
        color: '#A6A8BB',
        height: 40,
        width: 40,
      },
    },
  },
 
  submit: {
    fontSize: [1, null, null, 2],
    mt: [4],
    minHeight: [45, null, null, 60],
    width: '100%',
  },
  note: {
    fontStyle: 'italic',
    fontSize: [0, null, null, '15px'],
    lineHeight: 1.33,
    textAlign: 'center',
    color: rgba('#02073E', 0.5),
    mt: [4],
  },
};
