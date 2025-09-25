/** Chunk was on 31553 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk46841 = require("./46841.js"),
  Chunk477448 = require("./477448.js"),
  Chunk612600 = require("./612600.js"),
  Chunk585305 = require("./585305.js"),
  Chunk806729 = require("./806729.js"),
  Chunk517157 = require("./517157.js"),
  Chunk708108 = require("./708108.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: p,
    mutualGuilds: f
  } = (0, s.Z)(n), h = null == f ? true : f.length, j = (0, o.Z)(n), x = (0, i.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), v = (0, r.Z)({
    location: "useUserProfileModalV2TabBarItems"
  }), g = (0, a.Z)(n.id), b = (0, l.S)({
    location: "useUserProfileModalV2TabBarItems"
  }), y = [], O = n.id === (null == t ? true : t.id), I = g.length > 0;
  return (O && x || I && v) && y.push({
    text: m.intl.string(m.t.laViw8),
    section: u.oh.WIDGETS,
    subsection: true
  }), y.push({
    text: m.intl.string(m.t.chq59f),
    section: u.oh.ACTIVITY,
    subsection: true
  }), b && y.push({
    text: m.intl.string(m.t["7lZ31N"]),
    section: u.oh.WISHLIST,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && j && (y.push({
    text: (0, c.Z)(p),
    section: u.oh.MUTUAL_FRIENDS,
    subsection: true
  }), y.push({
    text: (0, d.Z)(h),
    section: u.oh.MUTUAL_GUILDS,
    subsection: true
  })), y
}