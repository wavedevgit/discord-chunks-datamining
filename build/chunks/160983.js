/** Chunk was on 64228 **/
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
  } = (0, c.A)(t), j = null == x ? true : x.length, h = (0, a.A)(t), g = (0, d.A)(t.id), v = (0, o.A)(t.id), b = [], I = t.id === (null == n ? true : n.id), y = s.A.getFirstWishlistId(t.id), _ = null != y, O = _ ? s.A.getWishlistSettings(t.id, y) : null, N = (_ ? i.A.getWishlistItems(y) : []).length > 0, E = g.length > 0;
  (I || E) && b.push({
    text: f.intl.string(f.t.laViwx),
    section: m.RP.WIDGETS
  }), b.push({
    text: f.intl.string(f.t.chq59f),
    section: m.RP.ACTIVITY
  });
  let T = false === t.nsfwAllowed,
    P = r.A.isFriend(t.id),
    C = (null == O ? true : O.visibility) === l.a.PUBLIC;
  return (I || !I && N && C && v && (!T || T && P)) && b.push({
    text: f.intl.string(f.t["7lZ31J"]),
    section: m.RP.WISHLIST
  }), t.id !== (null == n ? true : n.id) && h && (b.push({
    text: (0, u.A)(A),
    section: m.RP.MUTUAL_FRIENDS
  }), b.push({
    text: (0, p.A)(j),
    section: m.RP.MUTUAL_GUILDS
  })), b
}