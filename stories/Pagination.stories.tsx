import React from "react";
import { Meta, Story } from "@storybook/react";

import { Pagination } from "../src";
import { StoryLayout } from "./StoryLayout";
import { Figma } from "../src/data";

const meta: Meta = {
  title: "Pagination",
  parameters: {
    controls: { expanded: true },
    design: {
      type: "figma",
      url: Figma.Paginate,
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
  isMobile: boolean;
}

const StoryPagination: Story<Props> = (args) => {
  const [page, setPage] = React.useState<number>(1);

  return (
    <StoryLayout {...args}>
      <Pagination
        isMobile={args.isMobile}
        page={page}
        setPage={setPage}
        totalPages={10}
      />
    </StoryLayout>
  );
};

export const Default = StoryPagination.bind({});

Default.args = {
  darkMode: false,
  isMobile: false,
};
