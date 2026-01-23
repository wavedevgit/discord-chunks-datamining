/** Chunk was on 96811 **/
/** chunk id: 146793, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js"), require("./747238.js"), require("./733351.js");
var Chunk64700 = require("./64700.js"),
  Chunk444927 = require("./444927.js"),
  Chunk629357 = require("./629357.js");

function s(e) {
  let {
    searchOptions: t
  } = e, [r, s] = n.useState({
    results: [],
    query: ""
  }), a = (0, i.A)(() => {
    let e = new l.Ay((e, t) => {
      s({
        results: e,
        query: t
      })
    });
    return e.setLimit(20), e.search(""), e
  });
  return n.useEffect(() => () => a.destroy(), [a]), n.useEffect(() => {
      null != t && t !== a.options && a.setOptions(t)
    }, [a, t]),
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      search: n.useCallback(e => {
        var t;
        let {
          query: r,
          resultTypes: n
        } = e;
        null != a.resultTypes && (t = a.resultTypes, n.length === t.size && n.every(e => t.has(e))) || (a.setResultTypes(n), a.setLimit(1 === n.length ? 50 : 20)), a.search("" === r.trim() ? "" : r)
      }, [a])
    }, r)
}