import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

interface IButtonItem<T> {
  value: T;
  content: React.ReactNode;
}

export interface ButtonGroupProps<T> {
  options: IButtonItem<T>[];
  activeOption: T;
  setActiveOption: Dispatch<SetStateAction<T>>;
}

export const ButtonGroup = <T extends unknown>({
  options,
  activeOption,
  setActiveOption,
}: ButtonGroupProps<T>) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            key={option.value as string}
            className={classNames("btn-group", {
              "rounded-l-lg border-r-0": index === 0,
              "rounded-r-lg": index === options.length - 1,
              "bg-gray-50 dark:bg-gray-700": activeOption === option.value,
              "border-r-0": index !== 0 && index !== options.length - 1,
            })}
            onClick={() => setActiveOption(option.value)}
          >
            {option.content}
          </button>
        );
      })}
    </>
  );
};
