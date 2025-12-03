/** Chunk was on 93979 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./539854.js");
var Chunk370523 = require("./370523.js"),
  Chunk607550 = require("./607550.js"),
  Chunk699516 = require("./699516.js"),
  Chunk621853 = require("./621853.js"),
  Chunk567400 = require("./567400.js"),
  Chunk46841 = require("./46841.js"),
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

function g(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: g,
    mutualGuilds: b
  } = (0, p.Z)(n), I = null == b ? true : b.length, y = (0, m.Z)(n), Z = (0, d.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), _ = (0, u.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), O = (0, f.Z)(n.id), N = (0, s.Y)({
    location: "useUserProfileModalV2TabBarItems"
  }), T = (0, a.S)({
    location: "useUserProfileModalV2TabBarItems"
  }), A = (0, c.Z)(n.id), P = [], E = n.id === (null == t ? true : t.id), C = r.Z.getFirstWishlistId(n.id), S = null != C, w = S ? r.Z.getWishlistSettings(n.id, C) : null, D = (S ? i.Z.getWishlistItems(C) : []).length > 0, R = O.length > 0;
  (E && Z || R && _) && P.push({
    text: j.intl.string(j.t.laViwx),
    section: v.oh.WIDGETS,
    subsection: true
  }), P.push({
    text: j.intl.string(j.t.chq59f),
    section: v.oh.ACTIVITY,
    subsection: true
  });
  let L = false === n.nsfwAllowed,
    M = o.Z.isFriend(n.id),
    B = (null == w ? true : w.visibility) === l.f.PUBLIC;
  return (E && N || !E && T && D && B && A && (!L || L && M)) && P.push({
    text: j.intl.string(j.t["7lZ31J"]),
    section: v.oh.WISHLIST,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && y && (P.push({
    text: (0, x.Z)(g),
    section: v.oh.MUTUAL_FRIENDS,
    subsection: true
  }), P.push({
    text: (0, h.Z)(I),
    section: v.oh.MUTUAL_GUILDS,
    subsection: true
  })), P
}