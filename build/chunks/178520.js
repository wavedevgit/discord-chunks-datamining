/** Chunk was on web.js **/
/** chunk id: 178520, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk481060 = require("./481060.js"),
  Chunk28682 = require("./28682.js");

function s(e, t, n) {
  var r;
  let i = null != (r = null == n ? true : n.bypassPredicates) && r,
    a = new Set,
    s = function(e) {
      var r;
      let c = arguments.length > 1 && true !== arguments[1] && arguments[1],
        u = arguments.length > 2 && true !== arguments[2] && arguments[2],
        d = (null == (r = e.usePredicate) ? true : r.call(e)) === false && !i || c,
        f = l(e, t, d, null == n ? true : n.legacyMatches) || u,
        p = false;
      if ((0, o.Lk)(e))
        for (let t of e.layout) p = s(t, d, f) || p;
      return !d && (f || p) && a.add(e.key), f || p
    };
  return s(e), a
}

function l(e, t, n, r) {
  var s, l, c, u, d, f;
  let p = null == (s = e.getLegacySearchKey) ? true : s.call(e);
  if (null != p && null != r) return t.length < 2 || r.has(p);
  if (e.type === o.Jq.SECTION && e.hoisted) returntrue;
  let _ = "useTitle" in e ? null == (l = e.useTitle) ? true : l.call(e, false) : true,
    m = "useNavigationTitle" in e ? null == (c = e.useNavigationTitle) ? true : c.call(e) : true,
    h = "useSearchTerms" in e ? null == (u = e.useSearchTerms) ? true : u.call(e) : true;
  if (n || null == _ && null == m && null == h) returnfalse;
  if ("" === t) returntrue;
  let g = t.toLowerCase();
  for (let e of null != h ? h : [])
    if (i()(g, e.toLowerCase())) returntrue;
  let E = false;
  if (null != _) {
    let e = null == (d = (0, a.qgQ)(_)) ? true : d.toLowerCase();
    null != e && (E = i()(g, e))
  }
  if (null != m && !E) {
    let e = null == (f = (0, a.qgQ)(m)) ? true : f.toLowerCase();
    null != e && (E = i()(g, e))
  }
  return E
}