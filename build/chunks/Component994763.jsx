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
  a.ZP.trackWithMetadata(U.rMx.SETTINGS_PANE_VIEWED, {
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
    Chunk434404.Z.close()
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
    t !== n && L(t, n), (l || i || r || u || o || a || c || I || d || E) && (c || t !== U.pNK.AUDIT_LOG) && (r || t !== U.pNK.ROLES) && (a || t !== U.pNK.EMOJI) && (a || t !== U.pNK.STICKERS) && (a || t !== U.pNK.SOUNDBOARD) && (u || t !== U.pNK.BANS) && (_ || t !== U.pNK.ANALYTICS) && (I || t !== U.pNK.MEMBERS) || (0, s.xf)()
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
      onboardingEnabled: M,
      welcomeScreenEmpty: b,
      guildMetadata: p,
      permissionMigrationAvailable: m
    } = this.props;
    if (null == Chunk100527) return null;
    let U = (0, Chunk896007.vE)({
        guild: Chunk100527,
        isGuildAdmin: Chunk367907,
        canManageGuild: Chunk906732,
        canViewAuditLog: Chunk456268,
        canManageRoles: Chunk745752,
        canManageGuildExpressions: Chunk45966,
        canManageWebhooks: Chunk526120,
        canUnlinkChannels: Chunk751189,
        canManageBans: Chunk409059,
        canAccessMembersPage: Chunk163400,
        canViewGuildAnalytics: Chunk194201,
        isOwner: Chunk984802,
        isOwnerWithRequiredMfaLevel: Chunk210887,
        showDirtyGuildTemplateIndicator: Chunk524329,
        memberCount: Chunk995532,
        onboardingStep: Chunk984933,
        onboardingEnabled: Chunk650774,
        welcomeScreenEmpty: Chunk496675,
        guildMetadata: Chunk999382,
        section: Chunk442837,
        permissionMigrationAvailable: Chunk359191
      }),
      L = (null == (n = Chunk981631.find(e => e.section === r)) || null == (e = exports.predicate) ? true : module.call(exports)) !== false,
      w = (0, Chunk978946.r)();
    return (0, Chunk54381.jsxs)("div", {
      children: [(0, Chunk54381.jsx)(Chunk503089.ZP, {
        theme: require,
        sidebarTheme: Chunk473749,
        section: L && null != Chunk442837 ? Chunk442837 : w,
        onSetSection: Chunk434404.Z.setSection,
        onClose: Chunk37234.xf,
        title: "" !== Chunk100527.name ? Chunk100527.name : Chunk388032.intl.string(Chunk388032.t["154/bL"]),
        sections: Chunk981631
      }), (0, Chunk54381.jsx)(Chunk918658.d, {
        guildId: Chunk100527.id
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
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), {
    analyticsLocations: P
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS), v = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), L = (0, Chunk984802.Ll)(), y = (0, Chunk442837.e7)([Chunk984933.ZP], () => null != Chunk37234 ? Chunk984933.ZP.getChannels(Chunk37234.id).SELECTABLE : null, [Chunk37234]), j = (0, Chunk442837.cj)([Chunk496675.Z], () => null != Chunk37234 ? Chunk496675.Z.getGuildPermissionProps(Chunk37234) : w), B = null == Chunk37234 ? true : Chunk37234.id, x = (0, Chunk442837.e7)([Chunk496675.Z], () => null != Chunk37234 && Chunk496675.Z.canAccessGuildSettings(Chunk37234));
  Chunk473749.useEffect(() => {
    Chunk896007 || null == B || (0, Chunk456268.aC)(B)
  }, [Chunk896007, B]);
  let W = null != (e = null == Chunk37234 ? true : Chunk37234.features.has(Chunk981631.GuildFeatures.COMMUNITY)) && module;
  Chunk473749.useEffect(() => {
    null != B && W && ((0, Chunk745752.eM)(B), (0, Chunk524329.RM)(B))
  }, [B, W]), Chunk473749.useEffect(() => {
    null != B && (0, Chunk526120.cP)(B)
  }, [B]);
  let H = (0, Chunk442837.e7)([Chunk409059.Z], () => {
      var e;
      return (null == Chunk37234 ? true : Chunk37234.id) != null && (null == (e = Chunk409059.Z.getForGuild(Chunk37234.id)) ? true : module.isDirty) === true
    }, [Chunk37234]),
    F = (0, Chunk442837.e7)([Chunk650774.Z], () => Chunk650774.Z.getMemberCount(null == Chunk37234 ? true : Chunk37234.id), [Chunk37234]);
  Chunk473749.useEffect(() => {
    null != B && j.canManageGuild && Chunk751189.Z.loadTemplatesForGuild(B)
  }, [B, j.canManageGuild]), Chunk473749.useEffect(() => {
    x || Chunk434404.Z.close()
  }, [x]);
  let K = (0, Chunk442837.e7)([Chunk359191.Z], () => Chunk359191.Z.getCurrentPage()),
    k = (0, Chunk442837.e7)([Chunk45966.Z], () => null != B && Chunk45966.Z.getEnabled(B)),
    V = (0, Chunk442837.e7)([Chunk995532.Z], () => null != B && Chunk995532.Z.isEmpty(B)),
    Y = (0, Chunk163400.F)(B).length > 0,
    q = (0, Chunk194201.Z)(Chunk37234);
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: Chunk978946,
    children: (0, Chunk54381.jsx)(Z, (n = function(e) {
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
      guild: Chunk37234,
      section: Chunk503089,
      theme: Chunk388032,
      sidebarTheme: L,
      channels: y,
      showDirtyGuildTemplateIndicator: H,
      analyticsLocation: Chunk367907,
      memberCount: F
    }, j), t = t = {
      canUnlinkChannels: Y,
      canViewGuildAnalytics: j.canViewGuildAnalytics,
      onboardingStep: K,
      onboardingEnabled: k,
      welcomeScreenEmpty: V,
      guildMetadata: Chunk918658,
      permissionMigrationAvailable: q
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(require)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        t.push.apply(t, l)
      }
      return t
    })(Object(require)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), exports))
  })
}