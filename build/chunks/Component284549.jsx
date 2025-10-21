/** Chunk was on 35401 **/
/** chunk id: 284549, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk809206 = require("./809206.js"),
  Chunk704903 = require("./704903.jsx"),
  Chunk155433 = require("./155433.js"),
  Chunk23434 = require("./23434.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk1964 = require("./1964.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let C = e => {
  let {
    transitionState: t,
    onClose: i
  } = e, C = (0, a.e7)([u.Z], () => u.Z.getErrors()), v = (0, a.e7)([u.Z], () => u.Z.getFormState()), y = (0, a.e7)([m.default], () => m.default.getCurrentUser()), x = (0, a.e7)([c.Z], () => c.Z.getAction()), R = !g.Z.isEmailReverification(x), [_, b] = s.useState(true), I = v === p.QZA.SUBMITTING;

  function E(e) {
    var t, i;
    return null != (i = null == C || null == (t = C[e]) ? true : t[0]) ? i : ""
  }
  let j = E("email"),
    P = E("password");
  return (0, n.jsx)(h.Z, {
    transitionState: t,
    email: null == y ? true : y.email,
    emailError: j,
    passwordError: P,
    submitting: I,
    canResend: _ && !I && (null == y ? true : y.email) != null && 0 === j.length && 0 === P.length,
    canChange: R,
    onChangeEmailClick: function() {
      b(false)
    },
    onVerify: function(e, t) {
      (0, r.Mn)({
        email: e,
        password: t
      }).then(e => {
        if (!(null == e ? true : e.ok)) {
          var t;
          (null == e || null == (t = e.body) ? true : t.username) != null ? (0, d.P)() : 0 === P.length && 0 === j.length && (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.R0RpRX), l.ToastType.FAILURE))
        }
      }), b(true)
    },
    onResend: function() {
      o.Z.verifyResend()
    },
    onClose: i
  })
}