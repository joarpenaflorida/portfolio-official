import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={20}
      outerSize={20}
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={5}
      trailingSpeed={6}
      hasBlendMode={true}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

export default CustomCursor;
