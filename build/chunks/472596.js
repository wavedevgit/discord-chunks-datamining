/** Chunk was on 873 **/
/** chunk id: 472596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RE: () => d,
  RN: () => A,
  po: () => m,
  vN: () => _,
  xb: () => I,
  zq: () => T
});
var r, Chunk73800 = require("./73800.js"),
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
  (0, a.openUserProfileModal)({
    userId: r,
    guildId: n,
    sourceAnalyticsLocations: t,
    roleId: l
  })
};

function _(e, t, n, r) {
  let {
    analyticsLocations: s
  } = (0, i.ZP)();
  return l.useCallback(l => {
    if (null == e) return;
    let i = c.default.getUser(e.userId);
    null != i && (l.stopPropagation(), (0, E.nm)(l, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: null != n ? [n] : s,
      onCloseContextMenu: r,
      isViewOnly: t
    }))
  }, [e, s, r, n, t])
}

function A(e, t, n) {
  let {
    analyticsLocations: r
  } = (0, i.ZP)();
  return l.useCallback(l => {
    if (null == e) return;
    let s = c.default.getUser(e.userId);
    null != s && (l.stopPropagation(), (0, E._j)(l, {
      user: s,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : r,
      onCloseContextMenu: n,
      showTransferOwnershipItem: true
    }))
  }, [e, n, r, t])
}

function T(e) {
  return (0, s.e7)([u.Z, o.Z], () => {
    var t;
    if (null == e) return null;
    let n = u.Z.getGuild(e.guildId);
    return null == n || null == e.highestRoleId ? null : null != (t = o.Z.getRole(n.id, e.highestRoleId)) ? t : null
  }, [e])
}
var m = ((r = {})[r.LOADING = 0] = "LOADING", r[r.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", r[r.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", r[r.SUCCESS_FULL = 3] = "SUCCESS_FULL", r);

function I(e, t, n) {
  return t ? 0 : e ? 1 : n <= 0 ? 2 : 3
}