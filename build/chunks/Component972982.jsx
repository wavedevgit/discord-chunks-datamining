/** Chunk was on 9207 **/
/** chunk id: 972982, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk359990 = require("./359990.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk670492 = require("./670492.js"),
  Chunk287809 = require("./287809.js"),
  Chunk464477 = require("./464477.js"),
  Chunk709913 = require("./709913.jsx"),
  Chunk455611 = require("./455611.jsx"),
  Chunk858526 = require("./858526.jsx"),
  Chunk309198 = require("./309198.jsx"),
  Chunk978551 = require("./978551.jsx"),
  Chunk100817 = require("./100817.jsx"),
  Chunk531525 = require("./531525.js");
class x extends Chunk64700.PureComponent {
  renderEnabled() {
    let {
      backupCodes: e,
      hasTOTPEnabled: t,
      currentUser: n,
      togglingSMS: i
    } = this.props;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.A, {
        backupCodes: e,
        currentUser: n,
        hasTOTPEnabled: t
      }), e.length > 0 && (0, r.jsxs)(o.BJc, {
        gap: 16,
        children: [(0, r.jsx)(A.A, {
          backupCodes: e
        }), (0, r.jsx)(o.cGx, {})]
      }), t && (0, r.jsx)(c.x, {
        setting: O.H.ACCOUNT_SMS_BACKUP,
        children: (0, r.jsx)(b.A, {
          currentUser: n,
          togglingSMS: i
        })
      }), (0, r.jsx)(c.x, {
        setting: O.H.ACCOUNT_SECURITY_KEYS,
        children: (0, r.jsx)(d.A, {})
      })]
    })
  }
  renderDisabled() {
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.A, {}), (0, r.jsx)(d.A, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return m.K7 ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, r.jsx)(E.A, {}) : (0, r.jsx)(h.A, {})
  }
}

function C(e) {
  let t = (0, a.bG)([p.default], () => p.default.getCurrentUser());
  s()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let n = (0, a.cf)([_.A, u.default], () => ({
    togglingSMS: _.A.togglingSMS,
    hasTOTPEnabled: u.default.hasTOTPEnabled()
  }));
  return (0, r.jsx)(x, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    currentUser: t
  }, n, e))
}