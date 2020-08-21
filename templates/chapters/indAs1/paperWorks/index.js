module.exports = [
  {
    callbackid: "ind1-0",
    title: "Scope",
    brief: "Scope of IND AS 1",
    callbackDisplay: "Scope",
    hasSubCallBacks: false,
  },
  {
    callbackid: "ind1-1",
    title: "Complete Set of Financial Statements",
    brief: "Complete Set of Financial Statements",
    callbackDisplay: "Complete Set of FS",
    hasSubCallBacks: true,
    callbacks:[
      {
        callbackid: "ind1-1-subcall-0",
        title: "Statement of Changes in Equity",
        brief: "What is Statement of Changes in Equity",
        callbackDisplay: "Changes in Equity",
        hasSubCallBacks: false,
      },
      {
        callbackid: "ind1-1-subcall-1",
        title: "Other Comprehensive Income",
        brief: "What is Other Comprehensive Income?",
        callbackDisplay: "Other Compr. Income",
        hasSubCallBacks: false,
      }
    ]
  },
  {
    callbackid: "ind1-2",
    title: "Special Circumstances",
    brief: "Special Circumstances in IND AS 1",
    callbackDisplay: "Special Circumstances",
    hasSubCallBacks: false,
  },
  {
    callbackid: "ind1-3",
    title: "Fundamental Assumptions",
    brief: "Fundamental Assumptions in IND AS 1",
    callbackDisplay: "Fundam.. Assumptions",
    hasSubCallBacks: false,
  }
]
