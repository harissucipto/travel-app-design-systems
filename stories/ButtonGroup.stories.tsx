import React from "react";
import { Meta, Story } from "@storybook/react";
import { StoryLayout } from "./StoryLayout";

import { ButtonGroup, ButtonGroupProps } from "../src";
import { Figma, options2, options1 } from "../src/data";
import { FiGrid, FiList } from "react-icons/fi";

const meta: Meta = {
  title: "ButtonGroup",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.ButtonGroup,
    },
  },
};

export default meta;

interface Props extends ButtonGroupProps {
  darkMode: boolean;
}

const StoryButtonGroup: Story<Props> = (args) => {
  const [activeItem1, setActiveItem1] = React.useState<string>(
    options1[1].value,
  );
  const [activeItem2, setActiveItem2] = React.useState<string>(
    options2[1].value,
  );

  type ViewOption = "list" | "grid";

  const [viewOption, setViewOption] = React.useState<ViewOption>("list");

  const handleActiveItem1 = (value: string) => {
    setActiveItem1(value);
  };

  const handleActiveItem2 = (value: string) => {
    setActiveItem2(value);
  };

  const handleViewOption = (value: string) => {
    setViewOption(value as ViewOption);
  };

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup
          activeOption={activeItem1}
          setActiveOption={handleActiveItem1}
          options={options1}
        />
      </div>
      <div>
        <ButtonGroup
          activeOption={activeItem2}
          setActiveOption={handleActiveItem2}
          options={options2}
        />
      </div>
      <div>
        <ButtonGroup
          activeOption={viewOption}
          setActiveOption={handleViewOption}
          options={[
            {
              content: <FiList size={20} />,
              value: "list",
            },
            {
              content: <FiGrid size={20} />,
              value: "grid",
            },
          ]}
        />
      </div>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroup.bind({});

Default.args = {
  darkMode: false,
};
