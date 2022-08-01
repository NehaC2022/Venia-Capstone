const FormInput=({type,label,value,aria, onChange,id,name})=>{
    return(   <label htmlFor="input-name">{label}<br />
                <input name = {name} type={type} value={value} id={id}  aria-describedby={aria} onChange={onChange} required/>
            </label>)
}
export default FormInput;