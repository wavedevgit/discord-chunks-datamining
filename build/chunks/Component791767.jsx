/** Chunk was on 21738 **/
/** chunk id: 791767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk361158 = require("./361158.jsx"),
  Chunk80556 = require("./80556.js"),
  Chunk159329 = require("./159329.js"),
  Chunk163679 = require("./163679.jsx"),
  Chunk446868 = require("./446868.js"),
  Chunk524134 = require("./524134.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk536194 = require("./536194.js"),
  Chunk639719 = require("./639719.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk53516 = require("./53516.js"),
  Chunk87404 = require("./87404.js"),
  Chunk818348 = require("./818348.js");
let E = {
  init() {
    l.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction), l.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction), l.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate), p.default.addChangeListener(this.handleAuthenticationStoreChanged)
  },
  handleRequiredAction(e) {
    let t = e.requiredAction;
    !h.P.isDisallowPopupsSet() && null != f.default.getCurrentUser() && (t === g.a3B.REQUIRE_CAPTCHA || t === g.a3B.REQUIRE_VERIFIED_EMAIL || t === g.a3B.REQUIRE_VERIFIED_PHONE || t === g.a3B.REQUIRE_REVERIFIED_PHONE || t === g.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE || t === g.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === g.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || u.A.isEmailReverification(t) ? (0, o.P3)({
      location: "verification-legacy"
    }) ? (0, a.B8)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, r.jsx)(c.A, {
        onClose: t
      })
    }, {
      layerKey: b._s,
      Layer: s.Ay
    }) : (0, a.B8)(() => (0, r.jsx)(d.A, {}), {
      layerKey: b._s,
      Layer: s.Ay
    }) : t === g.a3B.AGREEMENTS ? (0, i.qfG)(e => (0, r.jsx)(A.default, function(e) {
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
    }({}, e)), {
      modalKey: b.i$,
      onCloseRequest: _.FX,
      dismissable: false
    }) : t === g.a3B.REQUIRE_SAFETY_FLOWS ? (0, a.B8)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, r.jsx)(c.A, {
        onClose: t
      })
    }, {
      layerKey: b._s,
      Layer: s.Ay
    }) : null == t && ((0, a.dF)(b._s), (0, i.kBI)(b.i$) && (0, i.OoC)(b.i$)))
  },
  handleAuthenticationStoreChanged() {
    null == p.default.getId() && ((0, a.dF)(b._s), (0, i.OoC)(b.i$), (0, i.OoC)(b.Pr), (0, i.OoC)(b.H1), (0, i.OoC)(m.V))
  },
  handleCurrentUserUpdate(e) {
    let {
      user: t
    } = e;
    t.verified && (0, i.OoC)(b.H1)
  }
}