export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url) {
  url = url || window.location.href;
  console.log(url.indexOf(name) > -1, url);
  return url.indexOf(name) > -1;
}