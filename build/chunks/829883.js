/** Chunk was on web.js **/
/** chunk id: 829883, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _b: () => m,
  o: () => f,
  zt: () => _,
  zy: () => d
}), require("./704826.js"), require("./35282.js");
var Chunk633302 = require("./633302.js"),
  Chunk134432 = require("./134432.js"),
  Chunk768581 = require("./768581.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
  c = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
  u = (0, Chunk358085.isAndroid)(),
  d = (e, t) => {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? r.ZP.getByName(r.ZP.convertSurrogateToName(e.unicodeEmoji, false)) : true;
    return {
      customIconSrc: p(e, t),
      unicodeEmoji: null != n ? n : true
    }
  },
  f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.oO)(t * (0, i.x_)()))),
  p = (e, t) => {
    let {
      id: n,
      icon: r
    } = e;
    if (null == r) return;
    if (r.startsWith("data:")) return r;
    let a = o.$k ? "webp" : "png",
      d = "",
      f = "quality=lossless";
    return (null != t && (d = "size=" + (0, i.oO)(t * (0, i.x_)()), f = u ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(l, "/").concat(n, "/").concat(r, ".").concat(a, "?").concat(d).concat(f) : "".concat(c).concat(s.ANM.ROLE_ICON(n, r), "?").concat(d)
  },
  _ = e => e.startsWith(l) || e.startsWith("".concat(c, "/roles")) && e.includes("/icons/"),
  m = (e, t) => {
    var n;
    return (null == t || null == (n = t.tags) ? true : n.subscription_listing_id) != null || e.features.has(s.GuildFeatures.ROLE_ICONS)
  }