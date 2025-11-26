/** Chunk was on 9452 **/
/** chunk id: 131051, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk509613 = require("./509613.js"),
  Chunk904849 = require("./904849.js"),
  Chunk87432 = require("./87432.js"),
  Chunk178520 = require("./178520.js");

function c(t, e) {
  let n = i.useMemo(() => (0, u.Ql)(t), [t]),
    c = (0, r.Pt)(),
    {
      searchResults: d
    } = (0, l.F)(),
    E = new Set;
  for (let t of d) {
    let e = t;
    for (; null != e;) {
      var S;
      let t = null == (S = c[e]) ? true : S.parent;
      if (null == t) {
        E.add(e);
        break
      }
      e = t
    }
  }
  let T = (0, o.Z)(n, null != e ? e : "", E),
    [I, O] = i.useState(T),
    g = function(t, e) {
      if (t.size !== e.size) returntrue;
      for (let n of t)
        if (!e.has(n)) returntrue;
      returnfalse
    }(I, T);
  return i.useEffect(() => {
    g && O(T)
  }, [g, T]), i.useMemo(() => {
    var t, e, i;
    let r = new s.Z;
    return {
      node: null != (t = (0, a.Z)(n, I, r)) ? t : (e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({}, n), i = i = {
        layout: []
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
      }), e),
      directory: r
    }
  }, [I, n])
}