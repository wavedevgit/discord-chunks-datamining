/** Chunk was on web.js **/
/** chunk id: 561766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cx: () => l,
  Ol: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk981631 = require("./981631.js"),
  o = function(e) {
    return e.DESKTOP = "desktop", e.MOBILE = "mobile", e.ANDROID = "android", e.IOS = "ios", e.PLAYSTATION = "playstation", e.XBOX = "xbox", e.VR = "vr", e
  }({});
Chunk981631.M7m.DESKTOP, Chunk981631.M7m.ANDROID, Chunk981631.M7m.IOS, Chunk981631.M7m.XBOX, Chunk981631.M7m.PS4, Chunk981631.M7m.PS5, Chunk981631.M7m.SAMSUNG, Chunk981631.M7m.EMBEDDED, Chunk981631.M7m.META_QUEST;
let a = [];

function s(e) {
  let {
    platforms: t,
    currentPlatform: n
  } = e, r = new Set(t), o = [];
  return null == t || 0 === t.length || null != n && r.has(n) ? a : (r.has(i.M7m.ANDROID) && r.has(i.M7m.IOS) ? o.push("mobile") : r.has(i.M7m.ANDROID) ? o.push("android") : r.has(i.M7m.IOS) && o.push("ios"), (r.has(i.M7m.PS4) || r.has(i.M7m.PS5)) && o.push("playstation"), r.has(i.M7m.XBOX) && o.push("xbox"), r.has(i.M7m.DESKTOP) && o.push("desktop"), r.has(i.M7m.META_QUEST) && o.push("vr"), o)
}

function l(e) {
  let {
    platforms: t,
    currentPlatform: n
  } = e;
  return r.useMemo(() => s({
    platforms: t,
    currentPlatform: n
  }), [n, t])
}