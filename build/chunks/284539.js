/** Chunk was on 30202 **/
/** chunk id: 284539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668826 = require("./668826.js"),
  Chunk120421 = require("./120421.js");

function l(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.getItemMetadata(e)),
    n = (0, i.useMemo)(() => null != t ? t : {}, [t]),
    l = (0, i.useRef)(n);
  (0, i.useEffect)(() => {
    l.current = n
  }, [n]);
  let o = (0, i.useCallback)(t => {
    (0, s.cn)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, l.current, t))
  }, [e]);
  return (0, i.useMemo)(() => [n, o], [n, o])
}