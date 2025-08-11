/** Chunk was on web.js **/
/** chunk id: 271579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WS: () => m,
  ZP: () => E,
  zS: () => g
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk264344 = require("./264344.js"),
  i = require.n(Chunk264344),
  Chunk772848 = require("./772848.js"),
  Chunk511266 = require("./511266.js");

function s(e, t) {
  if (null == e) return {};
  var n, r, i = l(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let c = "com.discord",
  u = 0x3ac14d3a,
  d = "com.hammerandchisel.discord",
  f = "https://discordapp.page.link",
  _ = "https://discordapp.onelink.me",
  p = "Hs5r";

function h() {
  var e, t;
  let n = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"],
    r = RegExp("(".concat(require.join("|"), ")"), "ig"),
    o = (null === i() || true === i() || null == (e = i().ua) ? true : module.match(Chunk264344)) != null,
    a = (null === i() || true === i() ? true : i().name) === "Safari" && !Chunk772848;
  return (null === i() || true === i() || null == (t = i().os) ? true : exports.family) !== "iOS" || Chunk511266
}

function m() {
  return (0, Chunk772848.Z)()
}

function g(e) {
  let t = e.startsWith(_),
    n = e.startsWith(f);
  if (!t && !n) return null;
  try {
    let t = new URL(e).searchParams,
      r = n ? t.get("link") : t.get("deep_link_value");
    if (null == r) return null;
    let i = decodeURIComponent(r),
      o = new URL(i).searchParams,
      a = n ? t.get("utm_source") : t.get("pid"),
      s = {
        utmSource: null != a ? a : true
      };
    for (let [e, t] of o.entries()) s[e] = t;
    return s
  } catch (e) {
    return null
  }
}

function E(e, t) {
  var n, r;
  let {
    utmSource: i,
    androidFallbackLink: o,
    iosFallbackLink: l
  } = t, m = s(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]), g = new URL(e);
  for (let e in m) {
    let t = m[e];
    null != t && g.searchParams.set(e, t)
  }
  let E = encodeURIComponent(g.toString()),
    b = encodeURIComponent((0, a.Z)()),
    y = +!!h(),
    O = null != o ? encodeURIComponent(o) : null,
    v = null != l ? encodeURIComponent(l) : null;
  if ((null == (r = window) || null == (n = r.location) ? true : n.hash) === "#test") {
    let e = "".concat(_, "/").concat(p, "/?deep_link_value=").concat(E, "&pid=").concat(i, "&af_og_description=").concat(b, "&af_force_deeplink=").concat(y);
    return null != O && (e += "&af_android_url=".concat(O)), null != v && (e += "&af_ios_url=".concat(v)), console.log("Redirecting to ".concat(e)), e
  } {
    let e = encodeURIComponent(g.toString()),
      t = "".concat(f, "/?link=").concat(e, "&utm_source=").concat(i, "&apn=").concat(c, "&isi=").concat(u, "&ibi=").concat(d, "&sd=").concat(b, "&efr=").concat(y);
    return null != O && (t += "&afl=".concat(O)), null != v && (t += "&ifl=".concat(v)), t
  }
}