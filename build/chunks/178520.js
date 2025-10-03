/** Chunk was on 9452 **/
/** chunk id: 178520, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk28682 = require("./28682.js");

function r(t, e, n) {
  let i = new Set,
    r = function(t) {
      var s;
      let a = arguments.length > 1 && true !== arguments[1] && arguments[1],
        o = arguments.length > 2 && true !== arguments[2] && arguments[2],
        c = (null == (s = t.usePredicate) ? true : s.call(t)) === false || a,
        E = function(t, e, n, i) {
          var r, s;
          if (null != t.legacySearchKey) return e.length < 2 || i.has(t.legacySearchKey);
          if (t.type === u.Jq.SECTION && t.hoisted) returntrue;
          let a = "useTitle" in t ? null == (r = t.useTitle) ? true : r.call(t, false) : true,
            o = "useSearchTerms" in t ? null == (s = t.useSearchTerms) ? true : s.call(t) : true;
          if (n || null == a && null == o) returnfalse;
          if ("" === e) returntrue;
          let c = e.toLowerCase();
          for (let t of null != o ? o : [])
            if (l()(c, t.toLowerCase())) returntrue;
          return "string" == typeof a && l()(c, a.toLowerCase())
        }(t, e, c, n) || o,
        d = false;
      if ((0, u.Lk)(t))
        for (let e of t.layout) d = r(e, c, E) || d;
      return !c && (E || d) && i.add(t.key), E || d
    };
  return r(t), i
}