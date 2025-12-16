/** Chunk was on web.js **/
/** chunk id: 393681, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => k,
  Z: () => G
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk816814 = require("./816814.js"),
  Chunk809206 = require("./809206.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk332473 = require("./332473.js"),
  Chunk518560 = require("./518560.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk577275 = require("./577275.js"),
  Chunk484459 = require("./484459.js"),
  Chunk325067 = require("./325067.js"),
  Chunk246946 = require("./246946.js"),
  Chunk663389 = require("./663389.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk730820 = require("./730820.jsx"),
  Chunk562436 = require("./562436.jsx"),
  Chunk354255 = require("./354255.jsx"),
  Chunk499311 = require("./499311.jsx"),
  Chunk47863 = require("./47863.jsx"),
  Chunk732521 = require("./732521.jsx"),
  Chunk2719 = require("./2719.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk335094 = require("./335094.js"),
  k = function(e) {
    return e.SECURITY = "SECURITY", e.STANDING = "STANDING", e
  }({});
class U extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, Chunk484459.Z)(module.id, module.getAvatarURL(true, 80))
  }
  componentWillUnmount() {
    Chunk816814.Z.clearBackupCodes(), (0, Chunk809206.Zy)()
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: t
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
      className: Chunk335094.userSettingsSecurity,
      label: Chunk388032.intl.string(Chunk388032.t.pKSjEj),
      children: [exports.mfaEnabled ? (0, Chunk54381.jsx)(Chunk562436.Z, {}) : null, (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_CHANGE_PASSWORD,
        children: (0, Chunk54381.jsx)(Chunk354255.Z, {})
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        children: (0, Chunk54381.jsx)(Chunk730820.Z, {
          backupCodes: module
        })
      })]
    })
  }
  renderSecuritySettingsRedesign() {
    let {
      currentUser: e,
      userTeamsLoading: t,
      userTeams: n
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk481060.l09, {
      children: [(0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_PROFILE,
        children: [this.props.shouldRenderPomeloWarning && (0, Chunk54381.jsx)(Chunk499311.Z, {}), (0, Chunk54381.jsx)(Chunk732521.Z, {
          currentUser: this.props.currentUser
        }), (0, Chunk54381.jsx)(Chunk2719.Z, {})]
      }), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
        children: this.renderSecuritySettings()
      }), (0, Chunk54381.jsxs)(Chunk921801.F, {
        setting: Chunk726985.s6.ACCOUNT_REMOVAL,
        children: [(0, Chunk54381.jsx)(Chunk481060.izJ, {}), (0, Chunk54381.jsx)(Chunk47863.Z, {
          currentUser: module,
          userTeamsLoading: exports,
          userTeams: require
        })]
      })]
    })
  }
  renderUnhidden() {
    let {
      subsection: e
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk10298.N, {
      header: Chunk388032.intl.string(Chunk388032.t["JAIM/m"]),
      children: (0, Chunk54381.jsx)(Chunk526156.Z, {
        parentSetting: Chunk726985.s6.ACCOUNT,
        settingsSection: Chunk981631.oAB.ACCOUNT,
        panelClassName: Chunk335094.tabPanel,
        onTabChange: e => {
          O.default.track(L.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
            target_tab_name: e === x.s6.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
          })
        },
        defaultTabIndex: "ACCOUNT_STANDING" === module ? 1 : true,
        tabs: [{
          title: Chunk388032.intl.string(Chunk388032.t.Am9YHi),
          component: () => this.renderSecuritySettingsRedesign(),
          setting: Chunk726985.s6.ACCOUNT_SECURITY_TAB
        }, {
          title: Chunk388032.intl.string(Chunk388032.t["Vov/9o"]),
          component: Chunk518560.Z,
          setting: Chunk726985.s6.PRIVACY_AND_SAFETY_STANDING
        }]
      })
    })
  }
  render() {
    return this.props.hide ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : this.renderUnhidden()
  }
}
let G = () => {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return o()(null != module, "ConnectedUserAccountSettings: currentUser cannot be undefined"), module
    }),
    t = (0, Chunk442837.e7)([Chunk325067.Z], () => Chunk325067.Z.getBackupCodes()),
    n = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
    i = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    a = (0, Chunk332473.b)(),
    l = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    c = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    {
      teams: u,
      loading: d
    } = (0, Chunk577275.Z)({
      refreshOnDepChange: true
    });
  return (0, Chunk54381.jsx)(U, {
    theme: Chunk473749,
    currentUser: module,
    backupCodes: exports,
    hide: require,
    shouldRenderPomeloWarning: Chunk512722,
    locale: Chunk481060,
    subsection: Chunk816814,
    userTeams: Chunk809206,
    userTeamsLoading: Chunk497321
  })
}