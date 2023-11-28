import React from 'react';


// const MainLayout = () => {
//   return (
//     <div className="page">
//       <div className="page-wrapper">
//         <div className="page-body">
//           <div className="container-xl">
//             <div className="row row-deck row-cards">
//               <div className="col-4">
//                 <div className="card">
//                   <div className="card-body" style={{ height: '10rem' }}></div>
//                 </div>
//               </div>
//               <div className="col-4">
//                 <div className="card">
//                   <div className="card-body" style={{ height: '10rem' }}></div>
//                 </div>
//               </div>
//               <div className="col-4">
//                 <div className="card">
//                   <div className="card-body" style={{ height: '10rem' }}></div>
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-body" style={{ height: '10rem' }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const MainLayout = ({ embedUrls }) => {
  return (
    <div className="page">
      <div className="page-wrapper">
        <div className="page-body">
          <div className="container-xl">
            <div className="row row-deck row-cards">
              {embedUrls.map((url, index) => (
                <div className="col-4" key={index}>
                  <div className="card">
                    <div className="data-body" style={{ height: '20rem' }}>
                      <iframe
                        src={url}
                        title={`Dashboard-${index}`}
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;


