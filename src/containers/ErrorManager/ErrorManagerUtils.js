export const errorList = [
  {
    errorType:'Ping',
    priority:5,
    errors: [
      {
        server: 'amadeus.site1.de',
        errorMessage: 'This is an error message'
      },
      {
        server: 'amadeus.site2.de',
        errorMessage: 'This is an error message'
      },
      {
        server: 'amadeus.site3.de',
        errorMessage: 'This is an error message'
      },
      {
        server: 'amadeus.site4.de',
        errorMessage: 'This is an error message'
      },
      {
        server: 'amadeus.site5.de',
        errorMessage: 'This is an error message'
      }
    ]
  },
  {
    errorType:'Get',
    priority:4,
    errors: [
      {
        server: 'amadeus.site6.de',
        errorMessage: 'This is an error message'
      },
    ]
  },
  {
    errorType:'Imap',
    priority:3,
    errors: [
      {
        server: 'amadeus.site6.de',
        errorMessage: 'This is an error message'
      },
      {
        server: 'amadeus.site7.de',
        errorMessage: 'This is an error message'
      },
      {
        server: 'amadeus.site8.de',
        errorMessage: 'This is an error message'
      },
    ]
  }
]
