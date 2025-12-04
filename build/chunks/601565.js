/** Chunk was on 83098 **/
/** chunk id: 601565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./35282.js"), require("./781311.js");
var Chunk473749 = require("./473749.js"),
  Chunk211266 = require("./211266.js"),
  Chunk212819 = require("./212819.js");

function a(e) {
  let {
    searchOptions: t
  } = e, [n, a] = l.useState({
    results: [],
    query: ""
  }), i = (0, r.Z)(() => {
    let e = new s.ZP((e, t) => {
      a({
        results: e,
        query: t
      })
    });
    return e.setLimit(20), e.search(""), e
  });
  return l.useEffect(() => () => i.destroy(), [i]), l.useEffect(() => {
      null != t && t !== i.options && i.setOptions(t)
    }, [i, t]),
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({
      search: l.useCallback(e => {
        var t;
        let {
          query: n,
          resultTypes: l
        } = e;
        null != i.resultTypes && (t = i.resultTypes, l.length === t.size && l.every(e => t.has(e))) || (i.setResultTypes(l), i.setLimit(1 === l.length ? 50 : 20)), i.search("" === n.trim() ? "" : n)
      }, [i])
    }, n)
}