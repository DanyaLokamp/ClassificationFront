import React, { useEffect, useState } from 'react';
import "./Classifier.css"
import TextField from '@material-ui/core/TextField'; 
import CustomizedSteppers from './Stepper'
import { useDispatch, useSelector } from "react-redux";
import * as selectors from '../store/selectors'
import * as classifierLogic from '../logic/classifier'
import * as articleLogic from '../logic/article'

const Classifier = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [isBtnEnabled, setBtnState] = useState(true);

  const { articleClass, isLoading, tags } = useSelector(
    (state) => ({
      articleClass: selectors.getClassification(state),
      tags: selectors.getTags(state)
    }));

  const handleClick = () => {
    if (text) {
      dispatch(classifierLogic.classifyText(text));
      setBtnState(false);
    }
  }

  useEffect(() => {
    console.log(tags)
  }, [tags])

  useEffect(() => {
    if (text === '' && articleClass) {
      dispatch(classifierLogic.removeClassification())
    }
  }, [text])

  const onTextFieldClick = (e) => {
    if (e.key === 'Enter') 
      handleClick();
  }

  useEffect(() => {
    if(articleClass) {
      setBtnState(true)
    }
  }, [articleClass])

  useEffect(() => {
    dispatch(articleLogic.getTags())
  }, [])

  return (
    <div>
      <div className="container">
        <div className="page-left">
          {/* <div className="box"> */}
          <p>В настоящий момент данный классификатор способен определить, принадлежит ли данная статья одному из нижеперечисленных классов:</p> 
          {tags !== null ? <ul>
            {tags.map((tag) => (
              <li key={tag.id}>{tag.tag_name}</li>
            ))}
          </ul> : null}
        {/* </div> */}
        </div>
        <div className="page-main">
          <CustomizedSteppers text={text} isBtnClicked={!isBtnEnabled}/>
          {(articleClass && text)? <div className="box"><p>{articleClass}</p></div> : null}
          <form className="multi-text-field" noValidate autoComplete="off">
            <div>
              <TextField
                onKeyPress={e => onTextFieldClick(e)}
                onChange={e => setText(e.target.value)}
                id="outlined-multiline-static"
                label="Введите текст статьи"
                multiline
                rows={20}
                variant="outlined"
              />
            </div>
          </form>
          {isBtnEnabled ?
          <button className="button" onClick={handleClick}>Классифицировать</button> :
          <button className="button-wait" disabled={true}>Пожалуйста, подождите...</button>}
        </div>
        <div className="page-right">
        </div>
      </div>
    </div> 
  );
}

export default Classifier;
