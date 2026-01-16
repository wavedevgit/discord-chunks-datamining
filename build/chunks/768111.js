/** Chunk was on 93979 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk370523 = require("./370523.js"),
  Chunk607550 = require("./607550.js"),
  Chunk699516 = require("./699516.js"),
  Chunk621853 = require("./621853.js"),
  Chunk837411 = require("./837411.js"),
  Chunk477448 = require("./477448.js"),
  Chunk585305 = require("./585305.js"),
  Chunk806729 = require("./806729.js"),
  Chunk517157 = require("./517157.js"),
  Chunk708108 = require("./708108.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: h,
    mutualGuilds: j
  } = (0, d.Z)(n), v = null == j ? true : j.length, b = (0, s.Z)(n), g = (0, c.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), I = (0, u.Z)(n.id), y = (0, a.Z)(n.id), Z = [], O = n.id === (null == t ? true : t.id), N = r.Z.getFirstWishlistId(n.id), T = null != N, A = T ? r.Z.getWishlistSettings(n.id, N) : null, P = (T ? i.Z.getWishlistItems(N) : []).length > 0, E = I.length > 0;
  (O && g || E) && Z.push({
    text: x.intl.string(x.t.laViwx),
    section: p.oh.WIDGETS
  }), Z.push({
    text: x.intl.string(x.t.chq59f),
    section: p.oh.ACTIVITY
  });
  let _ = false === n.nsfwAllowed,
    C = o.Z.isFriend(n.id),
    S = (null == A ? true : A.visibility) === l.f.PUBLIC;
  return (O || !O && P && S && y && (!_ || _ && C)) && Z.push({
    text: x.intl.string(x.t["7lZ31J"]),
    section: p.oh.WISHLIST
  }), n.id !== (null == t ? true : t.id) && b && (Z.push({
    text: (0, f.Z)(h),
    section: p.oh.MUTUAL_FRIENDS
  }), Z.push({
    text: (0, m.Z)(v),
    section: p.oh.MUTUAL_GUILDS
  })), Z
}