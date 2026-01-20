/** Chunk was on 93979 **/
/** chunk id: 768111, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./539854.js");
var Chunk370523 = require("./370523.js"),
  Chunk607550 = require("./607550.js"),
  Chunk699516 = require("./699516.js"),
  Chunk621853 = require("./621853.js"),
  Chunk837411 = require("./837411.js"),
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
    mutualGuilds: h
  } = (0, s.Z)(n), j = null == h ? true : h.length, v = (0, c.Z)(n), b = (0, d.Z)(n.id), g = (0, a.Z)(n.id), I = [], y = n.id === (null == t ? true : t.id), Z = r.Z.getFirstWishlistId(n.id), O = null != Z, N = O ? r.Z.getWishlistSettings(n.id, Z) : null, T = (O ? i.Z.getWishlistItems(Z) : []).length > 0, A = b.length > 0;
  (y || A) && I.push({
    text: p.intl.string(p.t.laViwx),
    section: m.oh.WIDGETS
  }), I.push({
    text: p.intl.string(p.t.chq59f),
    section: m.oh.ACTIVITY
  });
  let P = false === n.nsfwAllowed,
    E = o.Z.isFriend(n.id),
    _ = (null == N ? true : N.visibility) === l.f.PUBLIC;
  return (y || !y && T && _ && g && (!P || P && E)) && I.push({
    text: p.intl.string(p.t["7lZ31J"]),
    section: m.oh.WISHLIST
  }), n.id !== (null == t ? true : t.id) && v && (I.push({
    text: (0, u.Z)(x),
    section: m.oh.MUTUAL_FRIENDS
  }), I.push({
    text: (0, f.Z)(j),
    section: m.oh.MUTUAL_GUILDS
  })), I
}