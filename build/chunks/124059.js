/** Chunk was on 5606 **/
/** chunk id: 124059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk397927 = require("./397927.js"),
  Chunk963935 = require("./963935.js");

function a(e, t, n) {
  var r;
  let a = null != (r = null == n ? true : n.bypassPredicates) && r,
    o = new Set,
    c = function(e) {
      var r;
      let d = arguments.length > 1 && true !== arguments[1] && arguments[1],
        u = arguments.length > 2 && true !== arguments[2] && arguments[2],
        p = (null == (r = e.usePredicate) ? true : r.call(e)) === false && !a || d,
        _ = function(e, t, n, r) {
          var a, o, c, d;
          let u = null == (a = e.getLegacySearchKey) ? true : a.call(e);
          if (null != u && null != r) return t.length < 2 || r.has(u);
          if (e.type === s.Z6.SECTION && e.hoisted) returntrue;
          if (e.type === s.Z6.TAB_ITEM) returnfalse;
          let p = "useTitle" in e ? null == (o = e.useTitle) ? true : o.call(e, false) : true,
            _ = "useSearchTerms" in e ? null == (c = e.useSearchTerms) ? true : c.call(e) : true;
          if (n || null == p && null == _) returnfalse;
          if ("" === t) returntrue;
          if (e.type === s.Z6.STATIC) returnfalse;
          let m = t.toLowerCase();
          for (let e of null != _ ? _ : [])
            if (i()(m, e.toLowerCase())) returntrue;
          let g = false;
          if (null != p) {
            let e = null == (d = (0, l.Oer)(p)) ? true : d.toLowerCase();
            null != e && (g = i()(m, e))
          }
          return g
        }(e, t, p, null == n ? true : n.legacyMatches) || u,
        m = false;
      if ((0, s.nW)(e))
        for (let t of e.layout) m = c(t, p, _) || m;
      return !p && (_ || m) && o.add(e.key), _ || m
    };
  return c(e), o
}