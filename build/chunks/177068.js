/** Chunk was on web.js **/
/** chunk id: 177068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DX: () => p,
  MS: () => f
}), require("./65821.js");
var Chunk488428 = require("./488428.js"),
  Chunk562465 = require("./562465.js"),
  Chunk626584 = require("./626584.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 5e3,
  u = 5;
class d {
  async fetch(e, t, n) {
    if (!this.isCanceled) try {
      let i = await this.makeRequest({
        rejectWithError: false
      });
      if (null == i || this.isCanceled) return;
      if (200 === i.status) e(i);
      else if (202 === i.status) {
        var r;
        if (this.query.attempts = (null != (r = this.query.attempts) ? r : 0) + 1, this.query.attempts > u) return;
        let a = parseInt(i.headers["retry-after"]);
        this.retryDelay = isNaN(a) || 0 === a ? c : a * s.A.Millis.SECOND, this.retryLater(e, t, n), t(i)
      }
    } catch (e) {
      new a.A("SearchFetcher").error(e), n(e)
    }
  }
  cancel() {
    this.isCanceled = true, null != this.indexingPollId && clearTimeout(this.indexingPollId)
  }
  retryLater(e, t, n) {
    null != this.indexingPollId && clearTimeout(this.indexingPollId), this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
  }
  constructor(e, t, n) {
    l(this, "indexingPollId", true), l(this, "searchId", true), l(this, "searchType", true), l(this, "query", true), l(this, "retryDelay", true), l(this, "isCanceled", false), this.searchId = e, this.searchType = t, this.query = n
  }
}
class f extends d {
  getEndpoint() {
    switch (this.searchType) {
      case o.I4_.FAVORITES:
        return o.Rsh.SEARCH_FAVORITES;
      case o.I4_.GUILD:
        if (null == this.searchId || "" === this.searchId) return;
        return o.Rsh.SEARCH_GUILD(this.searchId);
      case o.I4_.CHANNEL:
        if (null == this.searchId || "" === this.searchId) return;
        return o.Rsh.SEARCH_CHANNEL(this.searchId);
      default:
        throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
    }
  }
  makeRequest(e) {
    let {
      rejectWithError: t
    } = e, n = this.getEndpoint();
    return null == n ? null : i.Bo.get({
      url: n,
      query: r.stringify(this.query),
      oldFormErrors: true,
      rejectWithError: t
    })
  }
}
class p extends d {
  getEndpoint() {
    switch (this.searchType) {
      case o.I4_.DMS:
        return o.Rsh.SEARCH_TABS_DMS;
      case o.I4_.GUILD_CHANNEL:
      case o.I4_.GUILD:
      case o.I4_.THREAD:
        if (null == this.searchId || "" === this.searchId) return;
        return o.Rsh.SEARCH_TABS_GUILD(this.searchId);
      case o.I4_.CHANNEL:
        if (null == this.searchId || "" === this.searchId) return;
        return o.Rsh.SEARCH_TABS_CHANNEL(this.searchId);
      default:
        throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
    }
  }
  makeRequest(e) {
    let {
      rejectWithError: t
    } = e, n = this.getEndpoint();
    return null == n ? null : i.Bo.post({
      url: n,
      body: this.payload,
      oldFormErrors: true,
      rejectWithError: t
    })
  }
  constructor(e, t, n, r) {
    super(e, t, n), l(this, "payload", true), this.payload = r
  }
}