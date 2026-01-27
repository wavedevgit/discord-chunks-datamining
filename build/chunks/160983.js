/** Chunk was on 63974 **/
/** chunk id: 160983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./321073.js");
var Chunk777480 = require("./777480.js"),
  Chunk107563 = require("./107563.js"),
  Chunk994500 = require("./994500.js"),
  Chunk622543 = require("./622543.js"),
  Chunk570287 = require("./570287.js"),
  Chunk646444 = require("./646444.js"),
  Chunk913453 = require("./913453.js"),
  Chunk667049 = require("./667049.js"),
  Chunk837531 = require("./837531.js"),
  Chunk186272 = require("./186272.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

function A(e) {
  let {
    user: t,
    currentUser: n
  } = e, {
    mutualFriendsCount: A,
    mutualGuilds: x
  } = (0, d.A)(t), g = null == x ? true : x.length, j = (0, a.A)(t), h = (0, c.A)(t.id), b = (0, o.A)(t.id), v = [], I = t.id === (null == n ? true : n.id), y = s.A.getFirstWishlistId(t.id), _ = null != y, O = _ ? s.A.getWishlistSettings(t.id, y) : null, N = (_ ? i.A.getWishlistItems(y) : []).length > 0, E = h.length > 0;
  (I || E) && v.push({
    text: m.intl.string(m.t.laViwx),
    section: f.RP.WIDGETS
  }), v.push({
    text: m.intl.string(m.t.chq59f),
    section: f.RP.ACTIVITY
  });
  let P = false === t.nsfwAllowed,
    T = r.A.isFriend(t.id),
    C = (null == O ? true : O.visibility) === l.a.PUBLIC;
  return (I || !I && N && C && b && (!P || P && T)) && v.push({
    text: m.intl.string(m.t["7lZ31J"]),
    section: f.RP.WISHLIST
  }), t.id !== (null == n ? true : n.id) && j && (v.push({
    text: (0, u.A)(A),
    section: f.RP.MUTUAL_FRIENDS
  }), v.push({
    text: (0, p.A)(g),
    section: f.RP.MUTUAL_GUILDS
  })), v
}