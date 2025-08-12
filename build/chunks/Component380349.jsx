/** Chunk was on 1272 **/
/** chunk id: 380349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function f(e, t, n) {
  let f = (0, i.e7)([o.Z, a.default], () => null != t ? (0, c.Z)(o.Z, a.default, t, e) : true, [e, t]);
  if (null == f || null == e || null == t) return null;
  let g = f.isCurrentUser || f.notPlayable || f.playingSameTrack,
    m = f.isCurrentUser || f.syncingWithUser || f.syncingWithParty;
  return [(0, r.jsx)(l.sNh, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, d.Z)(f, p.kG.USER_ACTIVITY_PLAY, n),
    label: h.intl.string(h.t.rRffNz),
    subtext: g ? (0, s.Z)(f, p.kG.USER_ACTIVITY_PLAY) : true,
    disabled: g
  }, "spotify-play-".concat(e.session_id)), f.canPlaySpotify ? (0, r.jsx)(l.sNh, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, u.Z)(f, p.kG.USER_ACTIVITY_SYNC, n),
    label: h.intl.string(h.t.eU3inJ),
    subtext: m ? (0, s.Z)(f, p.kG.USER_ACTIVITY_SYNC) : true,
    disabled: m
  }, "spotify-sync-".concat(e.session_id)) : null]
}