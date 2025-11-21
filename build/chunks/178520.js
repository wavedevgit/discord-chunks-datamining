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
        d = (null == (a = t.usePredicate) ? true : a.call(t)) === false || o,
        E = function(t, e, n, i) {
          var s, a, o, c, d, E;
          let T = null == (s = t.getLegacySearchKey) ? true : s.call(t);
          if (null != T) return e.length < 2 || i.has(T);
          if (t.type === u.Jq.SECTION && t.hoisted) returntrue;
          let S = "useTitle" in t ? null == (a = t.useTitle) ? true : a.call(t, false) : true,
            I = "useNavigationTitle" in t ? null == (o = t.useNavigationTitle) ? true : o.call(t) : true,
            O = "useSearchTerms" in t ? null == (c = t.useSearchTerms) ? true : c.call(t) : true;
          if (n || null == S && null == I && null == O) returnfalse;
          if ("" === e) returntrue;
          let g = e.toLowerCase();
          for (let t of null != O ? O : [])
            if (l()(g, t.toLowerCase())) returntrue;
          let _ = false;
          if (null != S) {
            let t = null == (d = (0, r.qgQ)(S)) ? true : d.toLowerCase();
            null != t && (_ = l()(g, t))
          }
          if (null != I && !_) {
            let t = null == (E = (0, r.qgQ)(I)) ? true : E.toLowerCase();
            null != t && (_ = l()(g, t))
          }
          return _
        }(t, e, d, n) || c,
        T = false;
      if ((0, u.Lk)(t))
        for (let e of t.layout) T = s(e, d, E) || T;
      return !d && (E || T) && i.add(t.key), E || T
    };
  return s(t), i
}