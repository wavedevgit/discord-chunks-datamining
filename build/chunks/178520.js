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
      if ((0, o.L)(e))
        for (let t of e.layout) p = s(t, d, f) || p;
      return !d && (f || p) && a.add(e.key), f || p
    };
  return s(e), a
}

function l(e, t, n, r) {
  var s, l, c, u;
  let d = null == (s = e.getLegacySearchKey) ? true : s.call(e);
  if (null != d && null != r) return t.length < 2 || r.has(d);
  if (e.type === o.J.SECTION && e.hoisted) returntrue;
  let f = "useTitle" in e ? null == (l = e.useTitle) ? true : l.call(e, false) : true,
    p = "useSearchTerms" in e ? null == (c = e.useSearchTerms) ? true : c.call(e) : true;
  if (n || null == f && null == p) returnfalse;
  if ("" === t) returntrue;
  let _ = t.toLowerCase();
  for (let e of null != p ? p : [])
    if (i()(_, e.toLowerCase())) returntrue;
  let m = false;
  if (null != f) {
    let e = null == (u = (0, a.qgQ)(f)) ? true : u.toLowerCase();
    null != e && (m = i()(_, e))
  }
  return m
}