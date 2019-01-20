//
// Fetch (fetch) Wrapper for Local API
//

const _ = require('lodash');
const fetch = require('node-fetch');

class API {

  constructor(url, options = {}) {
    this.baseUrl = url;
    this.options = _.merge({
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, options);
  }

  /**
  * Consumes response, returns same response if ok, otherwise creates
  * and throws error.
  *
  * @param response { Object } - response returned from fetch promise
  *
  * @returns {*}
  */
  status(response) {
    if (response.ok) {
      return response;
    } else {
      var error = new Error(response.statusText || response.status);
      error.response = response;
      throw error;
    }
  }

  /**
  * Creates JSON object from response
  *
  * @param response { Object } - response returned from fetch promise
  *
  * @returns {*}
  */
  json(response) {
    return response.json();
  }

  /**
  * Main fetch wrapper for API.
  *
  * @param path { String }
  *
  * @returns {*}
  */
  fetch(path) {
    return fetch(`${this.baseUrl}${path}`, this.options)
    .then(this.status);
  }

  /**
  * Fetch wrapper for API for JSON response.
  *
  * @param path { String }
  * @param options { Object }
  */
  fetchJSON(path, options = {}) {
    return this.fetch(path, { ...this.options, options })
      .then(this.status).then(this.json);
  }

  /**
  * Fetch wrapper for API using GET request with JSON response
  *
  * @param path { String }
  */
  get(path, options = {}) {
    return this.fetchJSON(path);
  }

  /**
  * Fetch wrapper for API using POST request with JSON response
  *
  * @param path { String }
  * @param data { Object }
  */
  post(path, data) {
    return this.fetchJSON(path, { method: 'POST', body: JSON.stringify(data) });
  }

  /**
  * Fetch wrapper for API using PUT request with JSON response
  *
  * @param path { String }
  * @param data { Object }
  */
  put(path, data) {
    return this.fetchJSON(path, { method: 'PUT', body: JSON.stringify(data) });
  }

}

export default API;
