import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import quicksightIcon from '../../assets/images/quicksight-icon.png'

const QuicksightView = () => {
  const [activeTab, setActiveTab] = useState('globalTB');

  const quickSightGlobalTB = [
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_d4416e80-fbc1-4486-b263-17b36ff2005e/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_b257153f-c15c-40ce-bf24-cea54025675b?directory_alias=ascendingdcqs",
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_d4416e80-fbc1-4486-b263-17b36ff2005e/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_dd3b3178-6881-4e30-a134-e9a7e78bd720?directory_alias=ascendingdcqs",
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_d4416e80-fbc1-4486-b263-17b36ff2005e/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_8d22f8d1-daf3-469e-9a70-9268749ab4b5?directory_alias=ascendingdcqs"
  ];
  const quickSightCountry = [
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_0e95b90d-e6ef-459b-9bb4-d5db3cc7a956?directory_alias=ascendingdcqs",
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_1d592196-4e93-459e-8760-fabcf402a388?directory_alias=ascendingdcqs",
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_e356888f-51e6-4b8e-bf75-dac2bcacf283?directory_alias=ascendingdcqs",
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_15800c89-5088-4fda-9b6f-48cdea419550/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_82ead798-c4c5-4b59-a8c5-4433d527ae4a?directory_alias=ascendingdcqs"
  ];

  const quickSightDemographics = [
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_a9bc8ba9-6318-4bf2-a39c-179057f694b5/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_8e5d5400-ff65-4b89-b7ae-d069af5306e2?directory_alias=ascendingdcqs",
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_a9bc8ba9-6318-4bf2-a39c-179057f694b5/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_90e631f5-dad6-43fa-bf9e-073a9133a276?directory_alias=ascendingdcqs"
  ];

  const quickSightBudgetExpenditure = [
    "https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/595312265488/dashboards/8a830b7e-72a1-4434-b0c8-9e0d68db3d75/sheets/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_c7d97bbf-5061-4da0-bcd2-32fc5280dabd/visuals/8a830b7e-72a1-4434-b0c8-9e0d68db3d75_da0670a6-3ca9-4695-b4c6-aea55b27c1e1?directory_alias=ascendingdcqs"
  ];

  const renderMainLayout = (tab) => {
    switch (tab) {
      case 'globalTB':
        return <MainLayout embedUrls={quickSightGlobalTB} />;
      case 'countrySpecific':
        return <MainLayout embedUrls={quickSightCountry} />;
      case 'demographics':
        return <MainLayout embedUrls={quickSightDemographics} />
      case 'budgetExpenditure':
        return <MainLayout embedUrls={quickSightBudgetExpenditure} />
    }
  };

  return (
    <div>
      <header>
        <div style={{paddingLeft: '10%', borderBottom: '1px solid black'}}>
          <h1>
            <a href="#">
              <img src={quicksightIcon} width="36" height="36" alt="QuickSight" style={{paddingBottom: '3px'}}/>
            </a>
            <span style={{ paddingLeft: '10px', fontSize: '15pt' }}>QuickSight Dashboard</span>
          </h1>
        </div>
      </header>
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
            <li className="nav-item">
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
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content">
            {renderMainLayout(activeTab)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default QuicksightView;




