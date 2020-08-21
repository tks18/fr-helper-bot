module.exports = [
  {
    callbackid: "intro-0",
    title: "What is IFRS",
    brief: "Description about IFRS",
    callbackDisplay: "What is IFRS?",
    hasSubCallBacks: false,
  },
  {
    callbackid: "intro-1",
    title: "IND AS Implementation Roadmap",
    brief: "India\'s Implementation of IND AS",
    callbackDisplay: "IND AS Implementation",
    hasSubCallBacks: false,
  },
  {
    callbackid: "intro-2",
    title: "Phases in Implementation",
    brief: "Different Phases in Implementation of IND AS",
    callbackDisplay: "Phases in Implementation",
    hasSubCallBacks: true,
    subCallBacks: [
      {
        callbackid: "intro-2-subcall-0",
        title: "Voluntary Phase",
        brief: "Implementation Phases - Voluntary Phase",
        callbackDisplay: "Voluntary Phase",
      },
      {
        callbackid: "intro-2-subcall-1",
        title: "Mandatory Phase-1",
        brief: "Implementation Phases - Mandatory Phase-1",
        callbackDisplay: "Mandatory Phase-1",
      },
      {
        callbackid: "intro-2-subcall-2",
        title: "Mandatory Phase-2",
        brief: "Implementation Phases - Mandatory Phase-2",
        callbackDisplay: "Mandatory Phase-2",
      },
      {
        callbackid: "intro-2-subcall-3",
        title: "Mandatory Phase-3",
        brief: "Implementation Phases - Mandatory Phase-3",
        callbackDisplay: "Mandatory Phase-3",
      },
      {
        callbackid: "intro-2-subcall-4",
        title: "Mandatory Phase-4",
        brief: "Implementation Phases - Mandatory Phase-4",
        callbackDisplay: "Mandatory Phase-4",
      }
    ]
  },
  {
    callbackid: "intro-3",
    title: "Miscellaneous Topics",
    brief: "Other topics in Introduction",
    callbackDisplay: "Miscellaneous Topics",
    hasSubCallBacks: true,
  },
]
