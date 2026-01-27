/** Chunk was on 82575 **/
/** chunk id: 782844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H,
  D: () => M
});
var i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk98207 = require("./98207.js"),
  Chunk631670 = require("./631670.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk772786 = require("./772786.js"),
  Chunk210742 = require("./210742.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk130771 = require("./130771.js"),
  Chunk576622 = require("./576622.js"),
  Chunk670492 = require("./670492.js"),
  Chunk351906 = require("./351906.js"),
  Chunk628965 = require("./628965.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk773669 = require("./773669.js"),
  Chunk544028 = require("./544028.js"),
  Chunk740625 = require("./740625.jsx"),
  Chunk524738 = require("./524738.jsx"),
  Chunk972982 = require("./972982.jsx"),
  Chunk36535 = require("./36535.jsx"),
  Chunk299116 = require("./299116.jsx"),
  Chunk433410 = require("./433410.jsx"),
  Chunk457684 = require("./457684.jsx"),
  Chunk998252 = require("./998252.jsx"),
  Chunk980172 = require("./980172.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk139674 = require("./139674.js");

function V() {
  let e = (0, o.bG)([S.default], () => {
      let e = S.default.getCurrentUser();
      return a()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e
    }),
    t = (0, o.bG)([j.A], () => j.A.getBackupCodes()),
    n = (0, h.g)(),
    {
      teams: i,
      loading: l
    } = (0, A.A)({
      refreshOnDepChange: true
    });
  return (0, s.jsxs)(c.lVW, {
    children: [(0, s.jsxs)(p.x, {
      setting: D.H.ACCOUNT_PROFILE,
      children: [n && (0, s.jsx)(_.A, {}), (0, s.jsx)(G.A, {
        currentUser: e
      }), (0, s.jsx)(R.A, {})]
    }), (0, s.jsx)(p.x, {
      setting: D.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
      children: (0, s.jsxs)(c.nVY, {
        className: w.PN,
        label: k.intl.string(k.t.pKSjEj),
        children: [e.mfaEnabled ? (0, s.jsx)(N.A, {}) : null, (0, s.jsx)(p.x, {
          setting: D.H.ACCOUNT_CHANGE_PASSWORD,
          children: (0, s.jsx)(I.A, {})
        }), (0, s.jsx)(p.x, {
          setting: D.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
          children: (0, s.jsx)(y.A, {
            backupCodes: t
          })
        })]
      })
    }), (0, s.jsxs)(p.x, {
      setting: D.H.ACCOUNT_REMOVAL,
      children: [(0, s.jsx)(c.cGx, {}), (0, s.jsx)(P.A, {
        currentUser: e,
        userTeamsLoading: l,
        userTeams: i
      })]
    })]
  })
}
var M = ((i = {}).SECURITY = "SECURITY", i.STANDING = "STANDING", i);
class U extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, m.A)(e.id, e.getAvatarURL(true, 80))
  }
  componentWillUnmount() {
    d.A.clearBackupCodes(), (0, u.Uo)()
  }
  renderUnhidden() {
    let {
      subsection: e
    } = this.props;
    return (0, s.jsx)(T.R, {
      header: k.intl.string(k.t["JAIM/m"]),
      children: (0, s.jsx)(C.A, {
        parentSetting: D.H.ACCOUNT,
        settingsSection: L.nc_.ACCOUNT,
        panelClassName: w.SZ,
        onTabChange: e => {
          E.default.track(L.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
            target_tab_name: e === D.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
          })
        },
        defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : true,
        tabs: [{
          title: k.intl.string(k.t.Am9YHi),
          component: V,
          setting: D.H.ACCOUNT_SECURITY_TAB
        }, {
          title: k.intl.string(k.t["Vov/9o"]),
          component: x.A,
          setting: D.H.PRIVACY_AND_SAFETY_STANDING
        }]
      })
    })
  }
  render() {
    return this.props.hide ? (0, s.jsx)(g.A, {}) : this.renderUnhidden()
  }
}
let H = () => {
  let e = (0, o.bG)([S.default], () => S.default.getCurrentUser()),
    t = (0, o.bG)([b.A], () => b.A.hidePersonalInformation),
    n = (0, o.bG)([v.A], () => v.A.theme),
    i = (0, o.bG)([f.default], () => f.default.locale),
    l = (0, o.bG)([O.A], () => O.A.getSubsection());
  return null == e ? null : (0, s.jsx)(U, {
    theme: n,
    currentUser: e,
    hide: t,
    locale: i,
    subsection: l
  })
}