/** Chunk was on web.js **/
/** chunk id: 353411, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gq: () => v,
  J$: () => O,
  _B: () => b
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk475743 = require("./475743.js"),
  Chunk961350 = require("./961350.js"),
  Chunk927813 = require("./927813.js"),
  Chunk427262 = require("./427262.js"),
  Chunk655116 = require("./655116.js"),
  Chunk160768 = require("./160768.js"),
  Chunk341335 = require("./341335.js"),
  Chunk286617 = require("./286617.js"),
  Chunk533207 = require("./533207.jsx"),
  Chunk881335 = require("./881335.js"),
  Chunk272984 = require("./272984.js");
let g = 30 * Chunk927813.A.Millis.SECOND;

function E(e) {
  let {
    currentUserTrackId: t,
    syncingWithUser: n,
    syncingWithParty: i
  } = e, [s, l] = r.useState(false), [c] = r.useState(() => new a.Ep), u = (0, o.A)(t);
  r.useEffect(() => {
    s && (t !== u || n || i) && (l(false), c.stop())
  }, [t, u, n, i, s, c]);
  let d = r.useCallback(() => {
      l(true), c.start(g, () => l(false))
    }, [c]),
    f = r.useCallback(() => {
      l(false), c.stop()
    }, [c]);
  return r.useEffect(() => () => c.stop(), [c]), {
    loading: s,
    startLoading: d,
    clearLoading: f
  }
}

function y(e, t) {
  return (0, i.cf)([u.A, s.default], () => (0, p.A)(u.A, s.default, t, e), [e, t])
}

function b(e, t, n) {
  let i = y(e, t),
    {
      notPlayable: a,
      isCurrentUser: o,
      playingSameTrack: s
    } = i,
    {
      loading: l,
      startLoading: c,
      clearLoading: u
    } = E(i),
    p = r.useCallback(() => {
      c(), (0, h.A)(i, m.Qp.USER_ACTIVITY_PLAY, n).catch(u)
    }, [i, n, c, u]);
  return {
    label: (0, d.A)(i, m.Qp.USER_ACTIVITY_PLAY),
    tooltip: (0, f.A)(i, m.Qp.USER_ACTIVITY_PLAY),
    disabled: !l && (o || a || s),
    loading: l,
    onClick: p,
    spotifyData: i
  }
}

function O(e, t, n, i) {
  let a = null != i ? i : c.Ay.getName(t),
    o = y(e, t),
    {
      notPlayable: s,
      syncingWithUser: l,
      syncingWithParty: u,
      isCurrentUser: p
    } = o,
    {
      loading: h,
      startLoading: g,
      clearLoading: b
    } = E(o),
    O = r.useCallback(() => {
      g(), (0, _.A)(o, m.Qp.USER_ACTIVITY_SYNC, n).catch(b)
    }, [o, n, g, b]);
  return {
    label: (0, d.A)(o, m.Qp.USER_ACTIVITY_SYNC),
    tooltip: (0, f.A)(o, m.Qp.USER_ACTIVITY_SYNC, a),
    disabled: !h && (s || p || l || u),
    loading: h,
    onClick: O,
    spotifyData: o
  }
}

function v(e, t, n) {
  let i = y(e, t),
    {
      notPlayable: a,
      syncingWithUser: o,
      syncingWithParty: s,
      isCurrentUser: l
    } = i,
    {
      loading: c,
      startLoading: u,
      clearLoading: p
    } = E(i),
    h = r.useCallback(() => {
      u(), (0, _.A)(i, m.Qp.EMBED_SYNC, n).catch(p)
    }, [i, n, u, p]);
  return {
    label: (0, d.A)(i, m.Qp.EMBED_SYNC),
    tooltip: (0, f.A)(i, m.Qp.EMBED_SYNC),
    disabled: !c && (l || o || s || a),
    loading: c,
    onClick: h,
    spotifyData: i
  }
}