/** Chunk was on 1272 **/
/** chunk id: 380349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function h(e, t, n) {
  let h = (0, i.e7)([s.Z, a.default], () => null != t ? (0, c.Z)(s.Z, a.default, t, e) : true, [e, t]);
  if (null == h || null == e || null == t) return null;
  let m = h.isCurrentUser || h.notPlayable || h.playingSameTrack,
    g = h.isCurrentUser || h.syncingWithUser || h.syncingWithParty;
  return [(0, r.jsx)(l.sNh, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, d.Z)(h, p.kG.USER_ACTIVITY_PLAY, n),
    label: f.intl.string(f.t.rRffNz),
    subtext: m ? (0, o.Z)(h, p.kG.USER_ACTIVITY_PLAY) : true,
    disabled: m
  }, "spotify-play-".concat(e.session_id)), h.canPlaySpotify ? (0, r.jsx)(l.sNh, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, u.Z)(h, p.kG.USER_ACTIVITY_SYNC, n),
    label: f.intl.string(f.t.eU3inB),
    subtext: g ? (0, o.Z)(h, p.kG.USER_ACTIVITY_SYNC) : true,
    disabled: g
  }, "spotify-sync-".concat(e.session_id)) : null]
}