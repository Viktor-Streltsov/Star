import { useState } from "react";
import Uiinput from "./Uiinput";

export default {
    title: 'Ui-Kit/Uiinput',
    component: Uiinput
}

const Template = (arg) => {
    const [value, setValue] = useState('');

    const handleInputChange = value => {
        setValue(value);
    }

    return (
        <Uiinput 
            {...arg}
            value={value}
            handleInputChange={handleInputChange}
        />
    )
}

const props = {
    value: '',
    handleInputChange: () => console.log('Input Chenge'),
    placeholder: 'Placeholder',
    classes: '',
}

export const Default = Template.bind({});
Default.args = {
    ...props
}