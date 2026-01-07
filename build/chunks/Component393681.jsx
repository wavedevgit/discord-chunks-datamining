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
  Chunk921801 = require("./921801.jsx"),
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
    (0, h.Z)(e.id, e.getAvatarURL(true, 80))
  }
  componentWillUnmount() {
    c.Z.clearBackupCodes(), (0, u.Zy)()
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: t
    } = this.props;
    return (0, r.jsxs)(l.C3N, {
      className: M.userSettingsSecurity,
      label: j.intl.string(j.t.pKSjEj),
      children: [t.mfaEnabled ? (0, r.jsx)(A.Z, {}) : null, (0, r.jsx)(_.F, {
        setting: x.s6.ACCOUNT_CHANGE_PASSWORD,
        children: (0, r.jsx)(N.Z, {})
      }), (0, r.jsx)(_.F, {
        setting: x.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        children: (0, r.jsx)(C.Z, {
          backupCodes: e
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
    return (0, r.jsxs)(l.l09, {
      children: [(0, r.jsxs)(_.F, {
        setting: x.s6.ACCOUNT_PROFILE,
        children: [this.props.shouldRenderPomeloWarning && (0, r.jsx)(P.Z, {}), (0, r.jsx)(w.Z, {
          currentUser: this.props.currentUser
        }), (0, r.jsx)(D.Z, {})]
      }), (0, r.jsx)(_.F, {
        setting: x.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
        children: this.renderSecuritySettings()
      }), (0, r.jsxs)(_.F, {
        setting: x.s6.ACCOUNT_REMOVAL,
        children: [(0, r.jsx)(l.izJ, {}), (0, r.jsx)(R.Z, {
          currentUser: e,
          userTeamsLoading: t,
          userTeams: n
        })]
      })]
    })
  }
  renderUnhidden() {
    let {
      subsection: e
    } = this.props;
    return (0, r.jsx)(I.N, {
      header: j.intl.string(j.t["JAIM/m"]),
      children: (0, r.jsx)(T.Z, {
        parentSetting: x.s6.ACCOUNT,
        settingsSection: L.oAB.ACCOUNT,
        panelClassName: M.tabPanel,
        onTabChange: e => {
          O.default.track(L.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
            target_tab_name: e === x.s6.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
          })
        },
        defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : true,
        tabs: [{
          title: j.intl.string(j.t.Am9YHi),
          component: () => this.renderSecuritySettingsRedesign(),
          setting: x.s6.ACCOUNT_SECURITY_TAB
        }, {
          title: j.intl.string(j.t["Vov/9o"]),
          component: p.Z,
          setting: x.s6.PRIVACY_AND_SAFETY_STANDING
        }]
      })
    })
  }
  render() {
    return this.props.hide ? (0, r.jsx)(d.Z, {}) : this.renderUnhidden()
  }
}
let G = () => {
  let e = (0, s.e7)([y.default], () => {
      let e = y.default.getCurrentUser();
      return o()(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e
    }),
    t = (0, s.e7)([g.Z], () => g.Z.getBackupCodes()),
    n = (0, s.e7)([E.Z], () => E.Z.hidePersonalInformation),
    i = (0, s.e7)([S.Z], () => S.Z.theme),
    a = (0, f.b)(),
    l = (0, s.e7)([v.default], () => v.default.locale),
    c = (0, s.e7)([b.Z], () => b.Z.getSubsection()),
    {
      teams: u,
      loading: d
    } = (0, m.Z)({
      refreshOnDepChange: true
    });
  return (0, r.jsx)(U, {
    theme: i,
    currentUser: e,
    backupCodes: t,
    hide: n,
    shouldRenderPomeloWarning: a,
    locale: l,
    subsection: c,
    userTeams: u,
    userTeamsLoading: d
  })
}