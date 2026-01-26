/** Chunk was on 98700 **/
/** chunk id: 422559, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => B
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
  a.Ay.trackWithMetadata(L.HAw.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: n,
    destination_pane: e,
    location: t
  })
}
let v = {
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
    t !== n && y(t, n), (l || i || r || o || u || a || c || I || E || d) && (c || t !== L.BEX.AUDIT_LOG) && (r || t !== L.BEX.ROLES) && (a || t !== L.BEX.EMOJI) && (a || t !== L.BEX.STICKERS) && (a || t !== L.BEX.SOUNDBOARD) && (o || t !== L.BEX.BANS) && (_ || t !== L.BEX.ANALYTICS) && (I || t !== L.BEX.MEMBERS) || (0, s.jH)()
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
      isOwnerWithRequiredMfaLevel: T,
      showDirtyGuildTemplateIndicator: f,
      memberCount: b,
      onboardingStep: h,
      onboardingEnabled: D,
      welcomeScreenEmpty: M,
      guildMetadata: C,
      permissionMigrationAvailable: p
    } = this.props;
    if (null == u) return null;
    let L = (0, R.SB)({
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
        isOwnerWithRequiredMfaLevel: T,
        showDirtyGuildTemplateIndicator: f,
        memberCount: b,
        onboardingStep: h,
        onboardingEnabled: D,
        welcomeScreenEmpty: M,
        guildMetadata: C,
        section: r,
        permissionMigrationAvailable: p
      }),
      y = (null == (n = L.find(e => e.section === r)) || null == (e = n.predicate) ? true : e.call(n)) !== false,
      v = (0, U.x)();
    return (0, l.jsxs)("div", {
      children: [(0, l.jsx)(o.Ay, {
        theme: t,
        sidebarTheme: i,
        section: y && null != r ? r : v,
        onSetSection: m.A.setSection,
        onClose: s.jH,
        title: "" !== u.name ? u.name : w.intl.string(w.t["154/bL"]),
        sections: L
      }), (0, l.jsx)(O.w, {
        guildId: u.id
      })]
    })
  }
}

function B() {
  var e, n, t;
  let {
    guild: s,
    section: o,
    analyticsLocation: a,
    guildMetadata: O,
    isGuildMetadataLoaded: R
  } = (0, r.cf)([C.A], () => C.A.getProps()), {
    analyticsLocations: U
  } = (0, c.Ay)(u.A.GUILD_SETTINGS), w = (0, r.bG)([T.A], () => T.A.theme), y = (0, G.NC)(), B = (0, r.bG)([h.Ay], () => null != s ? h.Ay.getChannels(s.id).SELECTABLE : null, [s]), j = (0, r.cf)([M.A], () => null != s ? M.A.getGuildPermissionProps(s) : v), H = null == s ? true : s.id, x = (0, r.bG)([M.A], () => null != s && M.A.canAccessGuildSettings(s));
  i.useEffect(() => {
    R || null == H || (0, E.mo)(H)
  }, [R, H]);
  let W = null != (e = null == s ? true : s.features.has(L.GuildFeatures.COMMUNITY)) && e;
  i.useEffect(() => {
    null != H && W && ((0, d.jx)(H), (0, f.Fy)(H))
  }, [H, W]), i.useEffect(() => {
    null != H && (0, _.ag)(H)
  }, [H]);
  let F = (0, r.bG)([S.A], () => {
      var e;
      return (null == s ? true : s.id) != null && (null == (e = S.A.getForGuild(s.id)) ? true : e.isDirty) === true
    }, [s]),
    k = (0, r.bG)([D.A], () => D.A.getMemberCount(null == s ? true : s.id), [s]);
  i.useEffect(() => {
    null != H && j.canManageGuild && A.A.loadTemplatesForGuild(H)
  }, [H, j.canManageGuild]), i.useEffect(() => {
    x || m.A.close()
  }, [x]);
  let X = (0, r.bG)([p.A], () => p.A.getCurrentPage()),
    V = (0, r.bG)([I.A], () => null != H && I.A.getEnabled(H)),
    q = (0, r.bG)([b.A], () => null != H && b.A.isEmpty(H)),
    J = (0, N.A)(H).length > 0,
    Y = (0, g.A)(s);
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
      theme: w,
      sidebarTheme: y,
      channels: B,
      showDirtyGuildTemplateIndicator: F,
      analyticsLocation: a,
      memberCount: k
    }, j), t = t = {
      canUnlinkChannels: J,
      canViewGuildAnalytics: j.canViewGuildAnalytics,
      onboardingStep: X,
      onboardingEnabled: V,
      welcomeScreenEmpty: q,
      guildMetadata: O,
      permissionMigrationAvailable: Y
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