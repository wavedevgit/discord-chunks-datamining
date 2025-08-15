/** Chunk was on 78079 **/
/** chunk id: 472596, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  RE: () => f,
  RN: () => u,
  po: () => d,
  vN: () => v,
  xb: () => E,
  zq: () => h
});
var n, Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk91047 = require("./91047.jsx");
let f = (A, e) => {
  let {
    guildId: t,
    userId: n,
    colorRoleId: r
  } = A;
  (0, a.openUserProfileModal)({
    userId: n,
    guildId: t,
    sourceAnalyticsLocations: e,
    roleId: r
  })
};

function v(A, e, t, n) {
  let {
    analyticsLocations: l
  } = (0, i.ZP)();
  return r.useCallback(r => {
    if (null == A) return;
    let i = g.default.getUser(A.userId);
    null != i && (r.stopPropagation(), (0, c.nm)(r, {
      user: i,
      guildId: A.guildId,
      analyticsLocations: null != t ? [t] : l,
      onCloseContextMenu: n,
      isViewOnly: e
    }))
  }, [A, l, n, t, e])
}

function u(A, e, t) {
  let {
    analyticsLocations: n
  } = (0, i.ZP)();
  return r.useCallback(r => {
    if (null == A) return;
    let l = g.default.getUser(A.userId);
    null != l && (r.stopPropagation(), (0, c._j)(r, {
      user: l,
      guildId: A.guildId,
      analyticsLocations: null != e ? [e] : n,
      onCloseContextMenu: t,
      showTransferOwnershipItem: true
    }))
  }, [A, t, n, e])
}

function h(A) {
  return (0, l.e7)([o.Z, s.Z], () => {
    var e;
    if (null == A) return null;
    let t = o.Z.getGuild(A.guildId);
    return null == t || null == A.highestRoleId ? null : null != (e = s.Z.getRole(t.id, A.highestRoleId)) ? e : null
  }, [A])
}
var d = ((n = {})[n.LOADING = 0] = "LOADING", n[n.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", n[n.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", n[n.SUCCESS_FULL = 3] = "SUCCESS_FULL", n);

function E(A, e, t) {
  return e ? 0 : A ? 1 : t <= 0 ? 2 : 3
}