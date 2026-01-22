/** Chunk was on 98700 **/
/** chunk id: 422559, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk398590 = require("./398590.js"),
  Chunk83257 = require("./83257.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk460760 = require("./460760.js"),
  Chunk817818 = require("./817818.js"),
  Chunk591552 = require("./591552.js"),
  Chunk225142 = require("./225142.js"),
  Chunk292572 = require("./292572.js"),
  Chunk122906 = require("./122906.js"),
  Chunk475723 = require("./475723.jsx"),
  Chunk887501 = require("./887501.js"),
  Chunk149280 = require("./149280.js"),
  Chunk97469 = require("./97469.js"),
  Chunk544028 = require("./544028.js"),
  Chunk447696 = require("./447696.js"),
  Chunk684407 = require("./684407.js"),
  Chunk808728 = require("./808728.js"),
  Chunk498642 = require("./498642.js"),
  Chunk576705 = require("./576705.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk287479 = require("./287479.js"),
  Chunk110807 = require("./110807.js"),
  Chunk595818 = require("./595818.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    t = arguments.length > 2 ? arguments[2] : true;
  a.Ay.trackWithMetadata(v.HAw.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: n,
    destination_pane: e,
    location: t
  })
}
let w = {
  canManageGuild: false,
  canManageChannels: false,
  canManageRoles: false,
  canManageBans: false,
  canManageNicknames: false,
  canManageGuildExpressions: false,
  canViewAuditLog: false,
  canManageWebhooks: false,
  canAccessMembersPage: false,
  canViewGuildAnalytics: false,
  isOwner: false,
  isOwnerWithRequiredMfaLevel: false,
  isGuildAdmin: false
};
class P extends Chunk64700.PureComponent {
  componentDidMount() {
    y(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    m.A.close()
  }
  componentDidUpdate(e) {
    let {
      section: n
    } = e, {
      section: t,
      isGuildAdmin: l,
      canManageGuild: i,
      canManageRoles: r,
      canManageBans: o,
      canManageNicknames: u,
      canManageGuildExpressions: a,
      canViewAuditLog: c,
      canManageWebhooks: E,
      canUnlinkChannels: d,
      canAccessMembersPage: I,
      canViewGuildAnalytics: _
    } = this.props;
    t !== n && y(t, n), (l || i || r || o || u || a || c || I || E || d) && (c || t !== v.BEX.AUDIT_LOG) && (r || t !== v.BEX.ROLES) && (a || t !== v.BEX.EMOJI) && (a || t !== v.BEX.STICKERS) && (a || t !== v.BEX.SOUNDBOARD) && (o || t !== v.BEX.BANS) && (_ || t !== v.BEX.ANALYTICS) && (I || t !== v.BEX.MEMBERS) || (0, s.jH)()
  }
  render() {
    var e, n;
    let {
      theme: t,
      sidebarTheme: i,
      section: r,
      guild: u,
      isGuildAdmin: a,
      canManageGuild: c,
      canViewAuditLog: E,
      canManageRoles: d,
      canManageGuildExpressions: I,
      canManageWebhooks: _,
      canUnlinkChannels: A,
      canManageBans: S,
      canAccessMembersPage: N,
      canViewGuildAnalytics: g,
      isOwner: G,
      isOwnerWithRequiredMfaLevel: f,
      showDirtyGuildTemplateIndicator: T,
      memberCount: h,
      onboardingStep: b,
      onboardingEnabled: D,
      welcomeScreenEmpty: M,
      guildMetadata: C,
      permissionMigrationAvailable: p
    } = this.props;
    if (null == u) return null;
    let v = (0, R.SB)({
        guild: u,
        isGuildAdmin: a,
        canManageGuild: c,
        canViewAuditLog: E,
        canManageRoles: d,
        canManageGuildExpressions: I,
        canManageWebhooks: _,
        canUnlinkChannels: A,
        canManageBans: S,
        canAccessMembersPage: N,
        canViewGuildAnalytics: g,
        isOwner: G,
        isOwnerWithRequiredMfaLevel: f,
        showDirtyGuildTemplateIndicator: T,
        memberCount: h,
        onboardingStep: b,
        onboardingEnabled: D,
        welcomeScreenEmpty: M,
        guildMetadata: C,
        section: r,
        permissionMigrationAvailable: p
      }),
      y = (null == (n = v.find(e => e.section === r)) || null == (e = n.predicate) ? true : e.call(n)) !== false,
      w = (0, U.x)();
    return (0, l.jsxs)("div", {
      children: [(0, l.jsx)(o.Ay, {
        theme: t,
        sidebarTheme: i,
        section: y && null != r ? r : w,
        onSetSection: m.A.setSection,
        onClose: s.jH,
        title: "" !== u.name ? u.name : L.intl.string(L.t["154/bL"]),
        sections: v
      }), (0, l.jsx)(O.w, {
        guildId: u.id
      })]
    })
  }
}

function j() {
  var e, n, t;
  let {
    guild: s,
    section: o,
    analyticsLocation: a,
    guildMetadata: O,
    isGuildMetadataLoaded: R
  } = (0, r.cf)([C.A], () => C.A.getProps()), {
    analyticsLocations: U
  } = (0, c.Ay)(u.A.GUILD_SETTINGS), L = (0, r.bG)([f.A], () => f.A.theme), y = (0, G.NC)(), j = (0, r.bG)([b.Ay], () => null != s ? b.Ay.getChannels(s.id).SELECTABLE : null, [s]), B = (0, r.cf)([M.A], () => null != s ? M.A.getGuildPermissionProps(s) : w), x = null == s ? true : s.id, H = (0, r.bG)([M.A], () => null != s && M.A.canAccessGuildSettings(s));
  i.useEffect(() => {
    R || null == x || (0, E.mo)(x)
  }, [R, x]);
  let W = null != (e = null == s ? true : s.features.has(v.GuildFeatures.COMMUNITY)) && e;
  i.useEffect(() => {
    null != x && W && ((0, d.jx)(x), (0, T.Fy)(x))
  }, [x, W]), i.useEffect(() => {
    null != x && (0, _.ag)(x)
  }, [x]);
  let F = (0, r.bG)([S.A], () => {
      var e;
      return (null == s ? true : s.id) != null && (null == (e = S.A.getForGuild(s.id)) ? true : e.isDirty) === true
    }, [s]),
    k = (0, r.bG)([D.A], () => D.A.getMemberCount(null == s ? true : s.id), [s]);
  i.useEffect(() => {
    null != x && B.canManageGuild && A.A.loadTemplatesForGuild(x)
  }, [x, B.canManageGuild]), i.useEffect(() => {
    H || m.A.close()
  }, [H]);
  let X = (0, r.bG)([p.A], () => p.A.getCurrentPage()),
    V = (0, r.bG)([I.A], () => null != x && I.A.getEnabled(x)),
    q = (0, r.bG)([h.A], () => null != x && h.A.isEmpty(x)),
    J = (0, N.A)(x).length > 0,
    K = (0, g.A)(s);
  return (0, l.jsx)(c.f5, {
    value: U,
    children: (0, l.jsx)(P, (n = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
          var l;
          l = t[n], n in e ? Object.defineProperty(e, n, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = l
        })
      }
      return e
    }({
      guild: s,
      section: o,
      theme: L,
      sidebarTheme: y,
      channels: j,
      showDirtyGuildTemplateIndicator: F,
      analyticsLocation: a,
      memberCount: k
    }, B), t = t = {
      canUnlinkChannels: J,
      canViewGuildAnalytics: B.canViewGuildAnalytics,
      onboardingStep: X,
      onboardingEnabled: V,
      welcomeScreenEmpty: q,
      guildMetadata: O,
      permissionMigrationAvailable: K
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        t.push.apply(t, l)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), n))
  })
}