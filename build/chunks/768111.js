/** Chunk was on 93979 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: j,
    mutualGuilds: g
  } = (0, m.Z)(n), I = null == g ? true : g.length, y = (0, f.Z)(n), Z = (0, d.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), O = (0, u.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), N = (0, p.Z)(n.id), T = (0, a.Y)({
    location: "useUserProfileModalV2TabBarItems"
  }), A = (0, c.S)({
    location: "useUserProfileModalV2TabBarItems"
  }), P = (0, s.Z)(n.id), E = [], _ = n.id === (null == t ? true : t.id), C = r.Z.getFirstWishlistId(n.id), S = null != C, w = S ? r.Z.getWishlistSettings(n.id, C) : null, D = (S ? i.Z.getWishlistItems(C) : []).length > 0, L = N.length > 0;
  (_ && Z || L && O) && E.push({
    text: v.intl.string(v.t.laViwx),
    section: b.oh.WIDGETS,
    subsection: true
  }), E.push({
    text: v.intl.string(v.t.chq59f),
    section: b.oh.ACTIVITY,
    subsection: true
  });
  let R = false === n.nsfwAllowed,
    M = o.Z.isFriend(n.id),
    B = (null == w ? true : w.visibility) === l.f.PUBLIC;
  return (_ && T || !_ && A && D && B && P && (!R || R && M)) && E.push({
    text: v.intl.string(v.t["7lZ31J"]),
    section: b.oh.WISHLIST,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && y && (E.push({
    text: (0, x.Z)(j),
    section: b.oh.MUTUAL_FRIENDS,
    subsection: true
  }), E.push({
    text: (0, h.Z)(I),
    section: b.oh.MUTUAL_GUILDS,
    subsection: true
  })), E
}