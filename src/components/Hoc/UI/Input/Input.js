import React from 'react';
import classes from './Input.module.scss';
const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case 'input':
      inputElement = <input
            onChange={props.changed}
            className={classes.InputElement}
            type={props.type}
            {...props.elementConfig}
            defaultValue={props.value} />
      break;
      case 'textarea':
      inputElement = <textarea
                onChange={props.changed}
                className={classes.InputElement}
                {...props.elementConfig}
                defaultValue={props.value} >
                </textarea>
      break;
      case 'select':
      inputElement = <select
                onChange={props.changed}
                className={classes.InputElement}
                placeholder={props.elementConfig.placeholder}
                defaultValue={props.value} >
                {props.elementConfig.options.map(option => {
                  return <option key={option.value} value={option.value}>{option.displayValue}</option>
                })}
                </select>
      break;
    default:
      inputElement = <input
            onChange={props.changed}
            className={classes.InputElement}
            type={props.elementType}
            {...props.elementConfig}
            defaultValue={props.value} />
      break;
  }
  return (<div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
          </div>)
;
}

export default Input;