/** Chunk was on 95988 **/
/** chunk id: 946815, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk631670 = require("./631670.js"),
  Chunk146634 = require("./146634.jsx"),
  Chunk592074 = require("./592074.js"),
  Chunk870570 = require("./870570.js"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk446868 = require("./446868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let f = t => {
  let {
    transitionState: e,
    onClose: s
  } = t, f = (0, l.bG)([g.A], () => g.A.getErrors()), y = (0, l.bG)([g.A], () => g.A.getFormState()), v = (0, l.bG)([p.default], () => p.default.getCurrentUser()), E = (0, l.bG)([u.A], () => u.A.getAction()), b = !c.A.isEmailReverification(E), [k, A] = i.useState(true), w = y === m.XlH.SUBMITTING;

  function P(t) {
    var e, s;
    return null != (e = null == f || null == (s = f[t]) ? true : s[0]) ? e : ""
  }
  let R = P("email"),
    S = P("password");
  return (0, n.jsx)(h.A, {
    transitionState: e,
    email: null == v ? true : v.email,
    emailError: R,
    passwordError: S,
    submitting: w,
    canResend: k && !w && (null == v ? true : v.email) != null && 0 === R.length && 0 === S.length,
    canChange: b,
    onChangeEmailClick: function() {
      A(false)
    },
    onVerify: function(t, e) {
      (0, o.yu)({
        email: t,
        password: e
      }).then(t => {
        if (!(null == t ? true : t.ok)) {
          var e;
          (null == t || null == (e = t.body) ? true : e.username) != null ? (0, d.E)() : 0 === S.length && 0 === R.length && (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.R0RpRX), a.ToastType.FAILURE))
        }
      }), A(true)
    },
    onResend: function() {
      r.A.verifyResend()
    },
    onClose: s
  })
}