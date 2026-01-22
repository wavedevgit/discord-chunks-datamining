/** Chunk was on web.js **/
/** chunk id: 379418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $z: () => l,
  EH: () => f,
  WA: () => d,
  kx: () => o,
  l9: () => u,
  tf: () => p
}), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk405269 = require("./405269.js"),
  Chunk927813 = require("./927813.js");
let o = {
    t: e => (0, a.i$)(e, "LT"),
    T: e => (0, a.i$)(e, "LTS"),
    d: e => (0, a.i$)(e, "L"),
    D: e => (0, a.i$)(e, "LL"),
    f: e => (0, a.i$)(e, "LLL"),
    F: e => (0, a.i$)(e, "LLLL"),
    s: e => (0, a.i$)(e, "L LT"),
    S: e => (0, a.i$)(e, "L LTS"),
    R: e => {
      let t = i().relativeTimeThreshold("s");
      i().relativeTimeThreshold("s", 60);
      let n = i().relativeTimeThreshold("ss");
      i().relativeTimeThreshold("ss", false);
      let r = i().relativeTimeThreshold("m");
      i().relativeTimeThreshold("m", 60);
      let a = null;
      try {
        a = i()(e.toDate()).fromNow()
      } catch (e) {}
      return i().relativeTimeThreshold("s", t), i().relativeTimeThreshold("ss", n), i().relativeTimeThreshold("m", r), null != a ? a : i()(e.toDate()).fromNow()
    }
  },
  l = "f";
Object.setPrototypeOf(o, null);
let c = Object.keys(o).join("|"),
  u = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(c, "))?>"));

function d(e) {
  let {
    timestamp: t,
    format: n
  } = e, r = i()(Number(t) * s.A.Millis.SECOND);
  if (!r.isValid()) return null;
  let a = null != n ? o[n] : true;
  return null == a && (a = o[l]), {
    timestamp: t,
    format: n,
    parsed: r,
    full: o.F(r),
    formatted: a(r)
  }
}

function f(e, t) {
  return d({
    timestamp: e,
    format: t
  })
}

function p(e, t) {
  return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
}