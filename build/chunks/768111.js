/** Chunk was on 82008 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js");
var Chunk447448 = require("./447448.js"),
  Chunk585305 = require("./585305.js"),
  Chunk806729 = require("./806729.js"),
  Chunk517157 = require("./517157.js"),
  Chunk708108 = require("./708108.js"),
  Chunk146078 = require("./146078.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    user: n,
    currentUser: t
  } = e, {
    mutualFriendsCount: u,
    mutualGuilds: f
  } = (0, o.Z)(n), m = null == f ? true : f.length, p = (0, l.Z)(n), h = (0, r.k)({
    location: "useUserProfileModalV2TabBarItems"
  }), x = (0, i.Z)(n.id), b = [], j = n.id === (null == t ? true : t.id), g = x.length > 0;
  return h && (g || j) && b.push({
    text: d.intl.string(d.t.laViw8),
    section: a.oh.WIDGETS,
    subsection: true
  }), b.push({
    text: d.intl.string(d.t.chq59f),
    section: a.oh.ACTIVITY,
    subsection: true
  }), n.id !== (null == t ? true : t.id) && p && (b.push({
    text: (0, c.Z)(u),
    section: a.oh.MUTUAL_FRIENDS,
    subsection: true
  }), b.push({
    text: (0, s.Z)(m),
    section: a.oh.MUTUAL_GUILDS,
    subsection: true
  })), b
}