/** Chunk was on web.js **/
/** chunk id: 376304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XD: () => _,
  fm: () => h,
  sE: () => d,
  ux: () => f
}), require("./747238.js"), require("./812715.js");
var Chunk7584 = require("./7584.js"),
  Chunk776231 = require("./776231.js"),
  Chunk486020 = require("./486020.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");
let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  c = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  u = (0, Chunk723702.isAndroid)(),
  d = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? r.Ay.getByName(r.Ay.convertSurrogateToName(e.unicodeEmoji, false)) : true;
    return {
      customIconSrc: p(e, t),
      unicodeEmoji: null != n ? n : true
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.kr)(t * (0, i.mZ)()))),
  p = (e, t) => {
    let {
      id: n,
      icon: r
    } = e;
    if (null == r) return;
    if (r.startsWith("data:")) return r;
    let o = a.QB ? "webp" : "png",
      d = "",
      f = "quality=lossless";
    return (null != t && (d = "size=" + (0, i.kr)(t * (0, i.mZ)()), f = u ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(r, ".").concat(o, "?").concat(d).concat(f) : "".concat(c).concat(s.Rsh.ROLE_ICON(n, r), "?").concat(d)
  },
  _ = e => e.startsWith(l) || e.startsWith("".concat(c, "/roles")) && e.includes("/icons/"),
  h = (e, t) => {
    var n;
    return (null == t || null == (n = t.tags) ? true : n.subscription_listing_id) != null || e.features.has(s.GuildFeatures.ROLE_ICONS)
  }