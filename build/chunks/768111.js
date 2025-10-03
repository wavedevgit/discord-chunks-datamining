/** Chunk was on 31553 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: j,
    mutualGuilds: v
  } = (0, u.Z)(n), g = null == v ? true : v.length, b = (0, d.Z)(n), y = (0, a.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), I = (0, c.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), Z = (0, m.Z)(n.id), O = (0, o.S)({
    location: "useUserProfileModalV2TabBarItems"
  }), N = (0, s.Z)(n.id), T = [], P = n.id === (null == t ? true : t.id), A = r.Z.getFirstWishlistId(n.id), E = (null != A ? l.Z.getWishlistItems(A) : []).length > 0, S = Z.length > 0;
  (P && y || S && I) && T.push({
    text: x.intl.string(x.t.laViw8),
    section: h.oh.WIDGETS,
    subsection: true
  }), T.push({
    text: x.intl.string(x.t.chq59f),
    section: h.oh.ACTIVITY,
    subsection: true
  });
  let C = false === n.nsfwAllowed,
    _ = i.Z.isFriend(n.id);
  return O && (P || E && N && (!C || C && _)) && T.push({
    text: x.intl.string(x.t["7lZ31N"]),
    section: h.oh.WISHLIST,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && b && (T.push({
    text: (0, p.Z)(j),
    section: h.oh.MUTUAL_FRIENDS,
    subsection: true
  }), T.push({
    text: (0, f.Z)(g),
    section: h.oh.MUTUAL_GUILDS,
    subsection: true
  })), T
}