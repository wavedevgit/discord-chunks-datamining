/** Chunk was on 83098 **/
/** chunk id: 601565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js"), require("./35282.js"), require("./781311.js");
var Chunk647438 = require("./647438.js"),
  Chunk211266 = require("./211266.js"),
  Chunk212819 = require("./212819.js");

function i(e) {
  let {
    searchOptions: t
  } = e, [n, i] = r.useState({
    results: [],
    query: ""
  }), s = (0, l.Z)(() => {
    let e = new a.ZP((e, t) => {
      i({
        results: e,
        query: t
      })
    });
    return e.setLimit(20), e.search(""), e
  });
  return r.useEffect(() => () => s.destroy(), [s]), r.useEffect(() => {
      null != t && t !== s.options && s.setOptions(t)
    }, [s, t]),
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
        null != s.resultTypes && (t = s.resultTypes, r.length === t.size && r.every(e => t.has(e))) || (s.setResultTypes(r), s.setLimit(1 === r.length ? 50 : 20)), s.search("" === n.trim() ? "" : n)
      }, [s])
    }, n)
}