/** Chunk was on 1272 (001d1b875900c1de.js) **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(481060),
  o = n(314897),
  a = n(768419),
  s = n(456190),
  c = n(239470),
  u = n(894344),
  d = n(203777),
  p = n(616922),
  h = n(388032);

function f(e, t, n) {
  let f = (0, i.e7)([a.Z, o.default], () => null != t ? (0, c.Z)(a.Z, o.default, t, e) : void 0, [e, t]);
  if (null == f || null == e || null == t) return null;
  let g = f.isCurrentUser || f.notPlayable || f.playingSameTrack,
    m = f.isCurrentUser || f.syncingWithUser || f.syncingWithParty;
  return [(0, r.jsx)(l.sNh, {
    id: "spotify-play-".concat(e.session_id),
    action: () => (0, d.Z)(f, p.kG.USER_ACTIVITY_PLAY, n),
    label: h.NW.string(h.t.rRffNz),
    subtext: g ? (0, s.Z)(f, p.kG.USER_ACTIVITY_PLAY) : void 0,
    disabled: g
  }, "spotify-play-".concat(e.session_id)), f.canPlaySpotify ? (0, r.jsx)(l.sNh, {
    id: "spotify-sync-".concat(e.session_id),
    action: () => (0, u.Z)(f, p.kG.USER_ACTIVITY_SYNC, n),
    label: h.NW.string(h.t.eU3inJ),
    subtext: m ? (0, s.Z)(f, p.kG.USER_ACTIVITY_SYNC) : void 0,
    disabled: m
  }, "spotify-sync-".concat(e.session_id)) : null]
}