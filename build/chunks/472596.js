/** Chunk was on 57738 (b2c6ef7b1afe55ec.js) **/
n.d(t, {
  RE: () => _,
  RN: () => A,
  po: () => N,
  vN: () => d,
  xb: () => I,
  zq: () => T
});
var r, l = n(192379),
  a = n(399606),
  i = n(906732),
  o = n(171368),
  s = n(430824),
  E = n(594174),
  c = n(91047),
  u = n(981631);
let _ = (e, t) => {
  let {
    guildId: n,
    userId: r,
    colorRoleId: l
  } = e;
  (0, o.openUserProfileModal)({
    userId: r,
    guildId: n,
    sourceAnalyticsLocations: t,
    roleId: l,
    analyticsLocation: {
      section: u.jXE.MEMBER_SAFETY_PAGE,
      object: u.qAy.ACTIONED_BY_USER
    }
  })
};

function d(e, t, n, r) {
  let {
    analyticsLocations: a
  } = (0, i.ZP)();
  return l.useCallback(l => {
    if (null == e) return;
    let i = E.default.getUser(e.userId);
    null != i && (l.stopPropagation(), (0, c.nm)(l, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: null != n ? [n] : a,
      onCloseContextMenu: r,
      isViewOnly: t
    }))
  }, [e, a, r, n, t])
}

function A(e, t, n) {
  let {
    analyticsLocations: r
  } = (0, i.ZP)();
  return l.useCallback(l => {
    if (null == e) return;
    let a = E.default.getUser(e.userId);
    null != a && (l.stopPropagation(), (0, c._j)(l, {
      user: a,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : r,
      onCloseContextMenu: n,
      showTransferOwnershipItem: !0
    }))
  }, [e, n, r, t])
}

function T(e) {
  return (0, a.e7)([s.Z], () => {
    var t;
    if (null == e) return null;
    let n = s.Z.getGuild(e.guildId);
    return null == n || null == e.highestRoleId ? null : null !== (t = s.Z.getRole(n.id, e.highestRoleId)) && void 0 !== t ? t : null
  }, [e])
}
var N = ((r = {})[r.LOADING = 0] = "LOADING", r[r.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", r[r.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", r[r.SUCCESS_FULL = 3] = "SUCCESS_FULL", r);

function I(e, t, n) {
  return t ? 0 : e ? 1 : n <= 0 ? 2 : 3
}