export default class StatisticsClient {
  constructor(session) { this.session = session }
  async get(scope, view, params = {}) {
    return (await this.session.axios.get(`/api/v1/statistics/${scope}/${view}`, { params, timeout: 15000 })).data
  }
  summary(scope, params) { return this.get(scope, 'summary', params) }
  history(scope, params) { return this.get(scope, 'history', params) }
  library() { return this.get('server', 'library') }
  health(params) { return this.get('server', 'health', params) }
}
