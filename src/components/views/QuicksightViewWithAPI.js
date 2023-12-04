import React, { useState, useEffect } from 'react';
import MainLayout from '../layout/MainLayout';
import quicksightIcon from '../../assets/images/quicksight-icon.png'
import QuickSightDashboard from '../layout/QuickSightDashboard';
import axios from 'axios';

const globalTBParams = [
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_d4416e80-fbc1-4486-b263-17b36ff2005e,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_b257153f-c15c-40ce-bf24-cea54025675b'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_d4416e80-fbc1-4486-b263-17b36ff2005e,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_8d22f8d1-daf3-469e-9a70-9268749ab4b5'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_d4416e80-fbc1-4486-b263-17b36ff2005e,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_dd3b3178-6881-4e30-a134-e9a7e78bd720'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_0e95b90d-e6ef-459b-9bb4-d5db3cc7a956'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_1d592196-4e93-459e-8760-fabcf402a388'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_e356888f-51e6-4b8e-bf75-dac2bcacf283'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_a9bc8ba9-6318-4bf2-a39c-179057f694b5,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_8e5d5400-ff65-4b89-b7ae-d069af5306e2'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_a9bc8ba9-6318-4bf2-a39c-179057f694b5,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_90e631f5-dad6-43fa-bf9e-073a9133a276'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_c7d97bbf-5061-4da0-bcd2-32fc5280dabd,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_da0670a6-3ca9-4695-b4c6-aea55b27c1e1'}

];

const countryParams = [
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_0e95b90d-e6ef-459b-9bb4-d5db3cc7a956'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_1d592196-4e93-459e-8760-fabcf402a388'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_e356888f-51e6-4b8e-bf75-dac2bcacf283'}
];

const demographicsParams = [
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_a9bc8ba9-6318-4bf2-a39c-179057f694b5,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_8e5d5400-ff65-4b89-b7ae-d069af5306e2'},
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_a9bc8ba9-6318-4bf2-a39c-179057f694b5,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_90e631f5-dad6-43fa-bf9e-073a9133a276'}
];

const budgetExpenditureParams = [
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_c7d97bbf-5061-4da0-bcd2-32fc5280dabd,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_da0670a6-3ca9-4695-b4c6-aea55b27c1e1'}
];

const tbCountryAnalysisParams = [
  { type: 'dashboard', id: 'f546b257-65c2-45f8-954a-0a17fdb9b3c7' }
];

const paramTestParams = [
  { type: 'visual', id: '8a830b7e-72a1-4434-b0c8-9e0d68db3d75,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_684b21a7-1548-427d-a130-64e136ad71bf,8a830b7e-72a1-4434-b0c8-9e0d68db3d75_48ab4ab6-2bf0-42e6-9982-833f6d64b25c'}
]

    

