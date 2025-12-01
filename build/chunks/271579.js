/** Chunk was on web.js **/
/** chunk id: 271579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  WS: () => f,
  ZP: () => _,
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
let c = "https://discordapp.onelink.me",
  u = "Hs5r";

function d() {
  var e, t;
  let n = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"],
    r = RegExp("(".concat(require.join("|"), ")"), "ig"),
    a = (null === i() || true === i() || null == (e = i().ua) ? true : module.match(Chunk264344)) != null,
    o = (null === i() || true === i() ? true : i().name) === "Safari" && !Chunk772848;
  return (null === i() || true === i() || null == (t = i().os) ? true : exports.family) !== "iOS" || Chunk511266
}

function f() {
  return (0, Chunk772848.Z)()
}

function p(e) {
  if (!e.startsWith(c)) return null;
  try {
    let t = new URL(e).searchParams,
      n = t.get("deep_link_value");
    if (null == n) return null;
    let r = decodeURIComponent(n),
      i = new URL(r).searchParams,
      a = t.get("pid"),
      o = {
        utmSource: null != a ? a : true
      };
    for (let [e, t] of i.entries()) o[e] = t;
    return o
  } catch (e) {
    return null
  }
}

function _(e, t) {
  let {
    utmSource: n,
    androidFallbackLink: r,
    iosFallbackLink: i
  } = t, a = s(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]), l = new URL(e);
  for (let e in a) {
    let t = a[e];
    null != t && l.searchParams.set(e, t)
  }
  let f = encodeURIComponent(l.toString()),
    p = encodeURIComponent("discord://app/open#".concat(l.toString())),
    _ = encodeURIComponent((0, o.Z)()),
    m = d() ? "true" : "false",
    h = null != r ? encodeURIComponent(r) : null,
    g = null != i ? encodeURIComponent(i) : null,
    E = "".concat(c, "/").concat(u, "/?deep_link_value=").concat(f, "&pid=").concat(n, "&af_force_deeplink=").concat(m, "&af_og_description=").concat(_, "&af_dp=").concat(p);
  return null != h && (E += "&af_android_url=".concat(h)), null != g && (E += "&af_ios_url=".concat(g)), E
}