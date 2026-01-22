/** Chunk was on 21738 **/
/** chunk id: 747550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./733351.js");
var Chunk449054 = require("./449054.js"),
  Chunk417426 = require("./417426.js"),
  Chunk823448 = require("./823448.js"),
  Chunk351022 = require("./351022.js"),
  Chunk282026 = require("./282026.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class c {}
let u = new class extends c {
  constructor(...e) {
    super(...e), o(this, "loadMoreCategoryResults", async e => {
      let {
        query: t,
        categoryId: n,
        languageCode: l,
        offset: s
      } = e;
      a.A.getIsFetching({
        query: t,
        categoryId: n,
        languageCode: l
      }) || a.A.getIsInitialFetchComplete({
        query: t,
        categoryId: n,
        languageCode: l
      }) && (r.br({
        withCounts: false,
        offset: s
      }), await i.A.fetchSearchResults(t, {
        categoryId: n,
        languageCode: l,
        offset: s,
        limit: 12,
        withCounts: false
      }))
    }), o(this, "loadCategoryResults", async e => {
      let {
        query: t,
        categoryId: n,
        languageCode: l
      } = e, s = a.A.getIsFetching({
        query: t,
        categoryId: n,
        languageCode: l
      }), o = a.A.getIsInitialFetchComplete({
        query: t,
        categoryId: n,
        languageCode: l
      });
      s || o || (r.br({
        withCounts: false,
        offset: 0
      }), await i.A.fetchSearchResults(t, {
        categoryId: n,
        languageCode: l,
        offset: 0,
        limit: 12,
        withCounts: false
      }))
    }), o(this, "loadCategoryResultsAndCounts", async e => {
      let {
        query: t,
        loadId: n,
        categoryId: a,
        languageCode: o
      } = e;
      if ("" === t.trim()) return;
      let c = l.A.getIsFetchingCounts(t),
        u = l.A.getIsFetchingCounts(t);
      c || u || (s.A.setState({
        fetchedQuery: t,
        resultsQuery: ""
      }), r.fd(n, a), r.br({
        withCounts: true,
        offset: 0
      }), await i.A.fetchSearchResults(t, {
        categoryId: a,
        languageCode: o,
        offset: 0,
        limit: 12,
        withCounts: true
      }), s.A.setState({
        resultsQuery: t
      }))
    })
  }
}