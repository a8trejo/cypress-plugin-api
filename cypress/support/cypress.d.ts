declare namespace Cypress {
    interface Chainable {
      /**
       * Make an HTTP GET request. Command works the same way as cy.request()
       *
       * @see https://on.cypress.io/request
       * @example
       *    cy.api('http://dev.local/seed')
       */
      api(url: string, body?: RequestBody): Chainable<ApiResponseBody>
      /**
       * Make an HTTP request with specific method. Command works the same way as cy.request()
       *
       * @see https://on.cypress.io/request
       * @example
       *    cy.api('POST', 'http://localhost:8888/users', {name: 'Jane'})
       */
      api(method: HttpMethod, url: string, body?: RequestBody): Chainable<ApiResponseBody>
      /**
       * Make an HTTP request with specific behavior. Command works the same way as cy.request()
       *
       * @see https://on.cypress.io/request
       * @example
       *    cy.api({
       *      url: '/dashboard',
       *      followRedirect: false // turn off following redirects
       *    })
       */
      api(options: Partial<RequestOptions>): Chainable<ApiResponseBody>
    }
  }

  interface ApiResponseBody extends Cypress.Response<any> {
    size?: number
  }

  type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'
  type RequestBody = Cypress.RequestBody
  type RequestOptions = Cypress.RequestOptions
