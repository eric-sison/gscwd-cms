export const serialize = (urlParams: Record<string, string>) => {
  var str = [];
  for (var p in urlParams)
    if (urlParams.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(urlParams[p]));
    }
  return str.join("&");
};
