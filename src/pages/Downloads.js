import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeaderSeparator from '../components/HeaderSeparator';

const downloadsData = [
  { title: 'विधान', category: 'Legal and Compliance', link: '/assets/bidhan.pdf' },
  { title: 'साधारण सदस्यता सम्बन्धी नियमावली  २०८२ ', category: 'Legal and Compliance', link: '/assets/generalMember_regulation_2082.pdf' },
  { title: 'स्वयंसेवक सम्बन्धी नियमावली २०८२', category: 'Legal and Compliance', link: '/assets/volunteer_regulation_2082.pdf' },
  { title: 'इन्टर्न (Intern) सम्बन्धी नियमावली २०८२', category: 'Legal and Compliance', link: '/assets/intern_regulation_2082.pdf' },
  { title: 'First AGM Minutes', category: 'Minutes', link: '/assets/first_agm_minutes.pdf' },
  { title: 'Annual Summary 2022', category: 'Yearly Report', link: '/assets/annual_summary_2022.pdf' },
  { title: 'Annual Summary 2080', category: 'Yearly Report', link: '/assets/annual_summary_2080.pdf' },
  { title: 'We Listen and We Dont Judge', category: 'Event Report', link: '/assets/report_we_listen_and_we_dont_judge.pdf' },
];

const Downloads = () => {
  const [category, setCategory] = useState('All');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', ...new Set(downloadsData.map((item) => item.category))];

  const filteredData = category === 'All'
    ? downloadsData
    : downloadsData.filter((item) => item.category === category);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Reset to first page on change
  };

  return (
    <>
      <Helmet>
        <title>Downloads | Your Site Name</title>
        <meta name="description" content="Download official documents, reports, regulations, and summaries from our organization." />
        <meta name="keywords" content="downloads, reports, documents, AGM, summary, regulations, pdf" />
      </Helmet>

      <Navbar />
      <HeaderSeparator title="Downloads" breadcrumb={[{ name: 'Home', link: '/' }, { name: 'Downloads' }]} />
      <div className="container py-4">
        <div className="mb-4 d-flex align-items-center gap-3 flex-wrap">
          <label htmlFor="category" className="form-label fw-bold">Filter by Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="form-select w-auto"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <label htmlFor="itemsPerPage" className="form-label fw-bold ms-4">Items per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
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
                <th scope="col" className="py-2">Title of Document</th>
                <th scope="col" className="py-2">Category</th>
                <th scope="col" className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((doc, index) => (
                  <tr key={doc.link}>
                    <td>{startIndex + index + 1}</td>
                    <td className="text-start">{doc.title}</td>
                    <td>{doc.category}</td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          View
                        </a>
                        <a
                          href={doc.link}
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
                  <td colSpan="4" className="text-muted">No documents found.</td>
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

export default Downloads;
