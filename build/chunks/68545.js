/** Chunk was on 2824 **/
/** chunk id: 68545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => a,
  PN: () => s,
  Sm: () => i
}), require("./896048.js"), require("./321073.js");
var r, Chunk64700 = require("./64700.js"),
  i = ((r = {})[r.Trick = 0] = "Trick", r[r.Treat = 1] = "Treat", r);
let s = 2;

function a(e, t, n) {
  let r = l.useRef(Math.random());
  return l.useMemo(() => {
    if (null == e || 0 === e.length) return null;
    if (null == t || 0 === t.length) {
      let t = null != n && e.some(e => e.skuId === n.skuId) ? n : e[0];
      return {
        defaultCategory: Math.floor(r.current * s),
        defaultHighlightedReward: t
      }
    }
    let l = [],
      i = new Map,
      a = new Map;
    for (let n of t)
      if (n.variants.length >= s)
        for (let t = 0; t < s; t++) {
          let r = t,
            s = n.variants[t];
          e.some(e => e.skuId === s.skuId) && (a.set(s.skuId, r), i.has(r) || (l.push(r), i.set(r, function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(t)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
          }(function(e) {
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
          }({}, s), {
            name: n.name
          }))))
        }
    if (0 === l.length) return null;
    if (null != n) {
      let e = a.get(n.skuId);
      if (null != e) return {
        defaultCategory: e,
        defaultHighlightedReward: n
      }
    }
    let o = l[Math.floor(r.current * l.length)];
    return {
      defaultCategory: o,
      defaultHighlightedReward: i.get(o)
    }
  }, [e, t, n])
}