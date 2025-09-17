/** Chunk was on 72164 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk447448 = require("./447448.js"),
  Chunk461133 = require("./461133.js"),
  Chunk46841 = require("./46841.js"),
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
    mutualGuilds: m
  } = (0, c.Z)(n), x = null == m ? true : m.length, b = (0, i.Z)(n), h = (0, o.k)({
    location: "useUserProfileModalV2TabBarItems"
  }), g = (0, r.P)({
    location: "useUserProfileModalV2TabBarItems"
  }), j = (0, a.Z)(n.id), v = (0, l.S)({
    location: "useUserProfileModalV2TabBarItems"
  }), y = [], _ = n.id === (null == t ? true : t.id), I = j.length > 0;
  return (_ && h || I && g) && y.push({
    text: f.intl.string(f.t.laViw8),
    section: u.oh.WIDGETS,
    subsection: true
  }), y.push({
    text: f.intl.string(f.t.chq59f),
    section: u.oh.ACTIVITY,
    subsection: true
  }), v && y.push({
    text: f.intl.string(f.t["7lZ31N"]),
    section: u.oh.WISHLIST,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && b && (y.push({
    text: (0, s.Z)(p),
    section: u.oh.MUTUAL_FRIENDS,
    subsection: true
  }), y.push({
    text: (0, d.Z)(x),
    section: u.oh.MUTUAL_GUILDS,
    subsection: true
  })), y
}