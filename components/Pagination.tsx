"use client";
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
interface PaginationProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Pagination: FC<PaginationProps> = ({ hasNextPage, hasPrevPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const per_page = searchParams.get("per_page") ?? 5;
  return (
    <div className="flex ">
      <button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/page=${Number(page) - 1}&per_page=${per_page}`);
        }}>
        prev page
      </button>
      <button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/page=${Number(page) + 1}&per_page=${per_page}`);
        }}>
        next page
      </button>
    </div>
  );
};

export default Pagination;
