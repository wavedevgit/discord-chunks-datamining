/** Chunk was on 38985 **/
/** chunk id: 189552, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Cy: () => _,
  IY: () => T,
  Ko: () => d,
  UY: () => g,
  YH: () => A,
  ii: () => h
});
var l, Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk657331 = require("./657331.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk841549 = require("./841549.jsx");
let d = (e, t) => {
  let {
    guildId: n,
    userId: l,
    colorRoleId: r
  } = e;
  (0, s.openUserProfileModal)({
    userId: l,
    guildId: n,
    sourceAnalyticsLocations: t,
    roleId: r
  })
};

function _(e, t, n, l) {
  let {
    analyticsLocations: a
  } = (0, i.Ay)();
  return r.useCallback(r => {
    if (null == e) return;
    let i = c.default.getUser(e.userId);
    null != i && (r.stopPropagation(), (0, E.Mg)(r, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: null != n ? [n] : a,
      onCloseContextMenu: l,
      isViewOnly: t
    }))
  }, [e, a, l, n, t])
}

function g(e, t, n) {
  let {
    analyticsLocations: l
  } = (0, i.Ay)();
  return r.useCallback(r => {
    if (null == e) return;
    let a = c.default.getUser(e.userId);
    null != a && (r.stopPropagation(), (0, E.B8)(r, {
      user: a,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : l,
      onCloseContextMenu: n,
      showTransferOwnershipItem: true
    }))
  }, [e, n, l, t])
}

function A(e) {
  return (0, a.bG)([u.A, o.A], () => {
    var t;
    if (null == e) return null;
    let n = u.A.getGuild(e.guildId);
    return null == n || null == e.highestRoleId ? null : null != (t = o.A.getRole(n.id, e.highestRoleId)) ? t : null
  }, [e])
}
var T = ((l = {})[l.LOADING = 0] = "LOADING", l[l.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", l[l.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", l[l.SUCCESS_FULL = 3] = "SUCCESS_FULL", l);

function h(e, t, n) {
  return t ? 0 : e ? 1 : n <= 0 ? 2 : 3
}