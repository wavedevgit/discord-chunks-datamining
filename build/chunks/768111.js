/** Chunk was on 31553 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./539854.js");
var Chunk607550 = require("./607550.js"),
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

function x(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: x,
    mutualGuilds: v
  } = (0, u.Z)(n), g = null == v ? true : v.length, b = (0, d.Z)(n), y = (0, a.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), O = (0, c.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), I = (0, m.Z)(n.id), Z = (0, o.S)({
    location: "useUserProfileModalV2TabBarItems"
  }), P = (0, s.Z)(n.id), N = [], T = n.id === (null == t ? true : t.id), A = r.Z.getFirstWishlistId(n.id), E = (null != A ? l.Z.getWishlistItems(A) : []).length > 0, S = I.length > 0;
  (T && y || S && O) && N.push({
    text: j.intl.string(j.t.laViw8),
    section: h.oh.WIDGETS,
    subsection: true
  }), N.push({
    text: j.intl.string(j.t.chq59f),
    section: h.oh.ACTIVITY,
    subsection: true
  });
  let C = false === n.nsfwAllowed,
    w = i.Z.isFriend(n.id);
  return Z && (T || E && P && (!C || C && w)) && N.push({
    text: j.intl.string(j.t["7lZ31N"]),
    section: h.oh.WISHLIST,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && b && (N.push({
    text: (0, p.Z)(x),
    section: h.oh.MUTUAL_FRIENDS,
    subsection: true
  }), N.push({
    text: (0, f.Z)(g),
    section: h.oh.MUTUAL_GUILDS,
    subsection: true
  })), N
}