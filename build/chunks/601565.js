/** Chunk was on 83098 **/
/** chunk id: 601565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./35282.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk211266 = require("./211266.js"),
  Chunk212819 = require("./212819.js");

function s(e) {
  let {
    searchOptions: t
  } = e, [n, s] = r.useState({
    results: [],
    query: ""
  }), i = (0, l.Z)(() => {
    let e = new a.ZP((e, t) => {
      s({
        results: e,
        query: t
      })
    });
    return e.setLimit(20), e.search(""), e
  });
  return r.useEffect(() => () => i.destroy(), [i]), r.useEffect(() => {
      null != t && t !== i.options && i.setOptions(t)
    }, [i, t]),
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      search: r.useCallback(e => {
        var t;
        let {
          query: n,
          resultTypes: r
        } = e;
        null != i.resultTypes && (t = i.resultTypes, r.length === t.size && r.every(e => t.has(e))) || (i.setResultTypes(r), i.setLimit(1 === r.length ? 50 : 20)), i.search("" === n.trim() ? "" : n)
      }, [i])
    }, n)
}