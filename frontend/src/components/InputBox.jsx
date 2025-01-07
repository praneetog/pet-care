export function InputBox({onChange, label, placeholder, type }) {
    return <div>
      <div>
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} type={type} />
    </div>
}