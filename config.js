const environment = {
    production: {
      pageBaseUrl: 'https://api-page.p99pay.com',
      apiBaseUrl: 'https://api.p99pay.com',
    },
    stage: {
      pageBaseUrl: 'https://stage-api-page.p99pay.com',
      apiBaseUrl: 'https://stage-api.p99pay.com',
    },
    localhost: {
      pageBaseUrl: 'http://127.0.0.1:5500/',
      apiBaseUrl: 'http://127.0.0.1:5000/api',
    },
  };
  
  // 根據當前的環境來選擇配置
  const currentEnv = (function() {
    const hostname = window.location.hostname;
    if (hostname === 'api.p99pay.com') {
      return environment.production;
    } else if (hostname === 'stage-api.p99pay.com') {
      return environment.stage;
    } else {
      return environment.localhost;
    }
  })();

window.pageBaseUrl = currentEnv.pageBaseUrl;
window.apiUrl = currentEnv.apiBaseUrl;


  // const pageBaseUrl = currentEnv.pageBaseUrl;
  // const apiUrl = currentEnv.apiBaseUrl;
  
  // export { pageBaseUrl, apiUrl };