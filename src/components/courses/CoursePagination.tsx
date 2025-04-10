
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const CoursePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: CoursePaginationProps) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    
    // Logic to show limited page numbers with ellipsis
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    // Add first page
    if (startPage > 1) {
      pageNumbers.push(
        <PaginationItem key={1}>
          <PaginationLink 
            isActive={currentPage === 1}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      
      // Add ellipsis if there's a gap
      if (startPage > 2) {
        pageNumbers.push(
          <PaginationItem key="ellipsis1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    
    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      if (i === 1 || i === totalPages) continue;
      
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(i);
            }}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Add last page
    if (endPage < totalPages) {
      // Add ellipsis if there's a gap
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <PaginationItem key="ellipsis2">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      pageNumbers.push(
        <PaginationItem key={totalPages}>
          <PaginationLink 
            isActive={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return pageNumbers;
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
        
        <div className="hidden sm:flex">
          {renderPageNumbers()}
        </div>
        
        <div className="sm:hidden">
          <PaginationItem>
            <PaginationLink isActive>
              {currentPage} / {totalPages}
            </PaginationLink>
          </PaginationItem>
        </div>
        
        <PaginationItem>
          <PaginationNext 
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CoursePagination;
