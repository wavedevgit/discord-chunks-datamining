/** Chunk was on 31553 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./539854.js");
var Chunk370523 = require("./370523.js"),
  Chunk607550 = require("./607550.js"),
  Chunk699516 = require("./699516.js"),
  Chunk621853 = require("./621853.js"),
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

function v(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: v,
    mutualGuilds: g
  } = (0, m.Z)(n), b = null == g ? true : g.length, y = (0, u.Z)(n), I = (0, c.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), Z = (0, d.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), O = (0, p.Z)(n.id), N = (0, s.S)({
    location: "useUserProfileModalV2TabBarItems"
  }), P = (0, a.Z)(n.id), T = [], A = n.id === (null == t ? true : t.id), E = o.Z.getFirstWishlistId(n.id), S = null != E, C = S ? o.Z.getWishlistSettings(n.id, E) : null, _ = (S ? i.Z.getWishlistItems(E) : []).length > 0, w = O.length > 0;
  (A && I || w && Z) && T.push({
    text: j.intl.string(j.t.laViw8),
    section: x.oh.WIDGETS,
    subsection: true
  }), T.push({
    text: j.intl.string(j.t.chq59f),
    section: x.oh.ACTIVITY,
    subsection: true
  });
  let D = false === n.nsfwAllowed,
    R = r.Z.isFriend(n.id),
    L = (null == C ? true : C.visibility) === l.f.PUBLIC;
  return N && (A || _ && L && P && (!D || D && R)) && T.push({
    text: j.intl.string(j.t["7lZ31N"]),
    section: x.oh.WISHLIST,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && y && (T.push({
    text: (0, f.Z)(v),
    section: x.oh.MUTUAL_FRIENDS,
    subsection: true
  }), T.push({
    text: (0, h.Z)(b),
    section: x.oh.MUTUAL_GUILDS,
    subsection: true
  })), T
}