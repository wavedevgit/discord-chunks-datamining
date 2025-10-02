/** Chunk was on 9452 **/
/** chunk id: 131051, original params: e,t,n (module,exports,require) **/
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

function c(e, t) {
  let n = i.useMemo(() => (0, u.Ql)(e), [e]),
    c = (0, r.Pt)(),
    {
      searchResults: d
    } = (0, l.F)(),
    E = new Set;
  for (let e of d) {
    let t = e;
    for (; null != t;) {
      var O;
      let e = null == (O = c[t]) ? true : O.parent;
      if (null == e) {
        E.add(t);
        break
      }
      t = e
    }
  }
  let T = (0, o.Z)(n, null != t ? t : "", E),
    [f, y] = i.useState(T),
    g = function(e, t) {
      if (e.size !== t.size) returntrue;
      for (let n of e)
        if (!t.has(n)) returntrue;
      returnfalse
    }(f, T);
  return i.useEffect(() => {
    g && y(T)
  }, [g, T]), i.useMemo(() => {
    var e, t, i;
    let r = new s.Z;
    return {
      node: null != (e = (0, a.Z)(n, f, r)) ? e : (t = function(e) {
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
      }({}, n), i = i = {
        layout: []
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t),
      directory: r
    }
  }, [f, n])
}