/** Chunk was on web.js **/
/** chunk id: 607018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk479531 = require("./479531.js"),
  Chunk144114 = require("./144114.js"),
  Chunk145454 = require("./145454.jsx"),
  Chunk23434 = require("./23434.js"),
  Chunk594174 = require("./594174.js"),
  Chunk1964 = require("./1964.js"),
  Chunk355497 = require("./355497.jsx"),
  Chunk388032 = require("./388032.jsx");
let p = Chunk647438.forwardRef(function(e, t) {
  let {
    onAddedPhone: n,
    onClose: p,
    transitionState: h,
    reason: m,
    layerContext: g
  } = e, E = (0, a.e7)([u.default], () => u.default.getCurrentUser()), b = (0, a.e7)([c.Z], () => c.Z.getAction()), [y, O] = i.useState(null), [v, I] = i.useState(null), [T, S] = i.useState(null), [A, C] = i.useState(false), N = i.useCallback(async e => {
    C(true);
    try {
      d.Z.isPhoneReverification(E, b) ? await s.Z.beginReverifyPhone(e, m) : await s.Z.beginAddPhone(e, m), S(null), O(e)
    } catch (e) {
      S(new o.Z(e))
    }
    C(false)
  }, [E, m, b]), R = i.useCallback(async e => {
    if (null != y && null != E) {
      C(true);
      try {
        let {
          token: t
        } = await s.Z.verifyPhone(y, e);
        S(null), I(t)
      } catch (e) {
        S(new o.Z(e))
      }
      C(false)
    }
  }, [E, y]), P = i.useCallback(async e => {
    null != v && (d.Z.isPhoneReverification(E, b) ? await s.Z.reverifyPhone(v, e, m) : await s.Z.addPhone(v, e, m), null == n || n(), p())
  }, [n, p, v, m, E, b]);
  return null != v ? (0, r.jsx)(f.Z, {
    onClose: p,
    transitionState: h,
    title: _.intl.string(_.t.ZtCDc2),
    handleSubmit: P
  }) : (0, r.jsx)(l.default, {
    onClose: p,
    transitionState: h,
    error: null == T ? true : T.getAnyErrorMessage(),
    working: A,
    validPhone: null != y,
    onAddPhone: N,
    onVerifyPhone: R,
    layerContext: g
  })
})