import classNames from "classnames";
import { Pagination as PaginationHeadless } from "react-headless-pagination";
import React, { FC } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  isMobile: boolean;
}

export const Pagination: FC<PaginationProps> = ({
  isMobile,
  page,
  setPage,
  totalPages,
}) => {
  if (isMobile) {
    return (
      <div className="flex items-center w-full">
        <FiArrowLeft
          className={classNames("mr-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          })}
          size={20}
          onClick={() => {
            if (page > 0) {
              setPage(page - 1);
            }
          }}
        />
        <div className="flex justify-center flex-grow text-sm text-gray-700 select-none dark:text-white">
          Page {page + 1} out of {totalPages}
        </div>
        <FiArrowRight
          size={20}
          className={classNames("ml-3 text-gray-500 dark:text-white", {
            "cursor-pointer": page < totalPages - 1,
            "opacity-50": page === totalPages - 1,
          })}
          onClick={() => {
            if (page < totalPages - 1) {
              setPage(page + 1);
            }
          }}
        />
      </div>
    );
  }

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <PaginationHeadless
      currentPage={page}
      setCurrentPage={handlePageChange}
      totalPages={10}
      edgePageCount={2}
      middlePagesSiblingCount={2}
      className="flex items-center w-full h-10 text-sm select-none"
      truncableText="..."
      truncableClassName="w-10 px-0.5 text-center text-gray-500 font-medium"
    >
      <PaginationHeadless.PrevButton
        className={classNames(
          "flex items-center h-10 mr-2 font-medium text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none ",
          {
            "cursor-pointer": page !== 0,
            "opacity-50": page === 0,
          },
        )}
      >
        <FiArrowLeft size={20} className="mr-3" />
        Previous
      </PaginationHeadless.PrevButton>

      <div className="flex items-center justify-center flex-grow">
        <PaginationHeadless.PageButton
          activeClassName="bg-primary-50 dark:bg-opacity-0 text-primary-600 dark:text-white "
          inactiveClassName="text-gray-500"
          className="flex items-center justify-center w-10 h-10 font-medium rounded-full cursor-pointer "
        />
      </div>

      <PaginationHeadless.NextButton
        className={classNames(
          "flex items-center h-10 ml-2 font-medium text-gray-500 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none",
          {
            "cursor-pointer": page < totalPages - 1,
            "opacity-50": page === totalPages - 1,
          },
        )}
      >
        Next
        <FiArrowRight size={20} className="ml-3" />
      </PaginationHeadless.NextButton>
    </PaginationHeadless>
  );
};
