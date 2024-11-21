  interface Props {
    privateEvent: boolean
    onChange: (checked: boolean) => void
  }

function ToggleSwitch(props:Props) {
  // const [isChecked, setIsChecked] = useState(false)

  const handleCheckChange = () => {
    props.onChange(!props.privateEvent)
  }

  return (
      <label className="cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            checked={props.privateEvent}
            onChange={handleCheckChange}
            className="sr-only"
          />
          <div className={`h-6 w-10 rounded-full ${props.privateEvent ? 'bg-[var(--primary-gradient-2)]' : 'bg-gray-300'}`}></div>
          <div
            className={`absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white transition-transform ${
              props.privateEvent ? 'translate-x-[18px]' : 'translate-x-[3px]'
            }`}
          ></div>
        </div>
      </label>
  )
}

export default ToggleSwitch;
