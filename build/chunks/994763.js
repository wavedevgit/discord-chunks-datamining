/** Chunk was on 95140 **/
n.r(t), n.d(t, {
  default: () => L
});
var i = n(200651),
  l = n(192379),
  r = n(442837),
  o = n(37234),
  a = n(503089),
  c = n(100527),
  s = n(367907),
  u = n(906732),
  d = n(456268),
  p = n(63568),
  b = n(745752),
  g = n(45966),
  f = n(526120),
  O = n(751189),
  y = n(409059),
  h = n(918658),
  j = n(163400),
  m = n(210887),
  v = n(524329),
  P = n(995532),
  S = n(984933),
  Z = n(650774),
  w = n(496675),
  E = n(434404),
  G = n(600553),
  M = n(999382),
  N = n(359191),
  C = n(896007),
  x = n(978946),
  D = n(981631),
  A = n(388032);

function k(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : void 0;
  s.ZP.trackWithMetadata(D.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: t,
    destination_pane: e,
    location: n
  })
}
let I = {
  canManageGuild: !1,
  canManageChannels: !1,
  canManageRoles: !1,
  canManageBans: !1,
  canManageNicknames: !1,
  canManageGuildExpressions: !1,
  canViewAuditLog: !1,
  canManageWebhooks: !1,
  canAccessMembersPage: !1,
  canViewGuildAnalytics: !1,
  isOwner: !1,
  isOwnerWithRequiredMfaLevel: !1,
  isGuildAdmin: !1
};
class K extends l.PureComponent {
  componentDidMount() {
    k(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    E.Z.close()
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e, {
      section: n,
      isGuildAdmin: i,
      canManageGuild: l,
      canManageRoles: r,
      canManageBans: a,
      canManageNicknames: c,
      canManageGuildExpressions: s,
      canViewAuditLog: u,
      canManageWebhooks: d,
      canUnlinkChannels: p,
      canAccessMembersPage: b,
      canViewGuildAnalytics: g
    } = this.props;
    n !== t && k(n, t), (i || l || r || a || c || s || u || b || d || p) && (u || n !== D.pNK.AUDIT_LOG) && (r || n !== D.pNK.ROLES) && (s || n !== D.pNK.EMOJI) && (s || n !== D.pNK.STICKERS) && (s || n !== D.pNK.SOUNDBOARD) && (a || n !== D.pNK.BANS) && (g || n !== D.pNK.ANALYTICS) && (b || n !== D.pNK.MEMBERS) || (0, o.xf)()
  }
  render() {
    var e, t;
    let {
      theme: n,
      sidebarTheme: l,
      section: r,
      guild: c,
      isGuildAdmin: s,
      canManageGuild: u,
      canViewAuditLog: d,
      canManageRoles: p,
      canManageGuildExpressions: b,
      canManageWebhooks: g,
      canUnlinkChannels: f,
      canManageBans: O,
      canAccessMembersPage: y,
      canViewGuildAnalytics: j,
      isOwner: m,
      isOwnerWithRequiredMfaLevel: v,
      showDirtyGuildTemplateIndicator: P,
      memberCount: S,
      onboardingStep: Z,
      onboardingEnabled: w,
      welcomeScreenEmpty: G,
      guildMetadata: M,
      canAccessClanSettings: N,
      memberVerificationRolloutEnabled: D,
      isGuildSettingsFoundationEnabled: k
    } = this.props;
    if (null == c) return null;
    let I = (0, C.vE)({
        guild: c,
        isGuildAdmin: s,
        canManageGuild: u,
        canViewAuditLog: d,
        canManageRoles: p,
        canManageGuildExpressions: b,
        canManageWebhooks: g,
        canUnlinkChannels: f,
        canManageBans: O,
        canAccessMembersPage: y,
        canViewGuildAnalytics: j,
        isOwner: m,
        isOwnerWithRequiredMfaLevel: v,
        showDirtyGuildTemplateIndicator: P,
        memberCount: S,
        onboardingStep: Z,
        onboardingEnabled: w,
        welcomeScreenEmpty: G,
        guildMetadata: M,
        section: r,
        canAccessClanSettings: N,
        memberVerificationRolloutEnabled: D,
        isGuildSettingsFoundationEnabled: k
      }),
      K = (null == (t = I.find(e => e.section === r)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
      L = (0, x.r)(c.id);
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)(a.ZP, {
        theme: n,
        sidebarTheme: l,
        section: K && null != r ? r : L,
        onSetSection: E.Z.setSection,
        onClose: o.xf,
        title: "" !== c.toString() ? c.toString() : A.NW.string(A.t["154/bG"]),
        sections: I
      }), (0, i.jsx)(h.d, {
        guildId: c.id
      })]
    })
  }
}

