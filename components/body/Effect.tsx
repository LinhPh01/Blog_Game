import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'About Game!',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'Discussion!',
                1500,
                'Update New Meta!',
                1500,
                'Find New Build!',
                1500
            ]}
            speed={20}
            className='text-[2rem] md:text-[3rem] font-semibold uppercase'
            repeat={Infinity}
        />
    );
};
export default TextEffect