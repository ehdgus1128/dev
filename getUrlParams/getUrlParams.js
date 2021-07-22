function getUrlParams(search) {
  let hashes = search.slice(search.indexOf('?') + 1).split('&')
  return hashes.reduce((params, hash) => {
      let [key, val] = hash.split('=')
      return Object.assign(params, {[key]: decodeURIComponent(val)})
  }, {})
}

console.log(getUrlParams("http://localhost:8080?a=2&b=1&c=3&d=5"));