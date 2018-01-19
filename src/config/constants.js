export const constants = {
  dataSources: {
    pollingObject: {
      intervalId: undefined,
      dataSourceId: undefined,
    },
    apiMethods: [
      {
        id: 0,
        label: "GET",
        description: "Get request method",
        value: "get"
      },{
        id: 0,
        label: "POST",
        description: "Post request method",
        value: "post"
      }
    ],
    pollingIntervals: [
      {
        id: 0,
        label: "0.5 s",
        value: 500
      },{
        id: 1,
        label: "1 s",
        value: 1000
      },{
        id: 2,
        label: "2 s",
        value: 2000
      },{
        id: 3,
        label: "3 s",
        value: 3000
      },{
        id: 4,
        label: "4 s",
        value: 4000
      },{
        id: 5,
        label: "5 s",
        value: 5000
      },
    ]
  }
}
