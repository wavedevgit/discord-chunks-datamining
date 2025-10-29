/** Chunk was on 98206 **/
/** chunk id: 994763, original params: e,n,t (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => j
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
  Chunk190263 = require("./190263.js"),
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

function G(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    t = arguments.length > 2 ? arguments[2] : true;
  s.ZP.trackWithMetadata(R.rMx.SETTINGS_PANE_VIEWED, {
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
class A extends Chunk647438.PureComponent {
  componentDidMount() {
    G(this.props.section, null, this.props.analyticsLocation)
  }
  componentWillUnmount() {
    Chunk434404.Z.close()
  }
  componentDidUpdate(e) {
    let {
      section: n
    } = e, {
      section: t,
      isGuildAdmin: r,
      canManageGuild: i,
      canManageRoles: a,
      canManageBans: c,
      canManageNicknames: l,
      canManageGuildExpressions: s,
      canViewAuditLog: u,
      canManageWebhooks: d,
      canUnlinkChannels: h,
      canAccessMembersPage: g,
      canViewGuildAnalytics: f
    } = this.props;
    t !== n && G(t, n), (r || i || a || c || l || s || u || g || d || h) && (u || t !== R.pNK.AUDIT_LOG) && (a || t !== R.pNK.ROLES) && (s || t !== R.pNK.EMOJI) && (s || t !== R.pNK.STICKERS) && (s || t !== R.pNK.SOUNDBOARD) && (c || t !== R.pNK.BANS) && (f || t !== R.pNK.ANALYTICS) && (g || t !== R.pNK.MEMBERS) || (0, o.xf)()
  }
  render() {
    var e, n;
    let {
      theme: t,
      sidebarTheme: i,
      section: a,
      guild: l,
      isGuildAdmin: s,
      canManageGuild: u,
      canViewAuditLog: d,
      canManageRoles: h,
      canManageGuildExpressions: g,
      canManageWebhooks: f,
      canUnlinkChannels: p,
      canManageBans: _,
      canAccessMembersPage: b,
      canViewGuildAnalytics: y,
      isOwner: I,
      isOwnerWithRequiredMfaLevel: S,
      showDirtyGuildTemplateIndicator: m,
      memberCount: C,
      onboardingStep: w,
      onboardingEnabled: O,
      welcomeScreenEmpty: D,
      guildMetadata: k,
      pinPermissionMigrationAvailable: E
    } = this.props;
    if (null == Chunk100527) return null;
    let R = (0, Chunk896007.vE)({
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
        canViewGuildAnalytics: Chunk190263,
        isOwner: Chunk984802,
        isOwnerWithRequiredMfaLevel: Chunk210887,
        showDirtyGuildTemplateIndicator: Chunk524329,
        memberCount: Chunk995532,
        onboardingStep: Chunk984933,
        onboardingEnabled: Chunk650774,
        welcomeScreenEmpty: Chunk496675,
        guildMetadata: Chunk999382,
        section: Chunk442837,
        pinPermissionMigrationAvailable: Chunk359191
      }),
      G = (null == (n = Chunk981631.find(e => e.section === a)) || null == (e = exports.predicate) ? true : module.call(exports)) !== false,
      L = (0, Chunk978946.r)();
    return (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk503089.ZP, {
        theme: require,
        sidebarTheme: Chunk647438,
        section: G && null != Chunk442837 ? Chunk442837 : L,
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

function j() {
  var e, n, t;
  let {
    guild: o,
    section: c,
    analyticsLocation: s,
    guildMetadata: v,
    isGuildMetadataLoaded: M
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps()), {
    analyticsLocations: T
  } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS), N = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), G = (0, Chunk984802.Ll)(), j = (0, Chunk442837.e7)([Chunk984933.ZP], () => null != Chunk37234 ? Chunk984933.ZP.getChannels(Chunk37234.id).SELECTABLE : null, [Chunk37234]), x = (0, Chunk442837.cj)([Chunk496675.Z], () => null != Chunk37234 ? Chunk496675.Z.getGuildPermissionProps(Chunk37234) : L), Z = null == Chunk37234 ? true : Chunk37234.id, U = (0, Chunk442837.e7)([Chunk496675.Z], () => null != Chunk37234 && Chunk496675.Z.canAccessGuildSettings(Chunk37234));
  Chunk647438.useEffect(() => {
    Chunk896007 || null == Z || (0, Chunk456268.aC)(Z)
  }, [Chunk896007, Z]);
  let H = null != (e = null == Chunk37234 ? true : Chunk37234.features.has(Chunk981631.GuildFeatures.COMMUNITY)) && module;
  Chunk647438.useEffect(() => {
    null != Z && H && ((0, Chunk745752.eM)(Z), (0, Chunk524329.RM)(Z))
  }, [Z, H]), Chunk647438.useEffect(() => {
    null != Z && (0, Chunk526120.cP)(Z)
  }, [Z]);
  let W = (0, Chunk442837.e7)([Chunk409059.Z], () => {
      var e;
      return (null == Chunk37234 ? true : Chunk37234.id) != null && (null == (e = Chunk409059.Z.getForGuild(Chunk37234.id)) ? true : module.isDirty) === true
    }, [Chunk37234]),
    B = (0, Chunk442837.e7)([Chunk650774.Z], () => Chunk650774.Z.getMemberCount(null == Chunk37234 ? true : Chunk37234.id), [Chunk37234]);
  Chunk647438.useEffect(() => {
    null != Z && x.canManageGuild && Chunk751189.Z.loadTemplatesForGuild(Z)
  }, [Z, x.canManageGuild]), Chunk647438.useEffect(() => {
    U || Chunk434404.Z.close()
  }, [U]);
  let F = (0, Chunk442837.e7)([Chunk359191.Z], () => Chunk359191.Z.getCurrentPage()),
    K = (0, Chunk442837.e7)([Chunk45966.Z], () => null != Z && Chunk45966.Z.getEnabled(Z)),
    Y = (0, Chunk442837.e7)([Chunk995532.Z], () => null != Z && Chunk995532.Z.isEmpty(Z)),
    z = (0, Chunk163400.F)(Z).length > 0,
    V = (0, Chunk190263.D)(Chunk37234);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: Chunk978946,
    children: (0, Chunk951288.jsx)(A, (n = function(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
          r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(n) {
          var r;
          r = t[n], n in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[n] = r
        })
      }
      return e
    }({
      guild: Chunk37234,
      section: Chunk503089,
      theme: Chunk388032,
      sidebarTheme: G,
      channels: j,
      showDirtyGuildTemplateIndicator: W,
      analyticsLocation: Chunk367907,
      memberCount: B
    }, x), t = t = {
      canUnlinkChannels: z,
      canViewGuildAnalytics: x.canViewGuildAnalytics,
      onboardingStep: F,
      onboardingEnabled: K,
      welcomeScreenEmpty: Y,
      guildMetadata: Chunk918658,
      pinPermissionMigrationAvailable: V
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(require)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t.push.apply(t, r)
      }
      return t
    })(Object(require)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), exports))
  })
}