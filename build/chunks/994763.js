/** Chunk was on 95140 **/
n.r(t), n.d(t, {
  default: () => x
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(37234),
  c = n(503089),
  a = n(100527),
  s = n(367907),
  u = n(906732),
  d = n(456268),
  p = n(745752),
  b = n(45966),
  g = n(526120),
  f = n(751189),
  O = n(409059),
  y = n(918658),
  h = n(163400),
  j = n(210887),
  m = n(524329),
  P = n(995532),
  v = n(984933),
  S = n(650774),
  Z = n(496675),
  w = n(434404),
  E = n(600553),
  G = n(999382),
  M = n(359191),
  D = n(896007),
  N = n(978946),
  A = n(981631),
  C = n(388032);

function k(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
    n = arguments.length > 2 ? arguments[2] : void 0;
  s.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: t,
    destination_pane: e,
    location: n
  })
}
let T = {
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
class I extends i.PureComponent {
  componentDidMount() {
    k(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    w.Z.close()
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e, {
      section: n,
      isGuildAdmin: r,
      canManageGuild: i,
      canManageRoles: l,
      canManageBans: c,
      canManageNicknames: a,
      canManageGuildExpressions: s,
      canViewAuditLog: u,
      canManageWebhooks: d,
      canUnlinkChannels: p,
      canAccessMembersPage: b,
      canViewGuildAnalytics: g
    } = this.props;
    n !== t && k(n, t), (r || i || l || c || a || s || u || b || d || p) && (u || n !== A.pNK.AUDIT_LOG) && (l || n !== A.pNK.ROLES) && (s || n !== A.pNK.EMOJI) && (s || n !== A.pNK.STICKERS) && (s || n !== A.pNK.SOUNDBOARD) && (c || n !== A.pNK.BANS) && (g || n !== A.pNK.ANALYTICS) && (b || n !== A.pNK.MEMBERS) || (0, o.xf)()
  }
  render() {
    var e, t;
    let {
      theme: n,
      sidebarTheme: i,
      section: l,
      guild: a,
      isGuildAdmin: s,
      canManageGuild: u,
      canViewAuditLog: d,
      canManageRoles: p,
      canManageGuildExpressions: b,
      canManageWebhooks: g,
      canUnlinkChannels: f,
      canManageBans: O,
      canAccessMembersPage: h,
      canViewGuildAnalytics: j,
      isOwner: m,
      isOwnerWithRequiredMfaLevel: P,
      showDirtyGuildTemplateIndicator: v,
      memberCount: S,
      onboardingStep: Z,
      onboardingEnabled: E,
      welcomeScreenEmpty: G,
      guildMetadata: M,
      canAccessClanSettings: A,
      isGuildSettingsFoundationEnabled: k
    } = this.props;
    if (null == a) return null;
    let T = (0, D.vE)({
        guild: a,
        isGuildAdmin: s,
        canManageGuild: u,
        canViewAuditLog: d,
        canManageRoles: p,
        canManageGuildExpressions: b,
        canManageWebhooks: g,
        canUnlinkChannels: f,
        canManageBans: O,
        canAccessMembersPage: h,
        canViewGuildAnalytics: j,
        isOwner: m,
        isOwnerWithRequiredMfaLevel: P,
        showDirtyGuildTemplateIndicator: v,
        memberCount: S,
        onboardingStep: Z,
        onboardingEnabled: E,
        welcomeScreenEmpty: G,
        guildMetadata: M,
        section: l,
        canAccessClanSettings: A,
        isGuildSettingsFoundationEnabled: k
      }),
      I = (null == (t = T.find(e => e.section === l)) || null == (e = t.predicate) ? void 0 : e.call(t)) !== !1,
      x = (0, N.r)(a.id);
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(c.ZP, {
        theme: n,
        sidebarTheme: i,
        section: I && null != l ? l : x,
        onSetSection: w.Z.setSection,
        onClose: o.xf,
        title: "" !== a.toString() ? a.toString() : C.NW.string(C.t["154/bG"]),
        sections: T
      }), (0, r.jsx)(y.d, {
        guildId: a.id
      })]
    })
  }
}

function x() {
  var e, t, n;
  let {
    guild: o,
    section: c,
    analyticsLocation: s,
    guildMetadata: y,
    isGuildMetadataLoaded: D
  } = (0, l.cj)([G.Z], () => G.Z.getProps()), {
    analyticsLocations: N
  } = (0, u.ZP)(a.Z.GUILD_SETTINGS), C = (0, l.e7)([j.Z], () => j.Z.theme), k = (0, l.e7)([j.Z], () => j.Z.darkSidebar ? A.BRd.DARK : void 0), x = (0, l.e7)([v.ZP], () => null != o ? v.ZP.getChannels(o.id).SELECTABLE : null, [o]), L = (0, l.cj)([Z.Z], () => null != o ? Z.Z.getGuildPermissionProps(o) : T), K = null == o ? void 0 : o.id, R = (0, l.e7)([Z.Z], () => null != o && Z.Z.canAccessGuildSettings(o));
  i.useEffect(() => {
    D || null == K || (0, d.aC)(K)
  }, [D, K]);
  let _ = null != (e = null == o ? void 0 : o.hasFeature(A.oNc.COMMUNITY)) && e;
  i.useEffect(() => {
    null != K && _ && ((0, p.eM)(K), (0, m.RM)(K))
  }, [K, _]), i.useEffect(() => {
    null != K && (0, g.cP)(K)
  }, [K]);
  let U = L.isGuildAdmin && (null == o ? void 0 : o.hasFeature(A.oNc.CLAN)),
    B = (0, l.e7)([O.Z], () => {
      var e;
      return (null == o ? void 0 : o.id) != null && (null == (e = O.Z.getForGuild(o.id)) ? void 0 : e.isDirty) === !0
    }, [o]),
    F = (0, l.e7)([S.Z], () => S.Z.getMemberCount(null == o ? void 0 : o.id), [o]);
  i.useEffect(() => {
    null != K && L.canManageGuild && f.Z.loadTemplatesForGuild(K)
  }, [K, L.canManageGuild]), i.useEffect(() => {
    R || w.Z.close()
  }, [R]);
  let W = (0, l.e7)([M.Z], () => M.Z.getCurrentPage()),
    V = (0, l.e7)([b.Z], () => null != K && b.Z.getEnabled(K)),
    q = (0, l.e7)([P.Z], () => null != K && P.Z.isEmpty(K)),
    J = (0, h.F)(K).length > 0,
    Y = (0, E.Dj)({
      guildId: K,
      location: "GuildSettings"
    });
  return (0, r.jsx)(u.Gt, {
    value: N,
    children: (0, r.jsx)(I, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      guild: o,
      section: c,
      theme: C,
      sidebarTheme: k,
      channels: x,
      showDirtyGuildTemplateIndicator: B,
      analyticsLocation: s,
      memberCount: F
    }, L), n = n = {
      canUnlinkChannels: J,
      canViewGuildAnalytics: L.canViewGuildAnalytics,
      onboardingStep: W,
      onboardingEnabled: V,
      welcomeScreenEmpty: q,
      guildMetadata: y,
      canAccessClanSettings: U,
      isGuildSettingsFoundationEnabled: Y
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}