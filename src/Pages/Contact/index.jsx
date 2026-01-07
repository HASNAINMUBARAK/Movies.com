import { makeStyles } from '@material-ui/core';
import React from 'react'

const Contact = () => {
  const classes = useStyles();
  return (
     <div className={classes.contain}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia tempora dignissimos cumque consequuntur veniam maxime voluptas reprehenderit blanditiis! Perferendis doloribus deleniti excepturi libero eaque fugiat porro a dolorem laudantium?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia tempora dignissimos cumque consequuntur veniam maxime voluptas reprehenderit blanditiis! Perferendis doloribus deleniti excepturi libero eaque fugiat porro a dolorem laudantium?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia tempora dignissimos cumque consequuntur veniam maxime voluptas reprehenderit blanditiis! Perferendis doloribus deleniti excepturi libero eaque fugiat porro a dolorem laudantium?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia tempora dignissimos cumque consequuntur veniam maxime voluptas reprehenderit blanditiis! Perferendis doloribus deleniti excepturi libero eaque fugiat porro a dolorem laudantium?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia tempora dignissimos cumque consequuntur veniam maxime voluptas reprehenderit blanditiis! Perferendis doloribus deleniti excepturi libero eaque fugiat porro a dolorem laudantium?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officia tempora dignissimos cumque consequuntur veniam maxime voluptas reprehenderit blanditiis! Perferendis doloribus deleniti excepturi libero eaque fugiat porro a dolorem laudantium?</p></div>
  )
}

export default Contact
const useStyles = makeStyles((theme) => ({
  contain: {
    padding:"20px",
  },
}));