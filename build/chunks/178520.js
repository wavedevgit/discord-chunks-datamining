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
      var a;
      let o = arguments.length > 1 && true !== arguments[1] && arguments[1],
        c = arguments.length > 2 && true !== arguments[2] && arguments[2],
        E = (null == (a = t.usePredicate) ? true : a.call(t)) === false || o,
        d = function(t, e, n, i) {
          var s, a, o, c, E;
          if (null != t.legacySearchKey) return e.length < 2 || i.has(t.legacySearchKey);
          if (t.type === u.Jq.SECTION && t.hoisted) returntrue;
          let d = "useTitle" in t ? null == (s = t.useTitle) ? true : s.call(t, false) : true,
            S = "useNavigationTitle" in t ? null == (a = t.useNavigationTitle) ? true : a.call(t) : true,
            O = "useSearchTerms" in t ? null == (o = t.useSearchTerms) ? true : o.call(t) : true;
          if (n || null == d && null == S && null == O) returnfalse;
          if ("" === e) returntrue;
          let T = e.toLowerCase();
          for (let t of null != O ? O : [])
            if (l()(T, t.toLowerCase())) returntrue;
          let I = false;
          if (null != d) {
            let t = null == (c = (0, r.qgQ)(d)) ? true : c.toLowerCase();
            null != t && (I = l()(T, t))
          }
          if (null != S && !I) {
            let t = null == (E = (0, r.qgQ)(S)) ? true : E.toLowerCase();
            null != t && (I = l()(T, t))
          }
          return I
        }(t, e, E, n) || c,
        S = false;
      if ((0, u.Lk)(t))
        for (let e of t.layout) S = s(e, E, d) || S;
      return !E && (d || S) && i.add(t.key), d || S
    };
  return s(t), i
}