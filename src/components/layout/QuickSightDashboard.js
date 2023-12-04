import React, { useEffect } from 'react';
import { QuickSightEmbedding } from 'amazon-quicksight-embedding-sdk';
import QuickSightEmbeddingSDK from 'amazon-quicksight-embedding-sdk';

const QuickSightDashboard = ({ embedUrls }) => {
  useEffect(() => {
    console.log(QuickSightEmbedding);
    console.log(QuickSightEmbeddingSDK.createEmbeddingContext);
    console.log(embedUrls);
    console.log(embedUrls[0]);
    const embedUrl = embedUrls && embedUrls.length > 0 ? embedUrls[0] : '';
    const embedDashboard = async () => {
      const embeddingContext = await QuickSightEmbeddingSDK.createEmbeddingContext();
      const containerDiv = document.getElementById("embedding-container");

      const frameOptions = {
        url: embedUrl,
        container: containerDiv,
        height: "700px",
        width: "1000px",
      };
      console.log('frameOptionUrl: ', frameOptions.url);

      const contentOptions = {
        parameters: [
          {
            Name: 'country',
            Values: 'Albania'
          }
        ],
      }

      const embeddedDashboard = await embeddingContext.embedDashboard(frameOptions, contentOptions);

      const countrySelect = document.getElementById("country");
      countrySelect.addEventListener('change', (event) => {
        embeddedDashboard.setParameters([
          {
            Name: 'country',
            Values: event.target.value,
          }
        ]);
      });

    //   const regionSelect = document.getElementById("region");
    //   regionSelect.addEventListener('change', (event) => {
    //     // Since it's a multi-select, we need to get all the selected values
    //     const values = Array.from(event.target.selectedOptions).map(opt => opt.value);
    //     embeddedDashboard.setParameters([
    //       {
    //         Name: 'region',
    //         Values: values,
    //       }
    //     ]);
    //   });
    };

    embedDashboard();
  }, []);

  return (
    <div>
      <span>
        <label htmlFor="country">Country</label>
        <select id="country" name="country">
          <option value="Albania">Albania</option>
        </select>
      </span>
      <div id="embedding-container"></div>
    </div>
  );
};

export default QuickSightDashboard;
