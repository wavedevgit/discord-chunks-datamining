/** Chunk was on 28883 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: f,
    mutualGuilds: m
  } = (0, i.Z)(n), p = null == m ? true : m.length, x = (0, r.Z)(n), h = (0, o.k)({
    location: "useUserProfileModalV2TabBarItems"
  }), b = (0, l.P)({
    location: "useUserProfileModalV2TabBarItems"
  }), j = (0, c.Z)(n.id), g = [], v = n.id === (null == t ? true : t.id), y = j.length > 0;
  return (v && h || y && b) && g.push({
    text: u.intl.string(u.t.laViw8),
    section: d.oh.WIDGETS,
    subsection: true
  }), g.push({
    text: u.intl.string(u.t.chq59f),
    section: d.oh.ACTIVITY,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && x && (g.push({
    text: (0, a.Z)(f),
    section: d.oh.MUTUAL_FRIENDS,
    subsection: true
  }), g.push({
    text: (0, s.Z)(p),
    section: d.oh.MUTUAL_GUILDS,
    subsection: true
  })), g
}