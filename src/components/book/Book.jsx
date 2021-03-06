import React from "react";
import PropTypes from "prop-types";

const Book = ({ isbn, writerName, publisherName, publishedDate, genre }) => {
  return (
    <div className="card">
      <div className="card-header">
        <b>{isbn}</b>
      </div>
      <hr className="card-hr"></hr>
      <div className="card-info">
        <div>
          <b>Published date:</b> {publishedDate}
        </div>
        <div>
          <b>Genre:</b> {genre}
        </div>
        <div>
          <b>Writer name:</b> <i>{writerName}</i>
        </div>
        <div>
          <b>Publisher name:</b> {publisherName}
        </div>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  isbn: PropTypes.string,
  writerName: PropTypes.string,
  publisherName: PropTypes.string,
  genre: PropTypes.string,
};
