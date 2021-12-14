import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import image1 from "../../Assets/Gallery/1.png";
import image2 from "../../Assets/Gallery/2.png";
import image3 from "../../Assets/Gallery/3.png";
import image4 from "../../Assets/Gallery/4.png";
import image5 from "../../Assets/Gallery/5.png";
import image6 from "../../Assets/Gallery/6.png";
import image7 from "../../Assets/Gallery/7.png";
import image8 from "../../Assets/Gallery/8.png";
import image9 from "../../Assets/Gallery/9.png";
import image10 from "../../Assets/Gallery/10.png";
import image11 from "../../Assets/Gallery/11.png";
import image12 from "../../Assets/Gallery/12.png";
import image13 from "../../Assets/Gallery/13.png";
import image14 from "../../Assets/Gallery/14.png";
import image16 from "../../Assets/Gallery/16.png";
import image15 from "../../Assets/Gallery/15.png";
import image17 from "../../Assets/Gallery/17.png";
import image18 from "../../Assets/Gallery/18.png";

export default function Gallery() {
  return (
    <Box fullWidth>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: image1,
    title: 'My past project',
  },
  {
    img: image14,
    title: 'My past project',
  },
  {
    img: image3,
    title: 'My past project',
  },
  {
    img: image4,
    title: 'My past project',
  },
  {
    img: image18,
    title: 'My past project',
  },
  {
    img: image5,
    title: 'My past project',
  },
  {
    img: image12,
    title: 'My past project',
  },
  {
    img: image17,
    title: 'My past project',
  },
  {
    img: image7,
    title: 'My past project',
  },
  {
    img: image15,
    title: 'My past project',
  },
  {
    img: image8,
    title: 'My past project',
  },
  {
    img: image9,
    title: 'My past project',
  },
  {
    img: image16,
    title: 'My past project',
  },
  {
    img: image10,
    title: 'My past project',
  },
  {
    img: image11,
    title: 'My past project',
  },
  {
    img: image6,
    title: 'My past project',
  },
  {
    img: image13,
    title: 'My past project',
  },
  {
    img: image2,
    title: 'My past project',
  },
];
