/** Chunk was on web.js **/
/** chunk id: 49485, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => _,
  I_: () => f,
  X7: () => p
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk214958 = require("./214958.js"),
  i = require.n(Chunk214958),
  Chunk835245 = require("./835245.js"),
  Chunk383859 = require("./383859.js");

function s(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = l(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let c = "https://discordapp.onelink.me",
  u = "Hs5r";

function d() {
  var e, t;
  let n = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"],
    r = RegExp("(".concat(n.join("|"), ")"), "ig"),
    a = (null === i() || true === i() || null == (e = i().ua) ? true : e.match(r)) != null,
    o = (null === i() || true === i() ? true : i().name) === "Safari" && !a;
  return (null === i() || true === i() || null == (t = i().os) ? true : t.family) !== "iOS" || o
}

function f() {
  return (0, a.A)()
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
    _ = encodeURIComponent((0, o.A)()),
    h = d() ? "true" : "false",
    m = null != r ? encodeURIComponent(r) : null,
    g = null != i ? encodeURIComponent(i) : null,
    E = "".concat(c, "/").concat(u, "/?deep_link_value=").concat(f, "&pid=").concat(n, "&af_force_deeplink=").concat(h, "&af_og_description=").concat(_, "&af_dp=").concat(p);
  return null != m && (E += "&af_android_url=".concat(m)), null != g && (E += "&af_ios_url=".concat(g)), E
}