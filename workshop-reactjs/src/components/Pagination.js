import React from "react";

export default function Pagination(props) {
  const { paginate, nextPage, prevPage } = props;

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={() => prevPage()} >
              Previous
            </a>
          </li>
          {props.totalPosts.map((num) => (
            <li className="page-item" key={num}>
              <a onClick={() => paginate(num)} className="page-link" style={{cursor:"pointer"}}>
                {num}
              </a>
            </li>
          ))}
          <li className="page-item" onClick={() => nextPage()}>
            <a className="page-link" style={{cursor:"pointer"}}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
