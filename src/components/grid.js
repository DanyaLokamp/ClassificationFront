import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "./grid.css";
import Classifier from './Classifier'
import CheckboxListSecondary from '../components/collection'


const useStyles  = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }))
  
function CenteredGrid() {
    const classes = useStyles();
  
    return (
        <div>
            <div className="box1">
                <Classifier/>
            </div>
            <div className="box2">
                <CheckboxListSecondary/>
            </div>
            <div className="box3">

            </div>
        </div>
    );
  }

  export default CenteredGrid;
