/** Chunk was on web.js **/
/** chunk id: 286617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk981616 = require("./981616.js");

function i(e, t, n, i) {
  var a, s, o;
  let l = e.hasConnectedAccount(),
    c = (0, r.d3)(e),
    u = e.getTrack(),
    d = e.getSyncingWith(),
    f = e.getActivity(),
    p = null != (a = null != (s = null == u ? true : u.id) ? s : null == f ? true : f.sync_id) ? a : e.getLastPlayedTrackId(),
    _ = n.id === t.getId(),
    h = l && !c,
    m = null != p && p === (null == i ? true : i.sync_id),
    g = (null == f ? true : f.party) != null && (null == i || null == (o = i.party) ? true : o.id) === f.party.id,
    E = (null == d ? true : d.userId) != null && (null == d ? true : d.userId) === n.id,
    y = _ || h || m,
    b = _ || E || g;
  return {
    user: n,
    activity: i,
    hasSpotifyAccount: l,
    canPlaySpotify: c,
    notPlayable: h,
    syncingWithParty: g,
    syncingWithUser: E,
    isCurrentUser: _,
    currentUserTrackId: p,
    playingSameTrack: m,
    playDisabled: y,
    syncDisabled: b
  }
}