/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.r(t), n.d(t, {
  fetchAssetIds: () => R,
  getAssetFromImageURL: () => S,
  getAssetIds: () => P,
  getAssetImage: () => I,
  getAssets: () => T
}), n(301563), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(512722),
  i = n.n(r),
  o = n(544891),
  a = n(570140),
  s = n(430449),
  l = n(710845),
  c = n(134432),
  u = n(981631);
let d = "mp",
  f = 36e5,
  p = "https://i.scdn.co/image/",
  _ = (e, t, n) => "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(t, "x").concat(n, ".jpg"),
  h = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
  m = e => "https://i.ytimg.com/vi/".concat(e, "/hqdefault_live.jpg"),
  g = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
  E = {
    [u.ABu.SPOTIFY]: {
      deserialize: e => "".concat(p).concat(encodeURIComponent(e)),
      serialize: e => e.split(p)[1]
    },
    [u.ABu.TWITCH]: {
      deserialize: (e, t) => _(encodeURIComponent(e), t[0], t[1]),
      serialize: e => {
        let t = e.match(h);
        return null != t ? t[1] : null
      }
    },
    [u.ABu.YOUTUBE]: {
      deserialize: e => m(encodeURIComponent(e)),
      serialize: e => {
        let t = e.match(g);
        return null != t ? t[1] : null
      }
    },
    [d]: {
      deserialize: e => (i()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured"), new URL(e, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()),
      serialize: e => e
    }
  },
  v = {};

function b(e) {
  return Date.now() - e > f
}
async function y(e) {
  let {
    body: t
  } = await o.tn.get({
    url: u.ANM.APPLICATION_ASSETS(e),
    oldFormErrors: !0,
    rejectWithError: !1
  });
  return a.Z.dispatch({
    type: "APPLICATION_ASSETS_UPDATE",
    applicationId: e,
    assets: t
  }), s.Z.getApplicationAssets(e)
}

function O(e) {
  let t = s.Z.getApplicationAssets(e);
  return null == t || b(t.lastUpdated) ? y(e) : Promise.resolve(t)
}

function S(e, t) {
  let n = E[e].serialize(t);
  return n ? "".concat(e, ":").concat(n.toString()) : null
}

function I(e, t, n) {
  if (null != t && t.includes(":")) {
    let [e, r] = t.split(":");
    if (e === u.ABu.TWITCH) {
      if (null == n || "number" == typeof n) {
        new l.Z("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
        return
      }
      return E[u.ABu.TWITCH].deserialize(r, n)
    }
    return Object.prototype.hasOwnProperty.call(E, e) ? E[e].deserialize(r) : void 0
  }
  if (null == e || null == t) return;
  let r = Array.isArray(n) ? Math.max(...n) : n,
    i = "number" == typeof r ? "?size=".concat((0, c.oO)(r)) : "";
  return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(e, "/").concat(t, ".png").concat(i) : "".concat((0, o.K0)(), "/applications/").concat(e, "/app-assets/").concat(t, ".png").concat(i)
}
async function T(e) {
  let t = await O(e);
  return null == t ? void 0 : t.assets
}
async function N(e, t) {
  let n = t.filter(e => null != e && !Object.prototype.hasOwnProperty.call(v, e) && null == v[e]);
  if (0 === n.length) return;
  let {
    body: r
  } = await o.tn.post({
    url: u.ANM.APPLICATION_EXTERNAL_ASSETS(e),
    body: {
      urls: n
    },
    oldFormErrors: !0,
    rejectWithError: !1
  });
  for (let {
      url: e,
      external_asset_path: t
    }
    of r) v[e] = t
}

function A(e, t) {
  let n = 0;
  if (e.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:"))).length > 0)
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (null == i) continue;
      let o = Object.prototype.hasOwnProperty.call(v, i) ? v[i] : void 0;
      null != o && (t[r] = S(d, o), n++)
    }
  return n === e.length
}

function C(e, t, n, r) {
  let i = !1;
  for (let o = 0; o < e.length; o++) {
    let a = e[o];
    if (null == a || null != t[o]) continue;
    let s = Object.prototype.hasOwnProperty.call(n, a) && n[a];
    if (!s) {
      if (null == r || r <= 0) {
        t[o] = null;
        continue
      }
      i = !0
    }
    t[o] = s.id
  }
  return i
}
async function R(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
  a.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH",
    applicationId: e
  });
  let r = [],
    i = t.filter(e => (null == e ? void 0 : e.startsWith("http:")) || (null == e ? void 0 : e.startsWith("https:")));
  if (i.length > 0 && await N(e, i), A(t, r)) return a.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), r;
  let o = await T(e);
  return (a.Z.dispatch({
    type: "APPLICATION_ASSETS_UPDATE",
    applicationId: e,
    assets: o
  }), C(t, r, o, n)) ? y(e).then(() => R(e, t, n - 1)) : (a.Z.dispatch({
    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
    applicationId: e
  }), r)
}

function P(e, t) {
  var n;
  let r = [];
  if (A(t, r)) return r;
  let i = null === (n = s.Z.getApplicationAssets(e)) || void 0 === n ? void 0 : n.assets;
  return null == i || C(t, r, i), r
}