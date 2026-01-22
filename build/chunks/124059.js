/** Chunk was on web.js **/
/** chunk id: 124059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk397927 = require("./397927.js"),
  Chunk963935 = require("./963935.js");

function o(e, t, n) {
  var r;
  let i = null != (r = null == n ? true : n.bypassPredicates) && r,
    a = new Set,
    o = function(e) {
      var r;
      let c = arguments.length > 1 && true !== arguments[1] && arguments[1],
        u = arguments.length > 2 && true !== arguments[2] && arguments[2],
        d = (null == (r = e.usePredicate) ? true : r.call(e)) === false && !i || c,
        f = l(e, t, d, null == n ? true : n.legacyMatches) || u,
        p = false;
      if ((0, s.nW)(e))
        for (let t of e.layout) p = o(t, d, f) || p;
      return !d && (f || p) && a.add(e.key), f || p
    };
  return o(e), a
}

function l(e, t, n, r) {
  var o, l, c, u;
  let d = null == (o = e.getLegacySearchKey) ? true : o.call(e);
  if (null != d && null != r) return t.length < 2 || r.has(d);
  if (e.type === s.Z6.SECTION && e.hoisted) returntrue;
  if (e.type === s.Z6.TAB_ITEM) returnfalse;
  let f = "useTitle" in e ? null == (l = e.useTitle) ? true : l.call(e, false) : true,
    p = "useSearchTerms" in e ? null == (c = e.useSearchTerms) ? true : c.call(e) : true;
  if (n || null == f && null == p) returnfalse;
  if ("" === t) returntrue;
  if (e.type === s.Z6.STATIC) returnfalse;
  let _ = t.toLowerCase();
  for (let e of null != p ? p : [])
    if (i()(_, e.toLowerCase())) returntrue;
  let h = false;
  if (null != f) {
    let e = null == (u = (0, a.Oer)(f)) ? true : u.toLowerCase();
    null != e && (h = i()(_, e))
  }
  return h
}