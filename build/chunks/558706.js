/** Chunk was on web.js **/
/** chunk id: 558706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yn: () => f,
  tJ: () => p
}), require("./415506.js");
var Chunk664751 = require("./664751.js"),
  Chunk544891 = require("./544891.js"),
  Chunk710845 = require("./710845.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js");

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
        this.retryDelay = isNaN(a) || 0 === a ? c : a * o.Z.Millis.SECOND, this.retryLater(e, t, n), t(i)
      }
    } catch (e) {
      new a.Z("SearchFetcher").error(e), n(e)
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
      case Chunk981631.aib.FAVORITES:
        return Chunk981631.ANM.SEARCH_FAVORITES;
      case Chunk981631.aib.GUILD:
        if (null == this.searchId || "" === this.searchId) return;
        return Chunk981631.ANM.SEARCH_GUILD(this.searchId);
      case Chunk981631.aib.CHANNEL:
        if (null == this.searchId || "" === this.searchId) return;
        return Chunk981631.ANM.SEARCH_CHANNEL(this.searchId);
      default:
        throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
    }
  }
  makeRequest(e) {
    let {
      rejectWithError: t
    } = e, n = this.getEndpoint();
    return null == n ? null : i.tn.get({
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
      case Chunk981631.aib.DMS:
        return Chunk981631.ANM.SEARCH_TABS_DMS;
      case Chunk981631.aib.GUILD_CHANNEL:
      case Chunk981631.aib.GUILD:
      case Chunk981631.aib.THREAD:
        if (null == this.searchId || "" === this.searchId) return;
        return Chunk981631.ANM.SEARCH_TABS_GUILD(this.searchId);
      case Chunk981631.aib.CHANNEL:
        if (null == this.searchId || "" === this.searchId) return;
        return Chunk981631.ANM.SEARCH_TABS_CHANNEL(this.searchId);
      default:
        throw Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
    }
  }
  makeRequest(e) {
    let {
      rejectWithError: t
    } = e, n = this.getEndpoint();
    return null == n ? null : i.tn.post({
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