/** Chunk was on 65438 **/
r.d(t, {
  RE: () => u,
  RN: () => E,
  po: () => p,
  vN: () => d,
  xb: () => M,
  zq: () => f
});
var n, l = r(192379),
  i = r(399606),
  a = r(906732),
  o = r(171368),
  s = r(430824),
  h = r(594174),
  c = r(91047),
  v = r(981631);
let u = (e, t) => {
  let {
    guildId: r,
    userId: n,
    colorRoleId: l
  } = e;
  (0, o.openUserProfileModal)({
    userId: n,
    guildId: r,
    sourceAnalyticsLocations: t,
    roleId: l,
    analyticsLocation: {
      section: v.jXE.MEMBER_SAFETY_PAGE,
      object: v.qAy.ACTIONED_BY_USER
    }
  })
};

function d(e, t, r, n) {
  let {
    analyticsLocations: i
  } = (0, a.ZP)();
  return l.useCallback(l => {
    if (null == e) return;
    let a = h.default.getUser(e.userId);
    null != a && (l.stopPropagation(), (0, c.nm)(l, {
      user: a,
      guildId: e.guildId,
      analyticsLocations: null != r ? [r] : i,
      onCloseContextMenu: n,
      isViewOnly: t
    }))
  }, [e, i, n, r, t])
}

function E(e, t, r) {
  let {
    analyticsLocations: n
  } = (0, a.ZP)();
  return l.useCallback(l => {
    if (null == e) return;
    let i = h.default.getUser(e.userId);
    null != i && (l.stopPropagation(), (0, c._j)(l, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : n,
      onCloseContextMenu: r,
      showTransferOwnershipItem: !0
    }))
  }, [e, r, n, t])
}

function f(e) {
  return (0, i.e7)([s.Z], () => {
    var t;
    if (null == e) return null;
    let r = s.Z.getGuild(e.guildId);
    return null == r || null == e.highestRoleId ? null : null !== (t = s.Z.getRole(r.id, e.highestRoleId)) && void 0 !== t ? t : null
  }, [e])
}
var p = ((n = {})[n.LOADING = 0] = "LOADING", n[n.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", n[n.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", n[n.SUCCESS_FULL = 3] = "SUCCESS_FULL", n);

function M(e, t, r) {
  return t ? 0 : e ? 1 : r <= 0 ? 2 : 3
}