/** Chunk was on web.js **/
/** chunk id: 643879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SD: () => g,
  Z1: () => p,
  cN: () => h,
  fD: () => d,
  mh: () => m
}), require("./35282.js"), require("./953529.js");
var Chunk664751 = require("./664751.js"),
  Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk72703 = require("./72703.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    storageHash: t,
    canAnimate: n = false,
    allowWebp: r = true
  } = e;
  if (n && (0, o.xR)(t)) return "gif";
  let {
    CDN_HOST: i
  } = window.GLOBAL_ENV;
  return null == i ? "jpg" : r && o.$k ? "webp" : "png"
}

function d(e) {
  let {
    userId: t,
    avatarId: n,
    storageHash: o,
    canAnimate: a = false,
    allowWebp: s = true,
    size: c
  } = e, {
    CDN_HOST: d
  } = window.GLOBAL_ENV, f = null != d ? "https://".concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT, p = u({
    storageHash: o,
    canAnimate: a,
    allowWebp: s
  }), _ = "?".concat(r.stringify({
    size: (0, i.oO)(c * (0, i.x_)())
  }));
  return "".concat(f).concat(l.ANM.ARCHIVED_AVATAR(t, n, o, p)).concat(_)
}

function f(e) {
  return null == e ? c.intl.string(c.t.lqaIxI) : e.split(",")[0]
}

function p(e) {
  let {
    filename: t,
    assetOrigin: n = s.q.NEW_ASSET
  } = null != e ? e : {};
  if (n === s.q.ARCHIVED_ASSET) return;
  let r = null != t ? t : c.intl.string(c.t.lqaIxI),
    i = new Date().toLocaleString(c.intl.currentLocale, {
      year: "numeric",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric"
    });
  return c.intl.formatToPlainString(n === s.q.EDITED_ARCHIVED_ASSET ? c.t.eC2sZi : c.t.DYil93, {
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
      (0, a.vE)(e)
  }
}

function m(e, t) {
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

function h(e) {
  let {
    assetOrigin: t = s.q.NEW_ASSET,
    imageUri: n,
    description: r,
    originalAsset: i
  } = e;
  switch (t) {
    case s.q.NEW_ASSET:
      return {
        assetOrigin: t, imageUri: n, description: r
      };
    case s.q.EDITED_ARCHIVED_ASSET:
      return {
        assetOrigin: t, imageUri: n, description: r, originalAsset: i
      };
    case s.q.ARCHIVED_ASSET:
      return {
        assetOrigin: t, imageUri: n, originalAsset: i
      };
    default:
      (0, a.vE)(t)
  }
}

function g(e) {
  let {
    userId: t,
    image: n,
    size: r = 80,
    canAnimate: i = true
  } = e;
  return null != n && "string" != typeof n ? n.assetOrigin === s.q.ARCHIVED_ASSET ? d({
    userId: t,
    avatarId: n.originalAsset.id,
    storageHash: n.originalAsset.storageHash,
    size: r,
    canAnimate: i,
    allowWebp: false
  }) : n.imageUri : n
}