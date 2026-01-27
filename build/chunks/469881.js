/** Chunk was on web.js **/
/** chunk id: 469881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk985018 = require("./985018.jsx");
let o = 60,
  s = 3600,
  l = 86400,
  c = 2592e3,
  u = 31104e3,
  d = () => ({
    seconds: a.t.sMPmtq,
    minutes: a.t.N9M4N1,
    hours: a.t.p0KedC,
    days: a.t.gjK5av,
    months: a.t.kHo4Or,
    years: a.t.KjKr2P
  }),
  f = (e, t) => null != t && null != t[e],
  p = (e, t, n) => {
    var r, i, a;
    return f(e, t) ? null != (i = null != (a = t[e]) ? a : null == n ? true : n[e]) ? i : null : null != (r = null == n ? true : n[e]) ? r : null
  },
  _ = function(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = i()().diff(i()(e), "s"),
      f = null != t ? t() : true,
      _ = d(),
      h = (e, t) => {
        let r = p(e, f, n ? _ : true);
        return null == r ? null : "string" == typeof r ? r : a.intl.formatToPlainString(r, {
          count: t
        })
      };
    if (r < o) {
      let e = (null == f ? true : f.seconds) != null ? h("seconds", r) : h("minutes", 1);
      if (null != e) return e
    }
    if (r < s) {
      let e = h("minutes", Math.floor(r / o));
      if (null != e) return e
    }
    if (r < l) {
      let e = h("hours", Math.floor(r / s));
      if (null != e) return e
    }
    if (r < c) {
      let e = h("days", Math.floor(r / l));
      if (null != e) return e
    }
    if (r < u) {
      let e = h("months", Math.floor(r / c));
      if (null != e) return e
    }
    if (r >= u && (null == f ? true : f.years) != null) {
      let e = h("years", Math.floor(r / u));
      if (null != e) return e
    }
    return i()(e).format("LL")
  }