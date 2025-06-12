import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeaderSeparator from '../components/HeaderSeparator';

const noticesData = [
  { title: 'Sample', date: '2025-03-12', link: '#' },
];

const Notices = () => {
  const [year, setYear] = useState('All');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const years = ['All', ...new Set(noticesData.map((item) => item.date.slice(0, 4)))];

  const filteredData = year === 'All'
    ? noticesData
    : noticesData.filter((item) => item.date.slice(0, 4) === year);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <Helmet>
        <title>Notices | Your Site Name</title>
        <meta name="description" content="View and download the latest notices and announcements from our organization." />
        <meta name="keywords" content="notices, announcements, updates, official, pdf" />
      </Helmet>

      <Navbar />
      <HeaderSeparator title="Notices" breadcrumb={[{ name: 'Home', link: '/' }, { name: 'Notices' }]} />
      <div className="container py-4">
        <div className="mb-4 d-flex align-items-center gap-3 flex-wrap">
          <label htmlFor="year" className="form-label fw-bold">Filter by Year:</label>
          <select
            id="year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setCurrentPage(1);
            }}
            className="form-select w-auto"
          >
            {years.map((yr) => (
              <option key={yr} value={yr}>{yr}</option>
            ))}
          </select>

          <label htmlFor="itemsPerPage" className="form-label fw-bold ms-4">Items per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="form-select w-auto"
          >
            {[10, 50, 100].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col" className="py-2">S.N</th>
                <th scope="col" className="py-2">Notice Title</th>
                <th scope="col" className="py-2">Date Published</th>
                <th scope="col" className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((notice, index) => (
                  <tr key={notice.link}>
                    <td>{startIndex + index + 1}</td>
                    <td className="text-start">{notice.title}</td>
                    <td>{notice.date}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <a
                          href={notice.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          View
                        </a>
                        <a
                          href={notice.link}
                          download
                          className="btn btn-primary btn-sm"
                        >
                          Download
                        </a>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-muted">No notices found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
          </div>
          <div className="btn-group">
            <button
              className="btn btn-outline-primary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notices;
