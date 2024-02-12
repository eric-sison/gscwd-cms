export const serializeUrlParams = (urlParams: Record<string, string>) => {
  const str = [];
  for (const p in urlParams)
    if (urlParams.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(urlParams[p]));
    }
  return str.join("&");
};
