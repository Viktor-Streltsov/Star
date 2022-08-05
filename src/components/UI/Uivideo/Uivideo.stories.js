import Uivideo from "./Uivideo";
import video from './video/vid.mp4';

export default {
    title: 'Ui-Kit/Uivideo',
    component: Uivideo
};

const Template = (args) => <Uivideo {...args} /> 

const props = {
    src: video,
    playbackrate: 1.0,
    classes: '',
}

export const Default = Template.bind({});
Default.args = {
    ...props,
}