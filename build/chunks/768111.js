/** Chunk was on 93979 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./539854.js");
var Chunk370523 = require("./370523.js"),
  Chunk607550 = require("./607550.js"),
  Chunk699516 = require("./699516.js"),
  Chunk621853 = require("./621853.js"),
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

function j(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: j,
    mutualGuilds: v
  } = (0, u.Z)(n), b = null == v ? true : v.length, g = (0, d.Z)(n), I = (0, c.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), y = (0, s.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), Z = (0, f.Z)(n.id), O = (0, a.Z)(n.id), N = [], T = n.id === (null == t ? true : t.id), A = r.Z.getFirstWishlistId(n.id), P = null != A, E = P ? r.Z.getWishlistSettings(n.id, A) : null, C = (P ? i.Z.getWishlistItems(A) : []).length > 0, _ = Z.length > 0;
  (T && I || _ && y) && N.push({
    text: h.intl.string(h.t.laViwx),
    section: x.oh.WIDGETS
  }), N.push({
    text: h.intl.string(h.t.chq59f),
    section: x.oh.ACTIVITY
  });
  let S = false === n.nsfwAllowed,
    w = o.Z.isFriend(n.id),
    D = (null == E ? true : E.visibility) === l.f.PUBLIC;
  return (T || !T && C && D && O && (!S || S && w)) && N.push({
    text: h.intl.string(h.t["7lZ31J"]),
    section: x.oh.WISHLIST
  }), n.id !== (null == t ? true : t.id) && g && (N.push({
    text: (0, m.Z)(j),
    section: x.oh.MUTUAL_FRIENDS
  }), N.push({
    text: (0, p.Z)(b),
    section: x.oh.MUTUAL_GUILDS
  })), N
}