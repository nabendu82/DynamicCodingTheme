var currentTheme = '';

const themes = {
  'code0': {
    images: {
      headerURL: 'code0.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF00',
    }
  },
  'code1': {
    images: {
      headerURL: 'code1.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#00FFFF',
    }
  },
  'code2': {
    images: {
      headerURL: 'code2.png',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF00',
    }
  },
  'code3': {
    images: {
      headerURL: 'code3.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF00',
    }
  },
  'code4': {
    images: {
      headerURL: 'code4.png',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FF8080',
    }
  },
  'code5': {
    images: {
      headerURL: 'code5.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF00',
    }
  },
  'code6': {
    images: {
      headerURL: 'code6.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF40',
    }
  },
  'code7': {
    images: {
      headerURL: 'code7.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF40',
    }
  },
  'code8': {
    images: {
      headerURL: 'code8.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF00',
    }
  },
  'code9': {
    images: {
      headerURL: 'code9.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF40',
    }
  },
  'code10': {
    images: {
      headerURL: 'code10.png',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#fcc600',
    }
  },
  'code11': {
    images: {
      headerURL: 'code11.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#FFFF00',
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  // Will set the sun theme between 8am and 8pm.
  switch(hours) {
    case 0:
    case 12: 
          setTheme('code0');
          break;
    case 1: 
    case 13:
          setTheme('code1');
          break;
    case 2: 
    case 14:
          setTheme('code2');
          break;
    case 3:
    case 15: 
          setTheme('code3');
          break;
    case 4: 
    case 16: 
          setTheme('code4');
          break;
    case 5: 
    case 17: 
          setTheme('code5');
          break;
    case 6: 
    case 18: 
          setTheme('code6');
          break;
    case 7:
    case 19: 
          setTheme('code7');
          break;
    case 8: 
    case 20:
          setTheme('code8');
          break;
    case 9: 
    case 21:
          setTheme('code9');
          break;
    case 10: 
    case 22:
          setTheme('code10');
          break;
    case 11: 
    case 23:
          setTheme('code11');
          break;
    default:
          setTheme('code10');
  }

}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});
