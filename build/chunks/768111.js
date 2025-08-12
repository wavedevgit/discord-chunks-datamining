/** Chunk was on 11776 **/
/** chunk id: 768111, original params: e,t,n (module,exports,require) **/
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
    user: t,
    currentUser: n
  } = e, {
    mutualFriendsCount: u,
    mutualGuilds: f
  } = (0, i.Z)(t), p = null == f ? true : f.length, m = (0, l.Z)(t), g = (0, r.k)({
    location: "useUserProfileModalV2TabBarItems"
  }), b = (0, o.Z)(t.id), j = [], x = t.id === (null == n ? true : n.id), h = b.length > 0;
  return g && (h || x) && j.push({
    text: d.intl.string(d.t.laViw8),
    section: s.oh.WIDGETS,
    subsection: true
  }), j.push({
    text: d.intl.string(d.t.chq59f),
    section: s.oh.ACTIVITY,
    subsection: true
  }), t.id !== (null == n ? true : n.id) && m && (j.push({
    text: (0, a.Z)(u),
    section: s.oh.MUTUAL_FRIENDS,
    subsection: true
  }), j.push({
    text: (0, c.Z)(p),
    section: s.oh.MUTUAL_GUILDS,
    subsection: true
  })), j
}