const QuicksightView = () => {
  const [activeTab, setActiveTab] = useState('globalTB');
  const [viewUrls, setViewUrls] = useState({
    globalTB: [],
    demographics: [],
    countrySpecific: [],
    budgetExpenditure: [],
    tbCountryAnalysis: [],
    paramTest: []
  });
  const [error, setErorr] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        let params;
        switch (activeTab) {
          case 'globalTB':
            params = globalTBParams;
            break;
          // case 'demographics':
          //   params = demographicsParams;
          //   break;
          // case 'countrySpecific':
          //   params = countryParams;
          //   break;
          // case 'budgetExpenditure':
          //   params = budgetExpenditureParams;
          //   break;
          case 'tbCountryAnalysis':
            params = tbCountryAnalysisParams;
            break;
          case 'paramTest':
            params = paramTestParams;
            break;
          default:
            params = [];
        }
        
        const urls = await Promise.all(
          params.map(async (param) => {
            const response = await axios.get('https://v83joq8cn3.execute-api.us-east-1.amazonaws.com/visual/api/getUrl', {
              params: param,
            });
            console.log("API Response: ", response);
            return response.data.embedUrl;
          })
        );

        setViewUrls(prevUrls => {
          const newUrls = { ...prevUrls, [activeTab]: urls };
          console.log("Updated URLs state: ", newUrls);
          return newUrls;
        });
      } catch (error) {
        setErorr(error);
      }
    };

    fetchUrls();
  }, [activeTab]);

  console.log("View URLs in QuicksightView: ", viewUrls);

  const renderMainLayout = (tab) => {
    let embedUrls;
    switch (tab) {
      case 'globalTB':
        embedUrls = viewUrls.globalTB;
        break;
      //   // return <MainLayout embedUrls={viewUrls.quickSightGlobalTB} />;
      // case 'demographics':
      //   embedUrls = viewUrls.demographics;
      //   break;
      //   // return <MainLayout embedUrls={viewUrls.quickSightDemographics} />;
      // case 'countrySpecific':
      //   embedUrls = viewUrls.countrySpecific;
      //   break;
      //   // return <MainLayout embedUrls={viewUrls.quickSightCountry} />;
      // case 'budgetExpenditure':
      //   embedUrls = viewUrls.budgetExpenditure;
      //   break;
      //   // return <MainLayout embedUrls={viewUrls.quickSightBudgetExpenditure} />;
      case 'tbCountryAnalysis':
        embedUrls = viewUrls.tbCountryAnalysis;
        break;
      case 'paramTest':
        embedUrls = viewUrls.paramTest;
        break;
      default: 
        return null;
    }
    if (tab === 'tbCountryAnalysis') {
      console.log('Embed Urls for tbCountryAnalysis: ', embedUrls);
      return embedUrls && embedUrls.length > 0 ?
        <div className="full-dashboard">
          {embedUrls && embedUrls.map((url, index) => (
            <iframe
              key={index}
              src={url}
              className="full-dashboard-iframe"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          ))}
        </div>
      : <div>Loading...</div>;
    } else if (tab === 'paramTest') {
      console.log('paramTest: ', embedUrls);
      return embedUrls && embedUrls.length > 0 ? <QuickSightDashboard embedUrls={embedUrls} /> : <div style={{ textAlign: 'center', height: '100vh'}}>Loading...</div>;

    } else {
      console.log('else: ', embedUrls)
      return embedUrls && embedUrls.length > 0 ? <MainLayout embedUrls={embedUrls} /> : <div style={{ textAlign: 'center', height: '100vh'}}>Loading...</div>;
    }
  };

  return (
    <div>
      {/* <header style ={{ marginTop: '2%' }}>
        <div style={{ textAlign: 'center'}}>
          <h2>
            <a href="#">
              <img src={quicksightIcon} width="36" height="36" alt="QuickSight" style={{paddingBottom: '3px'}}/>
            </a>
            <span style={{ paddingLeft: '10px', fontSize: '15pt' }}>QuickSight Dashboard</span>
          </h2>
        </div>
        <hr style={{ border: 'none', height: '2px', color: '#ccc', backgroundColor: '#ccc' }} />
      </header> */}
      <div className="tabbed-card">
        <div className="tabbed-header">
          <ul className="nav nav-tabs card-header-tabs" style={{ backgroundColor: 'white', paddingBottom: '0rem', display: 'flex', justifyContent: 'center'}}>
            <li className="nav-item">
              <a
                href="#tabs-home-ex1"
                className={`nav-link ${activeTab === 'globalTB' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('globalTB');
                }}
              >
                Global TB Overview
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                href="#tabs-demo-ex1"
                className={`nav-link ${activeTab === 'demographics' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('demographics');
                }}
              >
                Demographic Analysis
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tabs-budget-ex1"
                className={`nav-link ${activeTab === 'countrySpecific' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('countrySpecific');
                }}
              >
                Country-Specific Insights
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tabs-budget-ex1"
                className={`nav-link ${activeTab === 'budgetExpenditure' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('budgetExpenditure');
                }}
              >
                Budget and Expenditure
              </a>
            </li> */}
            <li className="nav-item">
              <a
                href="#tabs-budget-ex1"
                className={`nav-link ${activeTab === 'tbCountryAnalysis' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('tbCountryAnalysis');
                }}
              >
                TB Country Analysis
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#tabs-budget-ex1"
                className={`nav-link ${activeTab === 'paramTest' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('paramTest');
                }}
              >
                Param Test
              </a>
            </li>
          </ul>
          <hr style={{ border: 'none', height: '2px', color: '#ccc', backgroundColor: '#ccc' }} />
        </div>
        <div>
            {renderMainLayout(activeTab)}
        </div>
      </div>
    </div>
  )
};

export default QuicksightView;




