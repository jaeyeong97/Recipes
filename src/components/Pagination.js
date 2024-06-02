import React from 'react';
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  button {
    margin: 0 5px;
    padding: 8px;
    border: 1px solid #D8D8D8;
    cursor: pointer;

    &.active {
        background-color: rgba(44, 108, 21, 0.5);
        color: rgba(44, 108, 21, 0.8);
      }
  }
`;

const Pagination = ({ totalPages, currentPage, paginate }) => {
    const pageNumbers = [];
    const maxButtons = 5; // 최대 버튼 수

    // 화면에서 보여지는 페이지 범위 계산
    let startPage = 1;
    let endPage = maxButtons;

    // currentPage가 maxButtons보다 크면 페이지 범위
    if (currentPage > maxButtons) {
        startPage = Math.floor((currentPage - 1) / maxButtons) * maxButtons + 1;
        endPage = startPage + maxButtons - 1;
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }


    return (
        <PaginationWrapper>
            <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className='btn_prev'
            >
                ◁
            </button>
            {pageNumbers.map(num => (
                <button
                    key={num}
                    onClick={() => paginate(num)}
                    className={num === currentPage ? 'active' : ''}
                >
                    {num}
                </button>
            ))}
            <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className='btn_next'
            >
                ▷
            </button>
        </PaginationWrapper>
    );
};

export default Pagination;