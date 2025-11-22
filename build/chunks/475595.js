/** Chunk was on web.js **/
/** chunk id: 475595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dm: () => y,
  N0: () => _,
  Q2: () => b,
  eC: () => p,
  f0: () => T,
  fh: () => g,
  nK: () => v,
  sN: () => I
}), require("./35282.js"), require("./784620.js"), require("./973216.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk887003 = require("./887003.js"),
  Chunk591759 = require("./591759.js"),
  Chunk921948 = require("./921948.js"),
  Chunk509212 = require("./509212.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk380299 = require("./380299.js"),
  Chunk772400 = require("./772400.js");
let d = 3,
  f = /\.([a-zA-Z0-9]+)$/,
  _ = ["video/mp4", "video/webm"];
var p = function(e) {
  return e.HERO = "hero", e.HERO_IMAGE = "hero_image", e.HERO_VIDEO = "hero_video", e.QUEST_BAR_HERO = "quest_bar_hero", e.QUEST_BAR_HERO_VIDEO = "quest_bar_hero_video", e.REWARD = "reward", e.REWARD_IMAGE = "reward_image", e.GAME_TILE = "game_tile", e.LOGO_TYPE = "logo_type", e.COSPONSOR_LOGO_TYPE = "cosponsor_logo_type", e
}({});

function h(e, t, n) {
  let r = b(e, t, n),
    i = y(t),
    a = null != i && _.includes(i);
  return {
    url: r,
    mimetype: i,
    isAnimated: a
  }
}

function m(e, t) {
  return null != e ? e : t
}

function g(e, t, n, i) {
  var a, s;
  let l, d = false;
  switch (t) {
    case "hero":
      l = m(e.config.assets.heroVideo, e.config.assets.hero);
      break;
    case "hero_image":
      l = e.config.assets.hero;
      break;
    case "hero_video": {
      let t = e.config.assets.heroVideo,
        n = "videoMetadata" in e.config ? null == (a = e.config.videoMetadata) ? true : a.assets.questHomeVideo : null,
        r = null != t ? t : n;
      if (null == r) return null;
      l = r;
      break
    }
    case "quest_bar_hero":
      l = m(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
      break;
    case "quest_bar_hero_video": {
      let t = e.config.assets.questBarHeroVideo,
        n = "videoMetadata" in e.config ? null == (s = e.config.videoMetadata) ? true : s.assets.questBarPreviewVideo : null,
        r = null != t ? t : n;
      if (null == r) return null;
      l = r;
      break
    }
    case "reward": {
      let t = (0, o.hF)(e);
      if (t.type === r.w.VIRTUAL_CURRENCY) return i ? {
        url: u.Z,
        mimetype: "video/mp4",
        isAnimated: true
      } : {
        url: c.Z,
        mimetype: "video/webm",
        isAnimated: true
      };
      l = m(t.assetVideo, t.asset);
      break
    }
    case "reward_image": {
      let t = (0, o.hF)(e);
      if (t.type === r.w.VIRTUAL_CURRENCY) return null;
      l = t.asset;
      break
    }
    case "game_tile":
      "dark" === n && null != e.config.assets.gameTileDark ? l = e.config.assets.gameTileDark : "light" === n && null != e.config.assets.gameTileLight ? l = e.config.assets.gameTileLight : (l = e.config.assets.gameTile, d = true);
      break;
    case "logo_type":
      "dark" === n && null != e.config.assets.logotypeDark ? l = e.config.assets.logotypeDark : "light" === n && null != e.config.assets.logotypeLight ? l = e.config.assets.logotypeLight : (l = e.config.assets.logotype, d = true);
      break;
    case "cosponsor_logo_type":
      if (null == e.config.cosponsorMetadata) return null;
      "dark" === n && null != e.config.cosponsorMetadata.logotypeDark ? l = e.config.cosponsorMetadata.logotypeDark : "light" === n && null != e.config.cosponsorMetadata.logotypeLight ? l = e.config.cosponsorMetadata.logotypeLight : (l = e.config.cosponsorMetadata.logotype, d = true)
  }
  return h(e.id, l, {
    theme: d ? n : true
  })
}

function E(e) {
  var t;
  return null != (t = e.split("?", 1).at(0)) ? t : e
}

function b(e, t, n) {
  if (t.startsWith("blob:")) return E(t);
  let r = s.HO;
  return t.includes("/") ? (r = s.tD, "".concat(r).concat(t)) : "".concat(r).concat(e).concat((null == n ? true : n.theme) != null ? "/".concat(n.theme) : "", "/").concat(t)
}

function y(e) {
  var t, n, r;
  if (e.startsWith("blob:")) {
    let t = null != (r = new URL(e).searchParams.get("mimetype")) ? r : true;
    return null != t ? decodeURIComponent(t) : null
  }
  switch (null == (n = f.exec(e)) || null == (t = n[1]) ? true : t.toLowerCase()) {
    case "webm":
      return "video/webm";
    case "mp4":
      return "video/mp4";
    case "webp":
      return "image/webp";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "png":
      return "image/png";
    case "gif":
      return "image/gif";
    case "svg":
      return "image/svg+xml";
    case "txt":
      return "text/plain";
    case "vtt":
      return "text/vtt";
    case "ts":
      return "video/mp2t";
    case "m3u8":
      return "application/x-mpegURL";
    default:
      return null
  }
}

function O(e) {
  return Math.min(Math.ceil(e), l.hiG)
}

function v(e, t) {
  let n = (0, a.Z)();
  return n < d ? {
    width: e,
    height: t
  } : {
    width: e * n,
    height: t * n
  }
}

function I(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  if (e.startsWith("blob:")) return e;
  let n = i.Z.toURLSafe(e);
  return null == n ? e : (null != t.format && n.searchParams.append("format", t.format), null != t.width && n.searchParams.append("width", "".concat(O(t.width))), null != t.height && n.searchParams.append("height", "".concat(O(t.height))), n.toString())
}

function T(e, t) {
  if (e.startsWith("blob:")) return e;
  let n = i.Z.toURLSafe(e);
  return null == n ? null : (n.searchParams.append("format", "webp"), null != t && (n.searchParams.append("width", "".concat(O(t.width))), n.searchParams.append("height", "".concat(O(t.height)))), n.toString())
}