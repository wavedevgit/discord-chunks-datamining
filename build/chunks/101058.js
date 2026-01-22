/** Chunk was on web.js **/
/** chunk id: 101058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rh: () => p,
  V7: () => g,
  XB: () => m,
  Xp: () => d,
  yM: () => h
}), require("./747238.js"), require("./228524.js");
var Chunk488428 = require("./488428.js"),
  Chunk776231 = require("./776231.js"),
  Chunk486020 = require("./486020.js"),
  Chunk403362 = require("./403362.js"),
  Chunk392107 = require("./392107.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    storageHash: t,
    canAnimate: n = false,
    allowWebp: r = true
  } = e;
  if (n && (0, a.VI)(t)) return "gif";
  let {
    CDN_HOST: i
  } = window.GLOBAL_ENV;
  return null == i ? "jpg" : r && a.QB ? "webp" : "png"
}

function d(e) {
  let {
    userId: t,
    avatarId: n,
    storageHash: a,
    canAnimate: s = false,
    allowWebp: o = true,
    size: c
  } = e, {
    CDN_HOST: d
  } = window.GLOBAL_ENV, f = null != d ? "https://".concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT, p = u({
    storageHash: a,
    canAnimate: s,
    allowWebp: o
  }), _ = "?".concat(r.stringify({
    size: (0, i.kr)(c * (0, i.mZ)())
  }));
  return "".concat(f).concat(l.Rsh.ARCHIVED_AVATAR(t, n, a, p)).concat(_)
}

function f(e) {
  return null == e ? c.intl.string(c.t.lqaIxI) : e.split(",")[0]
}

function p(e) {
  let {
    filename: t,
    assetOrigin: n = o.E.NEW_ASSET
  } = null != e ? e : {};
  if (n === o.E.ARCHIVED_ASSET) return;
  let r = null != t ? t : c.intl.string(c.t.lqaIxI),
    i = new Date().toLocaleString(c.intl.currentLocale, {
      year: "numeric",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric"
    });
  return c.intl.formatToPlainString(n === o.E.EDITED_ARCHIVED_ASSET ? c.t.eC2sZi : c.t.DYil93, {
    name: r,
    dateTime: i
  })
}

function _(e) {
  switch (e) {
    case "gif":
      return "image/gif";
    case "png":
      return "image/png";
    case "jpg":
      return "image/jpeg";
    default:
      (0, s.xb)(e)
  }
}

function h(e, t) {
  let n = u({
      storageHash: e,
      canAnimate: true,
      allowWebp: false
    }),
    r = f(t);
  return {
    filename: "".concat(r, ".").concat(n),
    type: _(n)
  }
}

function m(e) {
  let {
    assetOrigin: t = o.E.NEW_ASSET,
    imageUri: n,
    description: r,
    originalAsset: i
  } = e;
  switch (t) {
    case o.E.NEW_ASSET:
      return {
        assetOrigin: t, imageUri: n, description: r
      };
    case o.E.EDITED_ARCHIVED_ASSET:
      return {
        assetOrigin: t, imageUri: n, description: r, originalAsset: i
      };
    case o.E.ARCHIVED_ASSET:
      return {
        assetOrigin: t, imageUri: n, originalAsset: i
      };
    default:
      (0, s.xb)(t)
  }
}

function g(e) {
  let {
    userId: t,
    image: n,
    size: r = 80,
    canAnimate: i = true
  } = e;
  return null != n && "string" != typeof n ? n.assetOrigin === o.E.ARCHIVED_ASSET ? d({
    userId: t,
    avatarId: n.originalAsset.id,
    storageHash: n.originalAsset.storageHash,
    size: r,
    canAnimate: i,
    allowWebp: false
  }) : n.imageUri : n
}