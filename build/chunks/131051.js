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
  let n = i.useMemo(() => (0, r.Ql)(t), [t]),
    c = (0, l.Pt)(),
    {
      searchResults: E
    } = (0, u.F)(),
    S = new Set;
  for (let t of E) {
    let e = t;
    for (; null != e;) {
      var T;
      let t = null == (T = c[e]) ? true : T.parent;
      if (null == t) {
        S.add(e);
        break
      }
      e = t
    }
  }
  let d = (0, o.Z)(n, null != e ? e : "", S),
    [I, O] = i.useState(d),
    g = function(t, e) {
      if (t.size !== e.size) returntrue;
      for (let n of t)
        if (!e.has(n)) returntrue;
      returnfalse
    }(I, d);
  return i.useEffect(() => {
    g && O(d)
  }, [g, d]), i.useMemo(() => {
    var t, e, i;
    let l = new s.Z;
    return {
      node: null != (t = (0, a.Z)(n, I, l)) ? t : (e = function(t) {
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
      directory: l
    }
  }, [I, n])
}