/** Chunk was on 1272 **/
/** chunk id: 959165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./781311.js");
var Chunk900849 = require("./900849.js"),
  Chunk762692 = require("./762692.js"),
  Chunk331114 = require("./331114.js"),
  Chunk356164 = require("./356164.js"),
  Chunk164991 = require("./164991.js");

function s(e, t, n) {
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
    super(...e), s(this, "loadMoreCategoryResults", async e => {
      let {
        query: t,
        categoryId: n,
        languageCode: l,
        offset: o
      } = e;
      !a.Z.getIsFetching({
        query: t,
        categoryId: n,
        languageCode: l
      }) && a.Z.getIsInitialFetchComplete({
        query: t,
        categoryId: n,
        languageCode: l
      }) && (r.qn({
        withCounts: false,
        offset: o
      }), await i.Z.fetchSearchResults(t, {
        categoryId: n,
        languageCode: l,
        offset: o,
        limit: 12,
        withCounts: false
      }))
    }), s(this, "loadCategoryResults", async e => {
      let {
        query: t,
        categoryId: n,
        languageCode: l
      } = e, o = a.Z.getIsFetching({
        query: t,
        categoryId: n,
        languageCode: l
      }), s = a.Z.getIsInitialFetchComplete({
        query: t,
        categoryId: n,
        languageCode: l
      });
      o || s || (r.qn({
        withCounts: false,
        offset: 0
      }), await i.Z.fetchSearchResults(t, {
        categoryId: n,
        languageCode: l,
        offset: 0,
        limit: 12,
        withCounts: false
      }))
    }), s(this, "loadCategoryResultsAndCounts", async e => {
      let {
        query: t,
        loadId: n,
        categoryId: a,
        languageCode: s
      } = e;
      if ("" === t.trim()) return;
      let c = l.Z.getIsFetchingCounts(t),
        u = l.Z.getIsFetchingCounts(t);
      c || u || (o.Z.setState({
        fetchedQuery: t,
        resultsQuery: ""
      }), r.tI(n, a), r.qn({
        withCounts: true,
        offset: 0
      }), await i.Z.fetchSearchResults(t, {
        categoryId: a,
        languageCode: s,
        offset: 0,
        limit: 12,
        withCounts: true
      }), o.Z.setState({
        resultsQuery: t
      }))
    })
  }
}