/** Chunk was on 21738 **/
/** chunk id: 697831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e, t, n) {
  let f = (0, i.bG)([s.A, a.default], () => null != t ? (0, c.A)(s.A, a.default, t, e) : true, [e, t]);
  if (null == f || null == e || null == t) return null;
  let g = f.isCurrentUser || f.notPlayable || f.playingSameTrack,
    m = f.isCurrentUser || f.syncingWithUser || f.syncingWithParty;
  return [(0, r.jsx)(l.Drp, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, d.A)(f, p.Qp.USER_ACTIVITY_PLAY, n),
    label: h.intl.string(h.t.rRffNz),
    subtext: g ? (0, o.A)(f, p.Qp.USER_ACTIVITY_PLAY) : true,
    disabled: g
  }, "spotify-play-".concat(e.session_id)), f.canPlaySpotify ? (0, r.jsx)(l.Drp, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, u.A)(f, p.Qp.USER_ACTIVITY_SYNC, n),
    label: h.intl.string(h.t.eU3inB),
    subtext: m ? (0, o.A)(f, p.Qp.USER_ACTIVITY_SYNC) : true,
    disabled: m
  }, "spotify-sync-".concat(e.session_id)) : null]
}