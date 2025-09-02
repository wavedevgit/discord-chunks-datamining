/** Chunk was on 31553 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var Chunk447448 = require("./447448.js"),
  Chunk461133 = require("./461133.js"),
  Chunk585305 = require("./585305.js"),
  Chunk806729 = require("./806729.js"),
  Chunk517157 = require("./517157.js"),
  Chunk708108 = require("./708108.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: m,
    mutualGuilds: p
  } = (0, o.Z)(n), f = null == p ? true : p.length, h = (0, i.Z)(n), j = (0, l.k)({
    location: "useUserProfileModalV2TabBarItems"
  }), x = (0, r.P)({
    location: "useUserProfileModalV2TabBarItems"
  }), v = (0, s.Z)(n.id), g = [], b = n.id === (null == t ? true : t.id), y = v.length > 0;
  return (b && j || y && x) && g.push({
    text: u.intl.string(u.t.laViw8),
    section: d.oh.WIDGETS,
    subsection: true
  }), g.push({
    text: u.intl.string(u.t.chq59f),
    section: d.oh.ACTIVITY,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && h && (g.push({
    text: (0, a.Z)(m),
    section: d.oh.MUTUAL_FRIENDS,
    subsection: true
  }), g.push({
    text: (0, c.Z)(f),
    section: d.oh.MUTUAL_GUILDS,
    subsection: true
  })), g
}