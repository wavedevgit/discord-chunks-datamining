/** Chunk was on web.js **/
/** chunk id: 120569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk695346 = require("./695346.js"),
  Chunk768581 = require("./768581.js");

function o(e, t) {
  var n, o, a;
  let s;
  if ("undefined" == typeof Image) return;
  let l = null == (n = e.user) ? true : n.id;
  if (null != l && "" !== l) null != t && (null == (o = e.guild_member_profile) ? true : o.banner) != null && (s = (0, i.tp)({
    id: l,
    guildId: t,
    banner: e.guild_member_profile.banner,
    canAnimate: r.QK.getSetting(),
    size: 600
  })), (null == e || null == (a = e.user_profile) ? true : a.banner) != null && (s = (0, i.aN)({
    id: l,
    banner: e.user_profile.banner,
    canAnimate: r.QK.getSetting(),
    size: 600
  })), null != s && (new Image().src = s)
}