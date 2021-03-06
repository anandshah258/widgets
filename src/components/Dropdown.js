import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (ref.current && ref.current.contains(e.target)) {
        return
      }
      setOpen(false);
    }

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    }
  }, [])

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  })

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label" htmlFor="selection">{label}</label>
        <div
          id="selection"
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
      {label === 'Select a Color'
        ? <div className={`ui ${selected.value} large label`}>{selected.label}</div>
        : null}
    </div >
  );
}

export default Dropdown;