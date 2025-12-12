/** Chunk was on 66201 **/
/** chunk id: 472596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RE: () => d,
  RN: () => A,
  po: () => I,
  vN: () => _,
  xb: () => m,
  zq: () => T
});
var r, Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk91047 = require("./91047.jsx");
let d = (e, t) => {
  let {
    guildId: n,
    userId: r,
    colorRoleId: l
  } = e;
  (0, s.openUserProfileModal)({
    userId: r,
    guildId: n,
    sourceAnalyticsLocations: t,
    roleId: l
  })
};

function _(e, t, n, r) {
  let {
    analyticsLocations: i
  } = (0, a.ZP)();
  return l.useCallback(l => {
    if (null == e) return;
    let a = c.default.getUser(e.userId);
    null != a && (l.stopPropagation(), (0, E.nm)(l, {
      user: a,
      guildId: e.guildId,
      analyticsLocations: null != n ? [n] : i,
      onCloseContextMenu: r,
      isViewOnly: t
    }))
  }, [e, i, r, n, t])
}

function A(e, t, n) {
  let {
    analyticsLocations: r
  } = (0, a.ZP)();
  return l.useCallback(l => {
    if (null == e) return;
    let i = c.default.getUser(e.userId);
    null != i && (l.stopPropagation(), (0, E._j)(l, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : r,
      onCloseContextMenu: n,
      showTransferOwnershipItem: true
    }))
  }, [e, n, r, t])
}

function T(e) {
  return (0, i.e7)([u.Z, o.Z], () => {
    var t;
    if (null == e) return null;
    let n = u.Z.getGuild(e.guildId);
    return null == n || null == e.highestRoleId ? null : null != (t = o.Z.getRole(n.id, e.highestRoleId)) ? t : null
  }, [e])
}
var I = ((r = {})[r.LOADING = 0] = "LOADING", r[r.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", r[r.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", r[r.SUCCESS_FULL = 3] = "SUCCESS_FULL", r);

function m(e, t, n) {
  return t ? 0 : e ? 1 : n <= 0 ? 2 : 3
}