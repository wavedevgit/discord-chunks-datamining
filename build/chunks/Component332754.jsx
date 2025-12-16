/** Chunk was on 1272 **/
/** chunk id: 332754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk84615 = require("./84615.jsx"),
  Chunk429142 = require("./429142.js"),
  Chunk886412 = require("./886412.js"),
  Chunk918714 = require("./918714.jsx"),
  Chunk1964 = require("./1964.js"),
  Chunk852758 = require("./852758.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk374023 = require("./374023.js"),
  Chunk133876 = require("./133876.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk308569 = require("./308569.js"),
  Chunk231338 = require("./231338.js");
let O = {
  init() {
    Chunk570140.Z.subscribe("CONNECTION_OPEN", this.handleRequiredAction), Chunk570140.Z.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction), Chunk570140.Z.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate), Chunk314897.default.addChangeListener(this.handleAuthenticationStoreChanged)
  },
  handleRequiredAction(e) {
    let t = e.requiredAction;
    !g.s.isDisallowPopupsSet() && null != f.default.getCurrentUser() && (t === m.c2C.REQUIRE_CAPTCHA || t === m.c2C.REQUIRE_VERIFIED_EMAIL || t === m.c2C.REQUIRE_VERIFIED_PHONE || t === m.c2C.REQUIRE_REVERIFIED_PHONE || t === m.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE || t === m.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === m.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || u.Z.isEmailReverification(t) ? (0, o.bu)({
      location: "verification-legacy"
    }) ? (0, a.q4)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, r.jsx)(c.Z, {
        onClose: t
      })
    }, {
      layerKey: _.CV,
      Layer: s.ZP
    }) : (0, a.q4)(() => (0, r.jsx)(d.Z, {}), {
      layerKey: _.CV,
      Layer: s.ZP
    }) : t === m.c2C.AGREEMENTS ? (0, i.h7j)(e => (0, r.jsx)(h.default, function(e) {
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
      modalKey: _.f1,
      onCloseRequest: E.Vq,
      dismissable: false
    }) : t === m.c2C.REQUIRE_SAFETY_FLOWS ? (0, a.q4)(e => {
      let {
        closeLayer: t
      } = e;
      return (0, r.jsx)(c.Z, {
        onClose: t
      })
    }, {
      layerKey: _.CV,
      Layer: s.ZP
    }) : null == t && ((0, a.ob)(_.CV), (0, i.nfh)(_.f1) && (0, i.Mr3)(_.f1)))
  },
  handleAuthenticationStoreChanged() {
    null == Chunk314897.default.getId() && ((0, Chunk84615.ob)(Chunk308569.CV), (0, Chunk481060.Mr3)(Chunk308569.f1), (0, Chunk481060.Mr3)(Chunk308569.HR), (0, Chunk481060.Mr3)(Chunk308569.F0), (0, Chunk481060.Mr3)(Chunk815660.M))
  },
  handleCurrentUserUpdate(e) {
    let {
      user: t
    } = e;
    t.verified && (0, i.Mr3)(_.F0)
  }
}