/** Chunk was on 66866 **/
/** chunk id: 561766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cx: () => s,
  Ol: () => a
}), require("./388685.js"), require("./539854.js");
var r, Chunk73800 = require("./73800.js"),
  Chunk981631 = require("./981631.js"),
  a = ((r = {}).DESKTOP = "desktop", r.MOBILE = "mobile", r.ANDROID = "android", r.IOS = "ios", r.PLAYSTATION = "playstation", r.XBOX = "xbox", r);
let o = [];

function s(e) {
  let {
    platforms: t,
    currentPlatform: n
  } = e;
  return i.useMemo(() => (function(e) {
    let {
      platforms: t,
      currentPlatform: n
    } = e, r = new Set(t), i = [];
    return null == t || 0 === t.length || null != n && r.has(n) ? o : (r.has(l.M7m.ANDROID) && r.has(l.M7m.IOS) ? i.push("mobile") : r.has(l.M7m.ANDROID) ? i.push("android") : r.has(l.M7m.IOS) && i.push("ios"), (r.has(l.M7m.PS4) || r.has(l.M7m.PS5)) && i.push("playstation"), r.has(l.M7m.XBOX) && i.push("xbox"), r.has(l.M7m.DESKTOP) && i.push("desktop"), i)
  })({
    platforms: t,
    currentPlatform: n
  }), [n, t])
}