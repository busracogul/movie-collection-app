import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

function PaginationSection({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Pagination style={{ paddingBlock: "1.2rem" }}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              className="!text-gray-400"
            />
          </PaginationItem>

          {[...Array(totalPages > 10 ? 10 : totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(page)}
                  className={`!text-gray-400 ${
                    currentPage === page ? "font-bold text-gray-500" : ""
                  }`}
                  style={{
                    fontSize: currentPage === page ? "1.2rem" : "inherit",
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              className="!text-gray-400"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}

export default PaginationSection;
