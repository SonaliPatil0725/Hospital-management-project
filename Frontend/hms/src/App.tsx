
import './App.css';
import { createTheme, Button, MantineProvider } from '@mantine/core';
//this below import is for applying the below css to the content...if its not present then css is not applied to the content
import '@mantine/core/styles.css';

//I take this theme code form mantine theme...and put my customize theme(color) in that theme

const theme = createTheme({
  focusRing: "never",
  //font settings in mantine
  fontFamily: "Poppins, sans-serif",
  headings: {fontFamily: "Merriweather, serif"},
 
  colors: {
    //we can take this similar color shades from tailwind css color genrator website...put your fav color hashcode thre and generate the colors...
          primary: ['#f1fcfa', '#cff8ef', '#9ff0e1', '#67e1cf', '#32b9a9', '#1fad9f', '#168b82', '#166f69', '#165955', '#174a47', '#072c2b'],  
          neutral: ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#000000',],
        },
        primaryColor:"primary",
        //indexing starts from 0 so shade 4 means #32b9a9...this shade is used as primary color 
        primaryShade:4,
        defaultGradient: {
          //gradient from from index 4 to 8 form left to right
          from:"primary.4",
          to:"primary.8",
          deg:132
        }
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <div>
        <Button variant='gradient'>Hello</Button>
        <span>a</span>
      </div>

    

  
    </MantineProvider>

    
    
  );
}

export default App;
