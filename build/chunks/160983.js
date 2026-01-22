/** Chunk was on 64228 **/
/** chunk id: 160983, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function x(e) {
  let {
    user: l,
    currentUser: t
  } = e, {
    mutualFriendsCount: x,
    mutualGuilds: A
  } = (0, d.A)(l), j = null == A ? true : A.length, h = (0, o.A)(l), g = (0, c.A)(l.id), v = (0, a.A)(l.id), b = [], I = l.id === (null == t ? true : t.id), y = s.A.getFirstWishlistId(l.id), O = null != y, N = O ? s.A.getWishlistSettings(l.id, y) : null, E = (O ? i.A.getWishlistItems(y) : []).length > 0, _ = g.length > 0;
  (I || _) && b.push({
    text: m.intl.string(m.t.laViwx),
    section: p.RP.WIDGETS
  }), b.push({
    text: m.intl.string(m.t.chq59f),
    section: p.RP.ACTIVITY
  });
  let T = false === l.nsfwAllowed,
    P = r.A.isFriend(l.id),
    S = (null == N ? true : N.visibility) === n.a.PUBLIC;
  return (I || !I && E && S && v && (!T || T && P)) && b.push({
    text: m.intl.string(m.t["7lZ31J"]),
    section: p.RP.WISHLIST
  }), l.id !== (null == t ? true : t.id) && h && (b.push({
    text: (0, u.A)(x),
    section: p.RP.MUTUAL_FRIENDS
  }), b.push({
    text: (0, f.A)(j),
    section: p.RP.MUTUAL_GUILDS
  })), b
}