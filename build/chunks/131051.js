/** Chunk was on 9452 **/
/** chunk id: 131051, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk991346 = require("./991346.js"),
  Chunk839469 = require("./839469.js"),
  Chunk509613 = require("./509613.js"),
  Chunk904849 = require("./904849.js"),
  Chunk87432 = require("./87432.js"),
  Chunk178520 = require("./178520.js");

function c(t, e) {
  let n = i.useMemo(() => (0, u.Ql)(t), [t]),
    c = (0, l.Pt)(),
    {
      searchResults: E
    } = (0, r.F)(),
    d = new Set;
  for (let t of E) {
    let e = t;
    for (; null != e;) {
      var S;
      let t = null == (S = c[e]) ? true : S.parent;
      if (null == t) {
        d.add(e);
        break
      }
      e = t
    }
  }
  let O = (0, o.Z)(n, null != e ? e : "", d),
    [T, I] = i.useState(O),
    g = function(t, e) {
      if (t.size !== e.size) returntrue;
      for (let n of t)
        if (!e.has(n)) returntrue;
      returnfalse
    }(T, O);
  return i.useEffect(() => {
    g && I(O)
  }, [g, O]), i.useMemo(() => {
    var t, e, i;
    let l = new s.Z;
    return {
      node: null != (t = (0, a.Z)(n, T, l)) ? t : (e = function(t) {
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
  }, [T, n])
}