import React from 'react'

const Custominput = (props) => {
    const {type, label ,id ,i_class}=props;
  return (
    <div class="form-floating mb-3">
  <input type={type}
   class={`form-control ${i_class}`}
   id={id}
    placeholder={label} />
  <label htmlFor={label}>{label}</label>
</div>
  )
}

export default Custominput
