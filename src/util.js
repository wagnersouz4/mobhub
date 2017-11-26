/**
 * @function createUrlFrom
 * @param  {String} base -  The base to create the URL.
 * @param  {Object} params - Object that contains params to append to our base url.
 * @return {String} URL that represents the path + params.
 */
const createUrlFrom = (base, params) => {
  const url = new URL(base)
  Object.keys(params).map(key => {
    const value = params[key]
    if (value) {
      url.searchParams.append(key, params[key])
    }
  })
  return url
}

const getFetchPostConfigUsing = options => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(options)
  }
  return config
}

export { createUrlFrom, getFetchPostConfigUsing }
