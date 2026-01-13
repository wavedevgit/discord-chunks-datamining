/** Chunk was on 93979 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./539854.js");
var Chunk370523 = require("./370523.js"),
  Chunk607550 = require("./607550.js"),
  Chunk699516 = require("./699516.js"),
  Chunk621853 = require("./621853.js"),
  Chunk567400 = require("./567400.js"),
  Chunk837411 = require("./837411.js"),
  Chunk477448 = require("./477448.js"),
  Chunk612600 = require("./612600.js"),
  Chunk585305 = require("./585305.js"),
  Chunk806729 = require("./806729.js"),
  Chunk517157 = require("./517157.js"),
  Chunk708108 = require("./708108.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function v(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: v,
    mutualGuilds: b
  } = (0, f.Z)(n), g = null == b ? true : b.length, I = (0, u.Z)(n), y = (0, s.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), Z = (0, d.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), O = (0, m.Z)(n.id), N = (0, a.Y)({
    location: "useUserProfileModalV2TabBarItems"
  }), T = (0, c.Z)(n.id), A = [], P = n.id === (null == t ? true : t.id), E = r.Z.getFirstWishlistId(n.id), C = null != E, _ = C ? r.Z.getWishlistSettings(n.id, E) : null, S = (C ? i.Z.getWishlistItems(E) : []).length > 0, w = O.length > 0;
  (P && y || w && Z) && A.push({
    text: j.intl.string(j.t.laViwx),
    section: h.oh.WIDGETS
  }), A.push({
    text: j.intl.string(j.t.chq59f),
    section: h.oh.ACTIVITY
  });
  let D = false === n.nsfwAllowed,
    L = o.Z.isFriend(n.id),
    R = (null == _ ? true : _.visibility) === l.f.PUBLIC;
  return (P && N || !P && S && R && T && (!D || D && L)) && A.push({
    text: j.intl.string(j.t["7lZ31J"]),
    section: h.oh.WISHLIST
  }), n.id !== (null == t ? true : t.id) && I && (A.push({
    text: (0, p.Z)(v),
    section: h.oh.MUTUAL_FRIENDS
  }), A.push({
    text: (0, x.Z)(g),
    section: h.oh.MUTUAL_GUILDS
  })), A
}