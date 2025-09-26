/** Chunk was on 31553 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./539854.js");
var Chunk621853 = require("./621853.js"),
  Chunk46841 = require("./46841.js"),
  Chunk477448 = require("./477448.js"),
  Chunk612600 = require("./612600.js"),
  Chunk585305 = require("./585305.js"),
  Chunk806729 = require("./806729.js"),
  Chunk517157 = require("./517157.js"),
  Chunk708108 = require("./708108.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: f,
    mutualGuilds: h
  } = (0, a.Z)(n), j = null == h ? true : h.length, x = (0, s.Z)(n), v = (0, r.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), g = (0, o.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), b = (0, c.Z)(n.id), y = (0, i.S)({
    location: "useUserProfileModalV2TabBarItems"
  }), O = [], I = n.id === (null == t ? true : t.id), Z = null != l.Z.getFirstWishlistId(n.id), P = b.length > 0;
  return (I && v || P && g) && O.push({
    text: p.intl.string(p.t.laViw8),
    section: m.oh.WIDGETS,
    subsection: true
  }), O.push({
    text: p.intl.string(p.t.chq59f),
    section: m.oh.ACTIVITY,
    subsection: true
  }), y && (Z || I) && O.push({
    text: p.intl.string(p.t["7lZ31N"]),
    section: m.oh.WISHLIST,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && x && (O.push({
    text: (0, d.Z)(f),
    section: m.oh.MUTUAL_FRIENDS,
    subsection: true
  }), O.push({
    text: (0, u.Z)(j),
    section: m.oh.MUTUAL_GUILDS,
    subsection: true
  })), O
}