/** Chunk was on 35401 **/
/** chunk id: 284549, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let C = t => {
  let {
    transitionState: e,
    onClose: i
  } = t, C = (0, a.e7)([c.Z], () => c.Z.getErrors()), v = (0, a.e7)([c.Z], () => c.Z.getFormState()), y = (0, a.e7)([m.default], () => m.default.getCurrentUser()), _ = (0, a.e7)([u.Z], () => u.Z.getAction()), x = !p.Z.isEmailReverification(_), [b, j] = s.useState(true), R = v === g.QZA.SUBMITTING;

  function E(t) {
    var e, i;
    return null != (i = null == C || null == (e = C[t]) ? true : e[0]) ? i : ""
  }
  let I = E("email"),
    P = E("password");
  return (0, n.jsx)(h.Z, {
    transitionState: e,
    email: null == y ? true : y.email,
    emailError: I,
    passwordError: P,
    submitting: R,
    canResend: b && !R && (null == y ? true : y.email) != null && 0 === I.length && 0 === P.length,
    canChange: x,
    onChangeEmailClick: function() {
      j(false)
    },
    onVerify: function(t, e) {
      (0, o.Mn)({
        email: t,
        password: e
      }).then(t => {
        if (!(null == t ? true : t.ok)) {
          var e;
          (null == t || null == (e = t.body) ? true : e.username) != null ? (0, d.P)() : 0 === P.length && 0 === I.length && (0, l.showToast)((0, l.createToast)(f.intl.string(f.t.R0RpRX), l.ToastType.FAILURE))
        }
      }), j(true)
    },
    onResend: function() {
      r.Z.verifyResend()
    },
    onClose: i
  })
}