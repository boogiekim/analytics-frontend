import React from 'react';
import MainLayout from '../layout/MainLayout';
import tableauIcon from '../../assets/images/Tableau-Icon.png'

const TableauView = () => {
  const tableauEmbedLinks = [

  ];
  return (
      <div>
        <header className="navbar navbar-expand-sm navbar-light d-print-none">
          <div style={{paddingLeft: '15%'}}>
            <h1>
              <a href="#">
                <img src={tableauIcon} width="38" height="38" alt="Tableau" style={{paddingBottom: '3px'}}/>
              </a>
              <span style={{ paddingLeft: '10px', fontSize: '15pt' }}>Tableau Dashboard</span>
            </h1>
            <div className="navbar-nav flex-row order-md-last">
            </div>
          </div>
        </header>
        <MainLayout embedUrls={tableauEmbedLinks}/>
    </div>
    )
};

export default TableauView;
