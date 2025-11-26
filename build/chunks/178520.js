/** Chunk was on 9452 **/
/** chunk id: 178520, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
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
          let S = null == (s = t.getLegacySearchKey) ? true : s.call(t);
          if (null != S) return e.length < 2 || i.has(S);
          if (t.type === u.Jq.SECTION && t.hoisted) returntrue;
          let T = "useTitle" in t ? null == (a = t.useTitle) ? true : a.call(t, false) : true,
            I = "useNavigationTitle" in t ? null == (o = t.useNavigationTitle) ? true : o.call(t) : true,
            g = "useSearchTerms" in t ? null == (c = t.useSearchTerms) ? true : c.call(t) : true;
          if (n || null == T && null == I && null == g) returnfalse;
          if ("" === e) returntrue;
          let O = e.toLowerCase();
          for (let t of null != g ? g : [])
            if (r()(O, t.toLowerCase())) returntrue;
          let _ = false;
          if (null != T) {
            let t = null == (d = (0, l.qgQ)(T)) ? true : d.toLowerCase();
            null != t && (_ = r()(O, t))
          }
          if (null != I && !_) {
            let t = null == (E = (0, l.qgQ)(I)) ? true : E.toLowerCase();
            null != t && (_ = r()(O, t))
          }
          return _
        }(t, e, d, n) || c,
        S = false;
      if ((0, u.Lk)(t))
        for (let e of t.layout) S = s(e, d, E) || S;
      return !d && (E || S) && i.add(t.key), E || S
    };
  return s(t), i
}