function L() {
  var e, t, n;
  let {
    guild: o,
    section: a,
    analyticsLocation: s,
    guildMetadata: h,
    isGuildMetadataLoaded: C
  } = (0, r.cj)([M.Z], () => M.Z.getProps()), {
    analyticsLocations: x
  } = (0, u.ZP)(c.Z.GUILD_SETTINGS), A = (0, r.e7)([m.Z], () => m.Z.theme), k = (0, r.e7)([m.Z], () => m.Z.darkSidebar ? D.BRd.DARK : void 0), L = (0, r.e7)([S.ZP], () => null != o ? S.ZP.getChannels(o.id).SELECTABLE : null, [o]), T = (0, r.cj)([w.Z], () => null != o ? w.Z.getGuildPermissionProps(o) : I), R = null == o ? void 0 : o.id, B = (0, r.e7)([w.Z], () => null != o && w.Z.canAccessGuildSettings(o));
  l.useEffect(() => {
    C || null == R || (0, d.aC)(R)
  }, [C, R]);
  let F = null != (e = null == o ? void 0 : o.hasFeature(D.oNc.COMMUNITY)) && e;
  l.useEffect(() => {
    null != R && F && ((0, b.eM)(R), (0, v.RM)(R))
  }, [R, F]), l.useEffect(() => {
    null != R && (0, f.cP)(R)
  }, [R]);
  let _ = T.isGuildAdmin && (null == o ? void 0 : o.hasFeature(D.oNc.CLAN)),
    U = (0, r.e7)([y.Z], () => {
      var e;
      return (null == o ? void 0 : o.id) != null && (null == (e = y.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0
    }, [o]),
    V = (0, r.e7)([Z.Z], () => Z.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
  l.useEffect(() => {
    null != R && T.canManageGuild && O.Z.loadTemplatesForGuild(R)
  }, [R, T.canManageGuild]), l.useEffect(() => {
    B || E.Z.close()
  }, [B]);
  let W = (0, r.e7)([N.Z], () => N.Z.getCurrentPage()),
    Y = (0, r.e7)([g.Z], () => null != R && g.Z.getEnabled(R)),
    J = (0, r.e7)([P.Z], () => null != R && P.Z.isEmpty(R)),
    q = (0, j.F)(R).length > 0,
    z = (0, p.jS)(R, "GuildSettings"),
    H = (0, G.Dj)({
      guildId: R,
      location: "GuildSettings"
    });
  return (0, i.jsx)(u.Gt, {
    value: x,
    children: (0, i.jsx)(K, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = i
        })
      }
      return e
    }({
      guild: o,
      section: a,
      theme: A,
      sidebarTheme: k,
      channels: L,
      showDirtyGuildTemplateIndicator: U,
      analyticsLocation: s,
      memberCount: V
    }, T), n = n = {
      canUnlinkChannels: q,
      canViewGuildAnalytics: T.canViewGuildAnalytics,
      onboardingStep: W,
      onboardingEnabled: Y,
      welcomeScreenEmpty: J,
      guildMetadata: h,
      canAccessClanSettings: _,
      memberVerificationRolloutEnabled: z,
      isGuildSettingsFoundationEnabled: H
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}