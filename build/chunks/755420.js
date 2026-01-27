/** Chunk was on 92917 **/
/** chunk id: 755420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FL: () => a,
  z4: () => o
}), require("./896048.js"), require("./321073.js");
var r, Chunk64700 = require("./64700.js"),
  Chunk652215 = require("./652215.js"),
  a = ((r = {}).DESKTOP = "desktop", r.MOBILE = "mobile", r.ANDROID = "android", r.IOS = "ios", r.PLAYSTATION = "playstation", r.XBOX = "xbox", r.VR = "vr", r);
Chunk652215.yTV.DESKTOP, Chunk652215.yTV.ANDROID, Chunk652215.yTV.IOS, Chunk652215.yTV.XBOX, Chunk652215.yTV.PS4, Chunk652215.yTV.PS5, Chunk652215.yTV.SAMSUNG, Chunk652215.yTV.EMBEDDED, Chunk652215.yTV.META_QUEST;
let s = [];

function o(e) {
  let {
    platforms: t,
    currentPlatform: n
  } = e;
  return i.useMemo(() => (function(e) {
    let {
      platforms: t,
      currentPlatform: n
    } = e, r = new Set(t), i = [];
    return null == t || 0 === t.length || null != n && r.has(n) ? s : (r.has(l.yTV.ANDROID) && r.has(l.yTV.IOS) ? i.push("mobile") : r.has(l.yTV.ANDROID) ? i.push("android") : r.has(l.yTV.IOS) && i.push("ios"), (r.has(l.yTV.PS4) || r.has(l.yTV.PS5)) && i.push("playstation"), r.has(l.yTV.XBOX) && i.push("xbox"), r.has(l.yTV.DESKTOP) && i.push("desktop"), r.has(l.yTV.META_QUEST) && i.push("vr"), i)
  })({
    platforms: t,
    currentPlatform: n
  }), [n, t])
}