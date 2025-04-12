import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export function ImageComparison({
  imageUrlOne,
  imageUrlTwo,
  altTextOne,
  altTextTwo,
}: {
  imageUrlOne: string;
  imageUrlTwo: string;
  altTextOne?: string;
  altTextTwo?: string;
}) {
  return (
    <div className="relative w-full">
      <ReactCompareSlider
        boundsPadding={0}
        keyboardIncrement="5%"
        position={50}
        itemOne={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage alt={altTextOne} src={imageUrlOne} />
            {altTextOne && (
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {altTextOne}
              </div>
            )}
          </div>
        }
        itemTwo={
          <div className="relative w-full h-full">
            <ReactCompareSliderImage alt={altTextTwo} src={imageUrlTwo} />
            {altTextTwo && (
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {altTextTwo}
              </div>
            )}
          </div>
        }
        style={{
          backgroundColor: "white",
          backgroundImage:
            "\n      linear-gradient(45deg, #ccc 25%, transparent 25%),\n      linear-gradient(-45deg, #ccc 25%, transparent 25%),\n      linear-gradient(45deg, transparent 75%, #ccc 75%),\n      linear-gradient(-45deg, transparent 75%, #ccc 75%)",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
          backgroundSize: "20px 20px",
          width: "100%",
          borderRadius: "0.5rem",
        }}
      />
    </div>
  );
}
