import React from 'react'
import classes from './backButton.module.css'
import { Link } from 'react-router-dom'

const BackButton = (props) => {
  return (
    <Link to={props.path}>
    <button className={classes.backButton}>
        {props.title}
    </button>
    </Link>
  )
}

export default BackButton