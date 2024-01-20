const Button = ({ label, backgroundColor, textColor, borderColor, fullWidth, url }) => {

  return (
    url ?
      <a href={url} className={`flex justify-center items-center gap-2 px-10 py-4 border font-montserrat font-semibold text-lg leading-none
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-primary text-white border-primary"}
          ${fullWidth && 'w-full'}`}
      >
        {label}
      </a> :
      <button className={`flex justify-center items-center gap-2 px-10 py-4 border font-montserrat font-semibold text-lg leading-none
      ${backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-primary text-white border-primary"}
          ${fullWidth && 'w-full'}`}
      >
        {label}
      </button>
  )
}


export default Button
