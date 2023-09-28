require("flexmonster");

const pivotReport = {
  dataSource: {
    type: "csv",
    filename: "./data/cwurData.csv",
  },
  slice: {
    reportFilters: [
      {
        uniqueName: "country",
      },
    ],
    rows: [
      {
        uniqueName: "institution",
      },
    ],
    columns: [
      {
        uniqueName: "[Measures]",
      },
    ],
    measures: [
      {
        uniqueName: "world_rank",
        aggregation: "average",
      },
      {
        uniqueName: "citations",
        aggregation: "sum",
      },
      {
        uniqueName: "influence",
        aggregation: "average",
      },
      {
        uniqueName: "publications",
        aggregation: "sum",
      },
      {
        uniqueName: "score",
        aggregation: "average",
      },
    ],
    sorting: {
      column: {
        type: "asc",
        tuple: [],
        measure: {
          uniqueName: "world_rank",
          aggregation: "average",
        },
      },
    },
  },
  options: {
    grid: {
      type: "classic",
    },
  },
  conditions: [
    {
      formula: "#value > 300",
      measure: "publications",
      format: {
        backgroundColor: "#00a45a",
        color: "#FFFFFF",
        fontFamily: "Arial",
        fontSize: "12px",
      },
    },
  ],
  formats: [
    {
      name: "",
      decimalPlaces: 2,
    },
  ],
};

const pivot = new Flexmonster({
  componentFolder: "https://cdn.flexmonster.com/",
  container: "pivot-container",
  toolbar: true,
  report: pivotReport,
});
