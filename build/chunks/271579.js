/** Chunk was on web.js **/
/** chunk id: 271579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WS: () => _,
  ZP: () => h,
  zS: () => p
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk264344 = require("./264344.js"),
  i = require.n(Chunk264344),
  Chunk772848 = require("./772848.js"),
  Chunk511266 = require("./511266.js");

function s(e, t) {
  if (null == e) return {};
  var n, r, i = l(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let c = "https://discordapp.page.link",
  u = "https://discordapp.onelink.me",
  d = "Hs5r";

function f() {
  var e, t;
  let n = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"],
    r = RegExp("(".concat(require.join("|"), ")"), "ig"),
    a = (null === i() || true === i() || null == (e = i().ua) ? true : module.match(Chunk264344)) != null,
    o = (null === i() || true === i() ? true : i().name) === "Safari" && !Chunk772848;
  return (null === i() || true === i() || null == (t = i().os) ? true : exports.family) !== "iOS" || Chunk511266
}

function _() {
  return (0, Chunk772848.Z)()
}

function p(e) {
  let t = e.startsWith(u),
    n = e.startsWith(c);
  if (!t && !n) return null;
  try {
    let t = new URL(e).searchParams,
      r = n ? t.get("link") : t.get("deep_link_value");
    if (null == r) return null;
    let i = decodeURIComponent(r),
      a = new URL(i).searchParams,
      o = n ? t.get("utm_source") : t.get("pid"),
      s = {
        utmSource: null != o ? o : true
      };
    for (let [e, t] of a.entries()) s[e] = t;
    return s
  } catch (e) {
    return null
  }
}

function h(e, t) {
  let {
    utmSource: n,
    androidFallbackLink: r,
    iosFallbackLink: i
  } = t, a = s(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]), l = new URL(e);
  for (let e in a) {
    let t = a[e];
    null != t && l.searchParams.set(e, t)
  }
  let c = encodeURIComponent(l.toString()),
    _ = encodeURIComponent("discord://app/open#".concat(l.toString())),
    p = encodeURIComponent((0, o.Z)()),
    h = f() ? "true" : "false",
    m = null != r ? encodeURIComponent(r) : null,
    g = null != i ? encodeURIComponent(i) : null,
    E = "".concat(u, "/").concat(d, "/?deep_link_value=").concat(c, "&pid=").concat(n, "&af_force_deeplink=").concat(h, "&af_og_description=").concat(p, "&af_dp=").concat(_);
  return null != m && (E += "&af_android_url=".concat(m)), null != g && (E += "&af_ios_url=".concat(g)), E
}