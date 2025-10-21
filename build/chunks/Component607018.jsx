/** Chunk was on web.js **/
/** chunk id: 607018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk279837 = require("./279837.jsx"),
  Chunk479531 = require("./479531.js"),
  Chunk144114 = require("./144114.js"),
  Chunk145454 = require("./145454.jsx"),
  Chunk23434 = require("./23434.js"),
  Chunk594174 = require("./594174.js"),
  Chunk1964 = require("./1964.js"),
  Chunk388032 = require("./388032.jsx");
let p = Chunk647438.forwardRef(function(e, t) {
  let {
    onAddedPhone: n,
    onClose: p,
    transitionState: h,
    reason: m,
    layerContext: g
  } = e, E = (0, a.e7)([d.default], () => d.default.getCurrentUser()), b = (0, a.e7)([u.Z], () => u.Z.getAction()), [y, O] = i.useState(null), [v, I] = i.useState(null), [T, S] = i.useState(null), [A, C] = i.useState(false), N = i.useCallback(async e => {
    C(true);
    try {
      f.Z.isPhoneReverification(E, b) ? await l.Z.beginReverifyPhone(e, m) : await l.Z.beginAddPhone(e, m), S(null), O(e)
    } catch (e) {
      S(new s.Z(e))
    }
    C(false)
  }, [E, m, b]), R = i.useCallback(async e => {
    if (null != y && null != E) {
      C(true);
      try {
        let {
          token: t
        } = await l.Z.verifyPhone(y, e);
        S(null), I(t)
      } catch (e) {
        S(new s.Z(e))
      }
      C(false)
    }
  }, [E, y]), P = i.useCallback(async e => {
    null != v && (f.Z.isPhoneReverification(E, b) ? await l.Z.reverifyPhone(v, e, m) : await l.Z.addPhone(v, e, m), null == n || n(), p())
  }, [n, p, v, m, E, b]);
  return null != v ? (0, r.jsx)(o.Z, {
    onClose: p,
    transitionState: h,
    title: _.intl.string(_.t.ZtCDc2),
    handleSubmit: P
  }) : (0, r.jsx)(c.default, {
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