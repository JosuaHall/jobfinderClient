import React, { useEffect } from "react";

const TableauDashboard = () => {
  useEffect(() => {
    const initTableau = () => {
      const containerDiv = document.getElementById("tableauViz");
      const url =
        "https://public.tableau.com/views/JobDashboardv4CVD/JobAnalytics?:language=en-US&:display_count=n&:origin=viz_share_link";

      const options = {
        hideTabs: true,
        hideToolbar: true,
      };

      // Check if Tableau visualization is not already present in the containerDiv
      if (!containerDiv.hasChildNodes()) {
        const viz = new window.tableau.Viz(containerDiv, url, options);
      }
    };

    initTableau();
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return <div id="tableauViz" style={{ borderRadius: "1em" }}></div>;
};

export default TableauDashboard;
