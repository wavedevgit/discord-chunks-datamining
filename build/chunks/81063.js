/** Chunk was on web.js **/
/** chunk id: 81063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vh: () => T,
  f: () => S,
  hR: () => P,
  xF: () => I
}), require("./35282.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk430449 = require("./430449.js"),
  Chunk710845 = require("./710845.js"),
  Chunk134432 = require("./134432.js"),
  Chunk981631 = require("./981631.js");
let d = "mp",
  f = 36e5,
  p = "https://i.scdn.co/image/",
  _ = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
  m = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
  h = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
  g = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
  E = {
    [Chunk981631.ABu.SPOTIFY]: {
      deserialize: e => "".concat(p).concat(encodeURIComponent(e)),
      serialize: e => e.split(p)[1]
    },
    [Chunk981631.ABu.TWITCH]: {
      deserialize: (e, t) => _(encodeURIComponent(e), t[0], t[1]),
      serialize: e => {
        let t = e.match(m);
        return null != t ? t[1] : null
      }
    },
    [Chunk981631.ABu.YOUTUBE]: {
      deserialize: e => h(encodeURIComponent(e)),
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
          o = e.toLowerCase().endsWith(".avif");
        return n && t.searchParams.set("format", "webp"), (n || r || o) && t.searchParams.set("animated", "true"), t.toString()
      },
      serialize: e => e
    }
  },
  b = {};

function y(e) {
  return Date.now() - e > f
}
async function O(e) {
  let {
    body: t
  } = await o.tn.get({
    url: u.ANM.APPLICATION_ASSETS(e),
    oldFormErrors: true,
    rejectWithError: false
  });
  return a.Z.dispatch({
    type: "APPLICATION_ASSETS_UPDATE",
    applicationId: e,
    assets: t
  }), s.Z.getApplicationAssets(e)
}

function v(e) {
  let t = s.Z.getApplicationAssets(e);
  return null == t || y(t.lastUpdated) ? O(e) : Promise.resolve(t)
}

function S(e, t) {
  let n = E[e].serialize(t);
  return n ? "".concat(e, ":").concat(n.toString()) : null
}

function I(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "png";
  if (null != t && t.includes(":")) {
    let [e, r] = t.split(":");
    return e === u.ABu.TWITCH ? null == n || "number" == typeof n ? void new l.Z("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch") : E[u.ABu.TWITCH].deserialize(r, n) : Object.prototype.hasOwnProperty.call(E, e) ? E[e].deserialize(r) : true
  }
  if (null == e || null == t) return;
  let i = Array.isArray(n) ? Math.max(...n) : n,
    a = "number" == typeof i ? "?size=".concat((0, c.oO)(i)) : "";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".").concat(r).concat(a) : "".concat((0, o.K0)(), "/applications/").concat(e, "/app-assets/").concat(t, ".").concat(r).concat(a)
}
async function T(e) {
  let t = await v(e);
  return null == t ? true : t.assets
}
async function C(e, t) {
  let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(b, e) && null == b[e]);
  if (0 === n.length) return;
  let {
    body: r
  } = await o.tn.post({
    url: u.ANM.APPLICATION_EXTERNAL_ASSETS(e),
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
    of r) b[e] = t
}

function A(e, t) {
  let n = 0;
  if (e.filter(e => (null == e ? true : e.startsWith("http:")) || (null == e ? true : e.startsWith("https:"))).length > 0)
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (null == i) continue;
      let o = Object.prototype.hasOwnProperty.call(b, i) ? b[i] : true;
      null != o && (t[r] = S(d, o), n++)
    }
  return n === e.length
}

function N(e, t, n, r) {
  let i = false;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    if (null == a || null != t[o]) continue;
    let s = Object.prototype.hasOwnProperty.call(n, a) && n[a];
    if (!s) {
      if (null == r || r <= 0) {
        t[o] = null;
        continue
      }
      i = true
    }
    t[o] = s.id
  }
  return i
}
async function P(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 1;
  a.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH",
    applicationId: e
  });
  let r = [],
    i = t.filter(e => (null == e ? true : e.startsWith("http:")) || (null == e ? true : e.startsWith("https:")));
  if (i.length > 0 && await C(e, i), A(t, r)) return a.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), r;
  let o = await T(e);
  return (a.Z.dispatch({
    type: "APPLICATION_ASSETS_UPDATE",
    applicationId: e,
    assets: o
  }), N(t, r, o, n)) ? O(e).then(() => P(e, t, n - 1)) : (a.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), r)
}