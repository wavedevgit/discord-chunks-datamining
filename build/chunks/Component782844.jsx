/** Chunk was on web.js **/
/** chunk id: 782844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V,
  D: () => U
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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

function k() {
  let e = (0, o.bG)([b.default], () => {
      let e = b.default.getCurrentUser();
      return s()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e
    }),
    t = (0, o.bG)([g.A], () => g.A.getBackupCodes()),
    n = (0, f.g)(),
    {
      teams: i,
      loading: a
    } = (0, h.A)({
      refreshOnDepChange: true
    });
  return (0, r.jsxs)(l.lVW, {
    children: [(0, r.jsxs)(_.x, {
      setting: x.H.ACCOUNT_PROFILE,
      children: [n && (0, r.jsx)(w.A, {}), (0, r.jsx)(P.A, {
        currentUser: e
      }), (0, r.jsx)(D.A, {})]
    }), (0, r.jsx)(_.x, {
      setting: x.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
      children: (0, r.jsxs)(l.nVY, {
        className: M.PN,
        label: j.intl.string(j.t.pKSjEj),
        children: [e.mfaEnabled ? (0, r.jsx)(C.A, {}) : null, (0, r.jsx)(_.x, {
          setting: x.H.ACCOUNT_CHANGE_PASSWORD,
          children: (0, r.jsx)(N.A, {})
        }), (0, r.jsx)(_.x, {
          setting: x.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
          children: (0, r.jsx)(T.A, {
            backupCodes: t
          })
        })]
      })
    }), (0, r.jsxs)(_.x, {
      setting: x.H.ACCOUNT_REMOVAL,
      children: [(0, r.jsx)(l.cGx, {}), (0, r.jsx)(R.A, {
        currentUser: e,
        userTeamsLoading: a,
        userTeams: i
      })]
    })]
  })
}
var U = function(e) {
  return e.SECURITY = "SECURITY", e.STANDING = "STANDING", e
}({});
class G extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, m.A)(e.id, e.getAvatarURL(true, 80))
  }
  componentWillUnmount() {
    c.A.clearBackupCodes(), (0, u.Uo)()
  }
  renderUnhidden() {
    let {
      subsection: e
    } = this.props;
    return (0, r.jsx)(I.R, {
      header: j.intl.string(j.t["JAIM/m"]),
      children: (0, r.jsx)(S.A, {
        parentSetting: x.H.ACCOUNT,
        settingsSection: L.nc_.ACCOUNT,
        panelClassName: M.SZ,
        onTabChange: e => {
          O.default.track(L.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
            target_tab_name: e === x.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
          })
        },
        defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : true,
        tabs: [{
          title: j.intl.string(j.t.Am9YHi),
          component: k,
          setting: x.H.ACCOUNT_SECURITY_TAB
        }, {
          title: j.intl.string(j.t["Vov/9o"]),
          component: p.A,
          setting: x.H.PRIVACY_AND_SAFETY_STANDING
        }]
      })
    })
  }
  render() {
    return this.props.hide ? (0, r.jsx)(d.A, {}) : this.renderUnhidden()
  }
}
let V = () => {
  let e = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
    t = (0, o.bG)([E.A], () => E.A.hidePersonalInformation),
    n = (0, o.bG)([A.A], () => A.A.theme),
    i = (0, o.bG)([v.default], () => v.default.locale),
    a = (0, o.bG)([y.A], () => y.A.getSubsection());
  return null == e ? null : (0, r.jsx)(G, {
    theme: n,
    currentUser: e,
    hide: t,
    locale: i,
    subsection: a
  })
}