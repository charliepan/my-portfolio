import React, { Children } from "react";
import { Text, types } from "react-bricks";

type Padding = "big" | "small";

interface MyTitleProps {
  padding: Padding;
  title: string;
  background: { color: "#fff"; className: "bg-white" };
}

const MyTitle: types.Brick<MyTitleProps> = ({ padding, background }) => {
  return (
    <div
      className={`max-w-xl mx-auto px-6 ${
        padding === "big" ? "py-20" : "py-12"
      } ${background.className} `}
    >
      <Text
        renderBlock={(props) => (
          <h1 className="text-3xl sm:text-4xl text-center font-black text-gray-900 dark:text-white leading-tight mb-3">
            {props.children}
          </h1>
        )}
        placeholder="Type a title..."
        propName="title"
      />
    </div>
  );
};

MyTitle.schema = {
  name: "my-title",
  label: "Custom Title",
  getDefaultProps: () => ({
    padding: "big",
    title: "Put title here",
    background: { color: "#fff", className: "bg-white" },
  }),
  sideEditProps: [
    {
      name: "padding",
      label: "Padding",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: "big", label: "Big Padding" },
          { value: "small", label: "Small Padding" },
        ],
      },
    },
    {
      name: "background",
      label: "Background",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            value: { color: "#fff", className: "bg-white" },
            label: "White",
          },
          {
            value: { color: "#f3f4f6", className: "bg-gray-100" },
            label: "Gray",
          },
          {
            value: { color: "rgb(59 130 246 / 0.5)", className: "bg-sky-100" },
            label: "Sky Blue",
          },
        ],
      },
    },
  ],
};

export default MyTitle;
