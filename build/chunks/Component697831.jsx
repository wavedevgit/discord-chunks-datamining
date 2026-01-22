/** Chunk was on 21738 **/
/** chunk id: 697831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk961350 = require("./961350.js"),
  Chunk655116 = require("./655116.js"),
  Chunk341335 = require("./341335.js"),
  Chunk286617 = require("./286617.js"),
  Chunk533207 = require("./533207.jsx"),
  Chunk881335 = require("./881335.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function h(e, t, n) {
  let h = (0, i.bG)([s.A, a.default], () => null != t ? (0, c.A)(s.A, a.default, t, e) : true, [e, t]);
  if (null == h || null == e || null == t) return null;
  let A = h.isCurrentUser || h.notPlayable || h.playingSameTrack,
    g = h.isCurrentUser || h.syncingWithUser || h.syncingWithParty;
  return [(0, r.jsx)(l.Drp, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, d.A)(h, p.Qp.USER_ACTIVITY_PLAY, n),
    label: f.intl.string(f.t.rRffNz),
    subtext: A ? (0, o.A)(h, p.Qp.USER_ACTIVITY_PLAY) : true,
    disabled: A
  }, "spotify-play-".concat(e.session_id)), h.canPlaySpotify ? (0, r.jsx)(l.Drp, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, u.A)(h, p.Qp.USER_ACTIVITY_SYNC, n),
    label: f.intl.string(f.t.eU3inB),
    subtext: g ? (0, o.A)(h, p.Qp.USER_ACTIVITY_SYNC) : true,
    disabled: g
  }, "spotify-sync-".concat(e.session_id)) : null]
}