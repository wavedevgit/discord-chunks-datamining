/** Chunk was on web.js **/
/** chunk id: 561766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cx: () => l,
  Ol: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk981631 = require("./981631.js"),
  a = function(e) {
    return e.DESKTOP = "desktop", e.MOBILE = "mobile", e.ANDROID = "android", e.IOS = "ios", e.PLAYSTATION = "playstation", e.XBOX = "xbox", e
  }({});
Chunk981631.M7m.DESKTOP, Chunk981631.M7m.ANDROID, Chunk981631.M7m.IOS, Chunk981631.M7m.XBOX, Chunk981631.M7m.PS4, Chunk981631.M7m.PS5, Chunk981631.M7m.SAMSUNG, Chunk981631.M7m.EMBEDDED, Chunk981631.M7m.META_QUEST;
let o = [];

function s(e) {
  let {
    platforms: t,
    currentPlatform: n
  } = e, r = new Set(t), a = [];
  return null == t || 0 === t.length || null != n && r.has(n) ? o : (r.has(i.M7m.ANDROID) && r.has(i.M7m.IOS) ? a.push("mobile") : r.has(i.M7m.ANDROID) ? a.push("android") : r.has(i.M7m.IOS) && a.push("ios"), (r.has(i.M7m.PS4) || r.has(i.M7m.PS5)) && a.push("playstation"), r.has(i.M7m.XBOX) && a.push("xbox"), r.has(i.M7m.DESKTOP) && a.push("desktop"), r.has(i.M7m.META_QUEST) && a.push("mobile"), a)
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