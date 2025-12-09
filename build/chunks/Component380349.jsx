/** Chunk was on 1272 **/
/** chunk id: 380349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk768419 = require("./768419.js"),
  Chunk456190 = require("./456190.js"),
  Chunk239470 = require("./239470.js"),
  Chunk894344 = require("./894344.jsx"),
  Chunk203777 = require("./203777.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t, n) {
  let g = (0, i.e7)([s.Z, a.default], () => null != t ? (0, c.Z)(s.Z, a.default, t, e) : true, [e, t]);
  if (null == g || null == e || null == t) return null;
  let h = g.isCurrentUser || g.notPlayable || g.playingSameTrack,
    m = g.isCurrentUser || g.syncingWithUser || g.syncingWithParty;
  return [(0, r.jsx)(l.sNh, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, d.Z)(g, p.kG.USER_ACTIVITY_PLAY, n),
    label: f.intl.string(f.t.rRffNz),
    subtext: h ? (0, o.Z)(g, p.kG.USER_ACTIVITY_PLAY) : true,
    disabled: h
  }, "spotify-play-".concat(e.session_id)), g.canPlaySpotify ? (0, r.jsx)(l.sNh, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, u.Z)(g, p.kG.USER_ACTIVITY_SYNC, n),
    label: f.intl.string(f.t.eU3inB),
    subtext: m ? (0, o.Z)(g, p.kG.USER_ACTIVITY_SYNC) : true,
    disabled: m
  }, "spotify-sync-".concat(e.session_id)) : null]
}