/** Chunk was on 9452 **/
/** chunk id: 178520, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
  Chunk28682 = require("./28682.js");

function u(e, t, n) {
  let i = new Set,
    u = function(e) {
      var s;
      let a = arguments.length > 1 && true !== arguments[1] && arguments[1],
        o = arguments.length > 2 && true !== arguments[2] && arguments[2],
        c = (null == (s = e.usePredicate) ? true : s.call(e)) === false || a,
        d = function(e, t, n, i) {
          var u, s;
          if (null != e.legacySearchKey) return t.length < 2 || i.has(e.legacySearchKey);
          if (e.type === l.Jq.SECTION && e.hoisted) returntrue;
          let a = "useTitle" in e ? null == (u = e.useTitle) ? true : u.call(e, false) : true,
            o = "useSearchTerms" in e ? null == (s = e.useSearchTerms) ? true : s.call(e) : true;
          if (n || null == a && null == o) returnfalse;
          if ("" === t) returntrue;
          let c = t.toLowerCase();
          for (let e of null != o ? o : [])
            if (r()(c, e.toLowerCase())) returntrue;
          return "string" == typeof a && r()(c, a.toLowerCase())
        }(e, t, c, n) || o,
        E = false;
      if ((0, l.Lk)(e))
        for (let t of e.layout) E = u(t, c, d) || E;
      return !c && (d || E) && i.add(e.key), d || E
    };
  return u(e), i
}