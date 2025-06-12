import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/navbar";
import HeaderSeparator from "../components/HeaderSeparator";
import Footer from "../components/footer";
import "../assets/styles/faq.css";

function BecomeMember() {
  return (
    <div>
      <Helmet>
        <title>Become a Member | Kalpabriksha</title>
        <meta
          name="description"
          content="Join Kalpabriksha as a general member and contribute to youth empowerment in Nepal. Learn about eligibility, membership fees, application process, and required documents."
        />
        <meta
          name="keywords"
          content="Kalpabriksha, membership, join Kalpabriksha, youth empowerment Nepal, nonprofit Nepal, become a member, general member regulation"
        />
        <meta name="author" content="Kalpabriksha Nepal" />
        <link rel="canonical" href="https://kalpabriksha.org.np/membership" />
      </Helmet>

      <Navbar />
      <HeaderSeparator
        title="Become a Member"
        breadcrumb={[{ name: "Home", link: "/" }, { name: "Become a Member" }]}
      />

      <div className="container my-5">
        <p>
          Kalpabriksha welcomes passionate individuals who believe in our mission to empower youth in Nepal. To become a general member, you must meet the following qualifications:
        </p>

        <ol className="mt-4">
          <li><strong>a. Be a Nepali citizen.</strong></li>
          <li><strong>b. Have completed 18 years of age.</strong></li>
          <li><strong>c. Must be mentally sound.</strong></li>
          <li><strong>d. Should not have been convicted for misappropriation of public property.</strong></li>
          <li><strong>e. Should not have been convicted of a criminal or corruption charge involving moral turpitude.</strong></li>
          <li><strong>f. Must be committed to abiding by the organization’s statute, policies, and programs.</strong></li>
        </ol>

        <div className="mt-5">
          <h4>Membership Fees</h4>
          <ul>
            <li><strong>Initial Membership Fee:</strong> NPR 1500</li>
            <li><strong>Annual Renewal Fee:</strong> NPR 100</li>
          </ul>
          <p className="text-muted">
            * Fees are used to support our youth development programs and administrative sustainability.
          </p>
        </div>

        <div className="mt-5">
          <h4>Application Process</h4>
          <p>Applicants must submit the official Kalpabriksha membership form along with the following documents:</p>
          <ul>
            <li>a. Personal details (Name, Address, Date of Birth, Contact Info)</li>
            <li>b. Copy of Citizenship Certificate</li>
            <li>c. One passport-size photo</li>
            <li>d. For online submissions: Clear photo with both ears visible</li>
            <li>e. Copy of Police Clearance Certificate <a href="https://opcr.nepalpolice.gov.np/" target="_blank" rel="noreferrer"><u>Apply online</u></a></li>
            <li>f. Details of prior social contribution (if available)</li>
          </ul>

          <p className="mt-3">
            Once approved by the Central Committee, the following must be submitted:
          </p>
          <ul>
            <li>a. Receipt of NPR 1500 membership entry fee payment</li>
            <li>b. Signed letter of commitment to follow Kalpabriksha's policies and programs</li>
          </ul>
        </div>

        <div className="mt-5">
          <h4>Resources</h4>
          <ul>
            <li>
              📘 <a href="/assets/bidhan.pdf" target="_blank" rel="noreferrer">
                Official Statute (Bidhan)
              </a>
            </li>
            <li>
              📄 <a href="/assets/generalMember_regulation_2082.pdf" target="_blank" rel="noreferrer">
                General Membership Regulation 2082
              </a>
            </li>
          </ul>
        </div>

        <div className="alert alert-warning mt-5" role="alert">
          <strong>Disclaimer:</strong> Submission of the membership application does not guarantee acceptance.
          All proceedings will be carried out as per the <em>General Membership Regulation 2082 (साधारण सदस्यता सम्बन्धी नियमावली २०८२)</em>.
          <br /><br />
          <strong>⚠️ Please Note:</strong> The <em>General Membership Regulation 2082</em> is yet to be fully enforced. 
          As a result, the current application process is simplified and more flexible — documents such as 
          police clearance and formal verification are not mandatory at this stage. 
          However, all applications must still align with the organization's statute.
        </div>

        <div className="text-center mt-4">
          <a href="https://forms.gle/CdzDs8Ufdn9o1fsT6" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
            Apply for Membership
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BecomeMember;
