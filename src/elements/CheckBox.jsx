import { useState } from "react"

const CheckBox = ({ top, handleSelectTopic, handleUnselectTopic }) => {
    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        if (!checked) {
            handleSelectTopic(top)
        } else {
            handleUnselectTopic(top)
        }
        setChecked(!checked)
    }
    
    return (
        <div>
            <label>
                {top.topicName}
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleChange()}
                />
            </label>
        </div>
    )
}

export default CheckBox
