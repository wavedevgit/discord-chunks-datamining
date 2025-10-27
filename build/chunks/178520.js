/** Chunk was on 9452 **/
/** chunk id: 178520, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk481060 = require("./481060.js"),
  Chunk28682 = require("./28682.js");

function s(t, e, n) {
  let i = new Set,
    s = function(t) {
      var o;
      let a = arguments.length > 1 && true !== arguments[1] && arguments[1],
        c = arguments.length > 2 && true !== arguments[2] && arguments[2],
        E = (null == (o = t.usePredicate) ? true : o.call(t)) === false || a,
        d = function(t, e, n, i) {
          var s, o, a, c, E;
          if (null != t.legacySearchKey) return e.length < 2 || i.has(t.legacySearchKey);
          if (t.type === r.Jq.SECTION && t.hoisted) returntrue;
          let d = "useTitle" in t ? null == (s = t.useTitle) ? true : s.call(t, false) : true,
            T = "useNavigationTitle" in t ? null == (o = t.useNavigationTitle) ? true : o.call(t) : true,
            I = "useSearchTerms" in t ? null == (a = t.useSearchTerms) ? true : a.call(t) : true;
          if (n || null == d && null == T && null == I) returnfalse;
          if ("" === e) returntrue;
          let O = e.toLowerCase();
          for (let t of null != I ? I : [])
            if (l()(O, t.toLowerCase())) returntrue;
          let y = false;
          if (null != d) {
            let t = null == (c = (0, u.qgQ)(d)) ? true : c.toLowerCase();
            null != t && (y = l()(O, t))
          }
          if (null != T && !y) {
            let t = null == (E = (0, u.qgQ)(T)) ? true : E.toLowerCase();
            null != t && (y = l()(O, t))
          }
          return y
        }(t, e, E, n) || c,
        T = false;
      if ((0, r.Lk)(t))
        for (let e of t.layout) T = s(e, E, d) || T;
      return !E && (d || T) && i.add(t.key), d || T
    };
  return s(t), i
}