/** Chunk was on web.js **/
/** chunk id: 239470, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk647162 = require("./647162.js");

function i(e, t, n, i) {
  var o, a, s;
  let l = e.hasConnectedAccount(),
    c = (0, r.PY)(e),
    u = e.getTrack(),
    d = e.getSyncingWith(),
    f = e.getActivity(),
    _ = null != (s = null != (a = null == u ? true : u.id) ? a : null == f ? true : f.sync_id) ? s : e.getLastPlayedTrackId(),
    p = n.id === t.getId(),
    h = l && !c,
    m = null != _ && _ === (null == i ? true : i.sync_id),
    g = (null == f ? true : f.party) != null && (null == i || null == (o = i.party) ? true : o.id) === f.party.id,
    E = (null == d ? true : d.userId) != null && (null == d ? true : d.userId) === n.id,
    b = p || h || m,
    y = p || E || g;
  return {
    user: n,
    activity: i,
    hasSpotifyAccount: l,
    canPlaySpotify: c,
    notPlayable: h,
    syncingWithParty: g,
    syncingWithUser: E,
    isCurrentUser: p,
    currentUserTrackId: _,
    playingSameTrack: m,
    playDisabled: b,
    syncDisabled: y
  }
}