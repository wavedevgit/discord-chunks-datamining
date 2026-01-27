/** Chunk was on web.js **/
/** chunk id: 663311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk253932 = require("./253932.js"),
  Chunk486020 = require("./486020.js");

function a(e, t) {
  var n, a, o;
  let s;
  if ("u" < typeof Image) return;
  let l = null == (n = e.user) ? true : n.id;
  null == l || "" === l || (null != t && (null == (a = e.guild_member_profile) ? true : a.banner) != null && (s = (0, i.ns)({
    id: l,
    guildId: t,
    banner: e.guild_member_profile.banner,
    canAnimate: r.kt.getSetting(),
    size: 600
  })), (null == e || null == (o = e.user_profile) ? true : o.banner) != null && (s = (0, i.z)({
    id: l,
    banner: e.user_profile.banner,
    canAnimate: r.kt.getSetting(),
    size: 600
  })), null == s || (new Image().src = s))
}