/** Chunk was on web.js **/
/** chunk id: 139675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Di: () => A,
  RG: () => R,
  Y: () => S,
  uD: () => I
}), require("./747238.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk264782 = require("./264782.js"),
  Chunk626584 = require("./626584.js"),
  Chunk776231 = require("./776231.js"),
  Chunk652215 = require("./652215.js");
let d = "mp",
  f = 36e5,
  p = "https://i.scdn.co/image/",
  _ = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
  h = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
  m = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
  g = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
  E = {
    [Chunk652215.fg2.SPOTIFY]: {
      deserialize: e => "".concat(p).concat(encodeURIComponent(e)),
      serialize: e => e.split(p)[1]
    },
    [Chunk652215.fg2.TWITCH]: {
      deserialize: (e, t) => _(encodeURIComponent(e), t[0], t[1]),
      serialize: e => {
        let t = e.match(h);
        return null != t ? t[1] : null
      }
    },
    [Chunk652215.fg2.YOUTUBE]: {
      deserialize: e => m(encodeURIComponent(e)),
      serialize: e => {
        let t = e.match(g);
        return null != t ? t[1] : null
      }
    },
    [d]: {
      deserialize: e => {
        i()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
        let t = new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT),
          n = e.toLowerCase().endsWith(".gif"),
          r = e.toLowerCase().endsWith(".webp"),
          a = e.toLowerCase().endsWith(".avif");
        return n && t.searchParams.set("format", "webp"), (n || r || a) && t.searchParams.set("animated", "true"), t.toString()
      },
      serialize: e => e
    }
  },
  y = {};

function b(e) {
  return Date.now() - e > f
}
async function O(e) {
  let {
    body: t
  } = await a.Bo.get({
    url: u.Rsh.APPLICATION_ASSETS(e),
    oldFormErrors: true,
    rejectWithError: false
  });
  return s.h.dispatch({
    type: "APPLICATION_ASSETS_UPDATE",
    applicationId: e,
    assets: t
  }), o.A.getApplicationAssets(e)
}

function v(e) {
  let t = o.A.getApplicationAssets(e);
  return null == t || b(t.lastUpdated) ? O(e) : Promise.resolve(t)
}

function A(e, t) {
  let n = E[e].serialize(t);
  return n ? "".concat(e, ":").concat(n.toString()) : null
}

function I(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "png";
  if (null != t && t.includes(":")) {
    let [e, r] = t.split(":");
    return e === u.fg2.TWITCH ? null == n || "number" == typeof n ? void new l.A("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch") : E[u.fg2.TWITCH].deserialize(r, n) : Object.prototype.hasOwnProperty.call(E, e) ? E[e].deserialize(r) : true
  }
  if (null == e || null == t) return;
  let i = Array.isArray(n) ? Math.max(...n) : n,
    s = "number" == typeof i ? "?size=".concat((0, c.kr)(i)) : "";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".").concat(r).concat(s) : "".concat((0, a.TP)(), "/applications/").concat(e, "/app-assets/").concat(t, ".").concat(r).concat(s)
}
async function S(e) {
  let t = await v(e);
  return null == t ? true : t.assets
}
async function T(e, t) {
  let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(y, e) && null == y[e]);
  if (0 === n.length) return;
  let {
    body: r
  } = await a.Bo.post({
    url: u.Rsh.APPLICATION_EXTERNAL_ASSETS(e),
    body: {
      urls: n
    },
    oldFormErrors: true,
    rejectWithError: false
  });
  for (let {
      url: e,
      external_asset_path: t
    }
    of r) y[e] = t
}

function C(e, t) {
  let n = 0;
  if (e.filter(e => (null == e ? true : e.startsWith("http:")) || (null == e ? true : e.startsWith("https:"))).length > 0)
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (null == i) continue;
      let a = Object.prototype.hasOwnProperty.call(y, i) ? y[i] : true;
      null != a && (t[r] = A(d, a), n++)
    }
  return n === e.length
}

function N(e, t, n, r) {
  let i = false;
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    if (null == s || null != t[a]) continue;
    let o = Object.prototype.hasOwnProperty.call(n, s) && n[s];
    if (!o) {
      if (null == r || r <= 0) {
        t[a] = null;
        continue
      }
      i = true
    }
    t[a] = o.id
  }
  return i
}
async function R(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1;
  s.h.dispatch({
    type: "APPLICATION_ASSETS_FETCH",
    applicationId: e
  });
  let r = [],
    i = t.filter(e => (null == e ? true : e.startsWith("http:")) || (null == e ? true : e.startsWith("https:")));
  if (i.length > 0 && await T(e, i), C(t, r)) return s.h.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), r;
  let a = await S(e);
  return (s.h.dispatch({
    type: "APPLICATION_ASSETS_UPDATE",
    applicationId: e,
    assets: a
  }), N(t, r, a, n)) ? O(e).then(() => R(e, t, n - 1)) : (s.h.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), r)
}