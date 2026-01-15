/** Chunk was on web.js **/
/** chunk id: 730820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.jsx"),
  Chunk778764 = require("./778764.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk325067 = require("./325067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk287880 = require("./287880.js"),
  Chunk805244 = require("./805244.jsx"),
  Chunk616495 = require("./616495.jsx"),
  Chunk905935 = require("./905935.jsx"),
  Chunk867289 = require("./867289.jsx"),
  Chunk217801 = require("./217801.jsx"),
  Chunk453706 = require("./453706.jsx"),
  Chunk726985 = require("./726985.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
class I extends Chunk473749.PureComponent {
  renderEnabled() {
    let {
      backupCodes: e,
      hasTOTPEnabled: t,
      currentUser: n,
      togglingSMS: i
    } = this.props;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(h.Z, {
        backupCodes: e,
        currentUser: n,
        hasTOTPEnabled: t
      }), e.length > 0 && (0, r.jsxs)(l.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(m.Z, {
          backupCodes: e
        }), (0, r.jsx)(l.izJ, {})]
      }), t && (0, r.jsx)(c.F, {
        setting: O.s6.ACCOUNT_SMS_BACKUP,
        children: (0, r.jsx)(E.Z, {
          currentUser: n,
          togglingSMS: i
        })
      }), (0, r.jsx)(c.F, {
        setting: O.s6.ACCOUNT_SECURITY_KEYS,
        children: (0, r.jsx)(u.Z, {})
      })]
    })
  }
  renderDisabled() {
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.Z, {}), (0, r.jsx)(u.Z, {})]
    })
  }
  render() {
    let {
      currentUser: e
    } = this.props;
    return _.uZ ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, r.jsx)(y.Z, {}) : (0, r.jsx)(b.Z, {})
  }
}

function T(e) {
  let t = (0, s.e7)([p.default], () => p.default.getCurrentUser());
  o()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
  let n = (0, s.cj)([f.Z, d.default], () => ({
    togglingSMS: f.Z.togglingSMS,
    hasTOTPEnabled: d.default.hasTOTPEnabled()
  }));
  return (0, r.jsx)(I, S({
    currentUser: t
  }, n, e))
}