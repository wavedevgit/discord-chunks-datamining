/** Chunk was on web.js **/
/** chunk id: 829820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fe: () => O,
  Ih: () => y,
  Lz: () => v
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk110924 = require("./110924.js"),
  Chunk314897 = require("./314897.js"),
  Chunk70956 = require("./70956.js"),
  Chunk51144 = require("./51144.js"),
  Chunk768419 = require("./768419.js"),
  Chunk300020 = require("./300020.js"),
  Chunk456190 = require("./456190.js"),
  Chunk239470 = require("./239470.js"),
  Chunk894344 = require("./894344.jsx"),
  Chunk203777 = require("./203777.js"),
  Chunk616922 = require("./616922.js");
let g = 30 * Chunk70956.Z.Millis.SECOND;

function E(e) {
  let {
    currentUserTrackId: t,
    syncingWithUser: n,
    syncingWithParty: i
  } = e, [s, l] = r.useState(false), [c] = r.useState(() => new a.V7), u = (0, o.Z)(t);
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

function b(e, t) {
  return (0, i.cj)([u.Z, s.default], () => (0, p.Z)(u.Z, s.default, t, e), [e, t])
}

function y(e, t, n) {
  let i = b(e, t),
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
      c(), (0, m.Z)(i, h.kG.USER_ACTIVITY_PLAY, n).catch(u)
    }, [i, n, c, u]);
  return {
    label: (0, d.Z)(i, h.kG.USER_ACTIVITY_PLAY),
    tooltip: (0, f.Z)(i, h.kG.USER_ACTIVITY_PLAY),
    disabled: !l && (o || a || s),
    loading: l,
    onClick: p,
    spotifyData: i
  }
}

function O(e, t, n, i) {
  let a = null != i ? i : c.ZP.getName(t),
    o = b(e, t),
    {
      notPlayable: s,
      syncingWithUser: l,
      syncingWithParty: u,
      isCurrentUser: p
    } = o,
    {
      loading: m,
      startLoading: g,
      clearLoading: y
    } = E(o),
    O = r.useCallback(() => {
      g(), (0, _.Z)(o, h.kG.USER_ACTIVITY_SYNC, n).catch(y)
    }, [o, n, g, y]);
  return {
    label: (0, d.Z)(o, h.kG.USER_ACTIVITY_SYNC),
    tooltip: (0, f.Z)(o, h.kG.USER_ACTIVITY_SYNC, a),
    disabled: !m && (s || p || l || u),
    loading: m,
    onClick: O,
    spotifyData: o
  }
}

function v(e, t, n) {
  let i = b(e, t),
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
    m = r.useCallback(() => {
      u(), (0, _.Z)(i, h.kG.EMBED_SYNC, n).catch(p)
    }, [i, n, u, p]);
  return {
    label: (0, d.Z)(i, h.kG.EMBED_SYNC),
    tooltip: (0, f.Z)(i, h.kG.EMBED_SYNC),
    disabled: !c && (l || o || s || a),
    loading: c,
    onClick: m,
    spotifyData: i
  }
}