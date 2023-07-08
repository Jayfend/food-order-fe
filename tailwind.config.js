/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}",],
  theme: {
  extend: { fontFamily:{
    'poppins': ['Poppins', 'sans-serif']
  },
},
  textColor:{
    'white':{
      50:'#FFFFFF'
    },
    'yellow':{
      50:'#F8B602'
    },
    'gray':{
      51:'#A098AE'
    }
  },
    fontSize:{
      'sm':['40px','normal'],
      'db':['18px','normal']
    },
  colors:{
  'black':{
    50:'#2E2E2E'
  },
  'yellow':{
    50:'#F8B602'
  }
},
backgroundColor:{
  'gray':{
    50:'#DBDBDB'
  },
  'white':{
    50:'#FFFFFF'
  },
  'yellow':{
    50:'#F8B602'
  }
}
  },
  plugins: [],
}

