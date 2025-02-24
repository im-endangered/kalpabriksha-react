import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeaderSeparator from '../components/HeaderSeparator';

const downloadsData = [
  { id: 1, title: 'विधान', category: 'Legal and Compliance', link: '/assets/bidhan.pdf' },
  { id: 2, title: 'PAN Certificate', category: 'Legal and Compliance', link: '/assets/pan-certificate.pdf' },
  { id: 3, title: 'Registration Certificate', category: 'Legal and Compliance', link: '/assets/registration-certificate.pdf' },
  { id: 4, title: 'Annual Summary 2022', category: 'Yearly Report', link: '/assets/annual_summary_2022.pdf' },
  { id: 5, title: 'Annual Summary 2080', category: 'Yearly Report', link: '/assets/annual_summary_2080.pdf' },
  { id: 6, title: 'We Listen and We Dont Judge', category: 'Event Report', link: '/assets/report_we_listen_and_we_dont_judge.pdf' },
];

const Downloads = () => {
  const [category, setCategory] = useState('All');

  const filteredData = category === 'All'
    ? downloadsData
    : downloadsData.filter((item) => item.category === category);

  const categories = ['All', ...new Set(downloadsData.map((item) => item.category))];

  return (
    <>
      <Navbar />
      <HeaderSeparator title="Downloads" breadcrumb={[{ name: 'Home', link: '/' }, { name: 'Downloads' }]} />
      <div className="container py-4">
        <div className="mb-4 d-flex align-items-center gap-3">
          <label htmlFor="category" className="form-label fw-bold">Filter by Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select w-auto"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
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
              {filteredData.map((doc, index) => (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Downloads;
