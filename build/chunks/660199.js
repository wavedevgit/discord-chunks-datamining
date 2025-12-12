/** Chunk was on web.js **/
/** chunk id: 660199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => u,
  He: () => p,
  K_: () => l,
  Qh: () => s,
  ZB: () => f,
  tC: () => d
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk55935 = require("./55935.js"),
  Chunk70956 = require("./70956.js");
let s = {
    t: e => (0, o.vc)(e, "LT"),
    T: e => (0, o.vc)(e, "LTS"),
    d: e => (0, o.vc)(e, "L"),
    D: e => (0, o.vc)(e, "LL"),
    f: e => (0, o.vc)(e, "LLL"),
    F: e => (0, o.vc)(e, "LLLL"),
    s: e => (0, o.vc)(e, "L LT"),
    S: e => (0, o.vc)(e, "L LTS"),
    R: e => {
      let t = i().relativeTimeThreshold("s");
      i().relativeTimeThreshold("s", 60);
      let n = i().relativeTimeThreshold("ss");
      i().relativeTimeThreshold("ss", false);
      let r = i().relativeTimeThreshold("m");
      i().relativeTimeThreshold("m", 60);
      let o = null;
      try {
        o = i()(e.toDate()).fromNow()
      } catch (e) {}
      return i().relativeTimeThreshold("s", t), i().relativeTimeThreshold("ss", n), i().relativeTimeThreshold("m", r), null != o ? o : i()(e.toDate()).fromNow()
    }
  },
  l = "f";
Object.setPrototypeOf(s, null);
let c = Object.keys(s).join("|"),
  u = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(c, "))?>"));

function d(e) {
  let {
    timestamp: t,
    format: n
  } = e, r = i()(Number(t) * a.Z.Millis.SECOND);
  if (!r.isValid()) return null;
  let o = null != n ? s[n] : true;
  return null == o && (o = s[l]), {
    timestamp: t,
    format: n,
    parsed: r,
    full: s.F(r),
    formatted: o(r)
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