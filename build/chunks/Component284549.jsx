/** Chunk was on 35401 **/
/** chunk id: 284549, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
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
let f = t => {
  let {
    transitionState: e,
    onClose: n
  } = t, f = (0, l.e7)([p.Z], () => p.Z.getErrors()), y = (0, l.e7)([p.Z], () => p.Z.getFormState()), v = (0, l.e7)([g.default], () => g.default.getCurrentUser()), E = (0, l.e7)([u.Z], () => u.Z.getAction()), b = !c.Z.isEmailReverification(E), [k, w] = i.useState(true), P = y === m.QZA.SUBMITTING;

  function R(t) {
    var e, n;
    return null != (n = null == f || null == (e = f[t]) ? true : e[0]) ? n : ""
  }
  let Z = R("email"),
    S = R("password");
  return (0, s.jsx)(h.Z, {
    transitionState: e,
    email: null == v ? true : v.email,
    emailError: Z,
    passwordError: S,
    submitting: P,
    canResend: k && !P && (null == v ? true : v.email) != null && 0 === Z.length && 0 === S.length,
    canChange: b,
    onChangeEmailClick: function() {
      w(false)
    },
    onVerify: function(t, e) {
      (0, o.Mn)({
        email: t,
        password: e
      }).then(t => {
        if (!(null == t ? true : t.ok)) {
          var e;
          (null == t || null == (e = t.body) ? true : e.username) != null ? (0, d.P)() : 0 === S.length && 0 === Z.length && (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.R0RpRX), a.ToastType.FAILURE))
        }
      }), w(true)
    },
    onResend: function() {
      r.Z.verifyResend()
    },
    onClose: n
  })
}