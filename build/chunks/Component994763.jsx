/** Chunk was on 95140 **/
/** chunk id: 994763, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => R
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function w(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    t = arguments.length > 2 ? arguments[2] : true;
  u.ZP.trackWithMetadata(_.rMx.SETTINGS_PANE_VIEWED, {
    settings_type: "guild",
    origin_pane: n,
    destination_pane: e,
    location: t
  })
}
let L = {
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
class x extends Chunk647438.PureComponent {
  componentDidMount() {
    w(this.props.section, null, this.props.analyticsLocation)
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
      canManageRoles: a,
      canManageBans: o,
      canManageNicknames: s,
      canManageGuildExpressions: u,
      canViewAuditLog: c,
      canManageWebhooks: d,
      canUnlinkChannels: p,
      canAccessMembersPage: g,
      canViewGuildAnalytics: O
    } = this.props;
    t !== n && w(t, n), (l || i || a || o || s || u || c || g || d || p) && (c || t !== _.pNK.AUDIT_LOG) && (a || t !== _.pNK.ROLES) && (u || t !== _.pNK.EMOJI) && (u || t !== _.pNK.STICKERS) && (u || t !== _.pNK.SOUNDBOARD) && (o || t !== _.pNK.BANS) && (O || t !== _.pNK.ANALYTICS) && (g || t !== _.pNK.MEMBERS) || (0, r.xf)()
  }
  render() {
    var e, n;
    let {
      theme: t,
      sidebarTheme: i,
      section: a,
      guild: s,
      isGuildAdmin: u,
      canManageGuild: c,
      canViewAuditLog: d,
      canManageRoles: p,
      canManageGuildExpressions: g,
      canManageWebhooks: O,
      canUnlinkChannels: f,
      canManageBans: h,
      canAccessMembersPage: I,
      canViewGuildAnalytics: M,
      isOwner: E,
      isOwnerWithRequiredMfaLevel: m,
      showDirtyGuildTemplateIndicator: v,
      memberCount: P,
      onboardingStep: S,
      onboardingEnabled: Z,
      welcomeScreenEmpty: N,
      guildMetadata: G,
      permissionMigrationAvailable: A
    } = this.props;
    if (null == Chunk100527) return null;
    let _ = (0, Chunk896007.vE)({
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
      w = (null == (n = Chunk981631.find(e => e.section === a)) || null == (e = exports.predicate) ? true : module.call(exports)) !== false,
      L = (0, Chunk978946.r)();
    return (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk503089.ZP, {
        theme: require,
        sidebarTheme: Chunk647438,
        section: w && null != Chunk442837 ? Chunk442837 : L,
        onSetSection: Chunk434404.Z.setSection,
        onClose: Chunk37234.xf,
        title: "" !== Chunk100527.name ? Chunk100527.name : Chunk388032.intl.string(Chunk388032.t["154/bL"]),
        sections: Chunk981631
      }), (0, Chunk951288.jsx)(Chunk918658.d, {
        guildId: Chunk100527.id
      })]
    })
  }
}

function R() {
  var e, n, t;
  let {
    guild: r,
    section: o,
    analyticsLocation: u,
    guildMetadata: b,
    isGuildMetadataLoaded: j
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), {
    analyticsLocations: T
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS), C = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), w = (0, Chunk984802.Ll)(), R = (0, Chunk442837.e7)([Chunk984933.ZP], () => null != Chunk37234 ? Chunk984933.ZP.getChannels(Chunk37234.id).SELECTABLE : null, [Chunk37234]), D = (0, Chunk442837.cj)([Chunk496675.Z], () => null != Chunk37234 ? Chunk496675.Z.getGuildPermissionProps(Chunk37234) : L), K = null == Chunk37234 ? true : Chunk37234.id, k = (0, Chunk442837.e7)([Chunk496675.Z], () => null != Chunk37234 && Chunk496675.Z.canAccessGuildSettings(Chunk37234));
  Chunk647438.useEffect(() => {
    Chunk896007 || null == K || (0, Chunk456268.aC)(K)
  }, [Chunk896007, K]);
  let F = null != (e = null == Chunk37234 ? true : Chunk37234.features.has(Chunk981631.GuildFeatures.COMMUNITY)) && module;
  Chunk647438.useEffect(() => {
    null != K && F && ((0, Chunk745752.eM)(K), (0, Chunk524329.RM)(K))
  }, [K, F]), Chunk647438.useEffect(() => {
    null != K && (0, Chunk526120.cP)(K)
  }, [K]);
  let U = (0, Chunk442837.e7)([Chunk409059.Z], () => {
      var e;
      return (null == Chunk37234 ? true : Chunk37234.id) != null && (null == (e = Chunk409059.Z.getForGuild(Chunk37234.id)) ? true : module.isDirty) === true
    }, [Chunk37234]),
    W = (0, Chunk442837.e7)([Chunk650774.Z], () => Chunk650774.Z.getMemberCount(null == Chunk37234 ? true : Chunk37234.id), [Chunk37234]);
  Chunk647438.useEffect(() => {
    null != K && D.canManageGuild && Chunk751189.Z.loadTemplatesForGuild(K)
  }, [K, D.canManageGuild]), Chunk647438.useEffect(() => {
    k || Chunk434404.Z.close()
  }, [k]);
  let B = (0, Chunk442837.e7)([Chunk359191.Z], () => Chunk359191.Z.getCurrentPage()),
    V = (0, Chunk442837.e7)([Chunk45966.Z], () => null != K && Chunk45966.Z.getEnabled(K)),
    Y = (0, Chunk442837.e7)([Chunk995532.Z], () => null != K && Chunk995532.Z.isEmpty(K)),
    q = (0, Chunk163400.F)(K).length > 0,
    z = (0, Chunk194201.Z)(Chunk37234);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: Chunk978946,
    children: (0, Chunk951288.jsx)(x, (n = function(e) {
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
      sidebarTheme: w,
      channels: R,
      showDirtyGuildTemplateIndicator: U,
      analyticsLocation: Chunk367907,
      memberCount: W
    }, D), t = t = {
      canUnlinkChannels: q,
      canViewGuildAnalytics: D.canViewGuildAnalytics,
      onboardingStep: B,
      onboardingEnabled: V,
      welcomeScreenEmpty: Y,
      guildMetadata: Chunk918658,
      permissionMigrationAvailable: z
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