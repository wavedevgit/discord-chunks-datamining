/** Chunk was on 95140 **/
/** chunk id: 994763, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk37234 = require("./37234.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk456268 = require("./456268.js"),
  Chunk745752 = require("./745752.js"),
  Chunk45966 = require("./45966.js"),
  Chunk526120 = require("./526120.js"),
  Chunk751189 = require("./751189.js"),
  Chunk409059 = require("./409059.js"),
  Chunk918658 = require("./918658.jsx"),
  Chunk163400 = require("./163400.js"),
  Chunk194201 = require("./194201.js"),
  Chunk984802 = require("./984802.js"),
  Chunk210887 = require("./210887.js"),
  Chunk524329 = require("./524329.js"),
  Chunk995532 = require("./995532.js"),
  Chunk984933 = require("./984933.js"),
  Chunk650774 = require("./650774.js"),
  Chunk496675 = require("./496675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk359191 = require("./359191.js"),
  Chunk896007 = require("./896007.js"),
  Chunk978946 = require("./978946.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function L(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    t = arguments.length > 2 ? arguments[2] : true;
  a.ZP.trackWithMetadata(v.rMx.SETTINGS_PANE_VIEWED, {
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
class Z extends Chunk473749.PureComponent {
  componentDidMount() {
    L(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    p.Z.close()
  }
  componentDidUpdate(e) {
    let {
      section: n
    } = e, {
      section: t,
      isGuildAdmin: l,
      canManageGuild: i,
      canManageRoles: r,
      canManageBans: u,
      canManageNicknames: o,
      canManageGuildExpressions: a,
      canViewAuditLog: c,
      canManageWebhooks: d,
      canUnlinkChannels: E,
      canAccessMembersPage: I,
      canViewGuildAnalytics: _
    } = this.props;
    t !== n && L(t, n), (l || i || r || u || o || a || c || I || d || E) && (c || t !== v.pNK.AUDIT_LOG) && (r || t !== v.pNK.ROLES) && (a || t !== v.pNK.EMOJI) && (a || t !== v.pNK.STICKERS) && (a || t !== v.pNK.SOUNDBOARD) && (u || t !== v.pNK.BANS) && (_ || t !== v.pNK.ANALYTICS) && (I || t !== v.pNK.MEMBERS) || (0, s.xf)()
  }
  render() {
    var e, n;
    let {
      theme: t,
      sidebarTheme: i,
      section: r,
      guild: o,
      isGuildAdmin: a,
      canManageGuild: c,
      canViewAuditLog: d,
      canManageRoles: E,
      canManageGuildExpressions: I,
      canManageWebhooks: _,
      canUnlinkChannels: S,
      canManageBans: N,
      canAccessMembersPage: g,
      canViewGuildAnalytics: f,
      isOwner: T,
      isOwnerWithRequiredMfaLevel: G,
      showDirtyGuildTemplateIndicator: h,
      memberCount: A,
      onboardingStep: D,
      onboardingEnabled: b,
      welcomeScreenEmpty: M,
      guildMetadata: C,
      permissionMigrationAvailable: m
    } = this.props;
    if (null == o) return null;
    let v = (0, R.vE)({
        guild: o,
        isGuildAdmin: a,
        canManageGuild: c,
        canViewAuditLog: d,
        canManageRoles: E,
        canManageGuildExpressions: I,
        canManageWebhooks: _,
        canUnlinkChannels: S,
        canManageBans: N,
        canAccessMembersPage: g,
        canViewGuildAnalytics: f,
        isOwner: T,
        isOwnerWithRequiredMfaLevel: G,
        showDirtyGuildTemplateIndicator: h,
        memberCount: A,
        onboardingStep: D,
        onboardingEnabled: b,
        welcomeScreenEmpty: M,
        guildMetadata: C,
        section: r,
        permissionMigrationAvailable: m
      }),
      L = (null == (n = v.find(e => e.section === r)) || null == (e = n.predicate) ? true : e.call(n)) !== false,
      w = (0, P.r)();
    return (0, l.jsxs)("div", {
      children: [(0, l.jsx)(u.ZP, {
        theme: t,
        sidebarTheme: i,
        section: L && null != r ? r : w,
        onSetSection: p.Z.setSection,
        onClose: s.xf,
        title: "" !== o.name ? o.name : U.intl.string(U.t["154/bL"]),
        sections: v
      }), (0, l.jsx)(O.d, {
        guildId: o.id
      })]
    })
  }
}

function y() {
  var e, n, t;
  let {
    guild: s,
    section: u,
    analyticsLocation: a,
    guildMetadata: O,
    isGuildMetadataLoaded: R
  } = (0, r.cj)([C.Z], () => C.Z.getProps()), {
    analyticsLocations: P
  } = (0, c.ZP)(o.Z.GUILD_SETTINGS), U = (0, r.e7)([G.Z], () => G.Z.theme), L = (0, T.Ll)(), y = (0, r.e7)([D.ZP], () => null != s ? D.ZP.getChannels(s.id).SELECTABLE : null, [s]), j = (0, r.cj)([M.Z], () => null != s ? M.Z.getGuildPermissionProps(s) : w), B = null == s ? true : s.id, x = (0, r.e7)([M.Z], () => null != s && M.Z.canAccessGuildSettings(s));
  i.useEffect(() => {
    R || null == B || (0, d.aC)(B)
  }, [R, B]);
  let W = null != (e = null == s ? true : s.features.has(v.GuildFeatures.COMMUNITY)) && e;
  i.useEffect(() => {
    null != B && W && ((0, E.eM)(B), (0, h.RM)(B))
  }, [B, W]), i.useEffect(() => {
    null != B && (0, _.cP)(B)
  }, [B]);
  let H = (0, r.e7)([N.Z], () => {
      var e;
      return (null == s ? true : s.id) != null && (null == (e = N.Z.getForGuild(s.id)) ? true : e.isDirty) === true
    }, [s]),
    F = (0, r.e7)([b.Z], () => b.Z.getMemberCount(null == s ? true : s.id), [s]);
  i.useEffect(() => {
    null != B && j.canManageGuild && S.Z.loadTemplatesForGuild(B)
  }, [B, j.canManageGuild]), i.useEffect(() => {
    x || p.Z.close()
  }, [x]);
  let K = (0, r.e7)([m.Z], () => m.Z.getCurrentPage()),
    k = (0, r.e7)([I.Z], () => null != B && I.Z.getEnabled(B)),
    V = (0, r.e7)([A.Z], () => null != B && A.Z.isEmpty(B)),
    Y = (0, g.F)(B).length > 0,
    q = (0, f.Z)(s);
  return (0, l.jsx)(c.Gt, {
    value: P,
    children: (0, l.jsx)(Z, (n = function(e) {
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
      section: u,
      theme: U,
      sidebarTheme: L,
      channels: y,
      showDirtyGuildTemplateIndicator: H,
      analyticsLocation: a,
      memberCount: F
    }, j), t = t = {
      canUnlinkChannels: Y,
      canViewGuildAnalytics: j.canViewGuildAnalytics,
      onboardingStep: K,
      onboardingEnabled: k,
      welcomeScreenEmpty: V,
      guildMetadata: O,
      permissionMigrationAvailable: q
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