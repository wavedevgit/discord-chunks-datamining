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
    reason: m
  } = e, g = (0, a.e7)([d.default], () => d.default.getCurrentUser()), E = (0, a.e7)([u.Z], () => u.Z.getAction()), [b, y] = i.useState(null), [O, v] = i.useState(null), [I, T] = i.useState(null), [S, A] = i.useState(false), C = i.useCallback(async e => {
    A(true);
    try {
      f.Z.isPhoneReverification(g, E) ? await l.Z.beginReverifyPhone(e, m) : await l.Z.beginAddPhone(e, m), T(null), y(e)
    } catch (e) {
      T(new s.Z(e))
    }
    A(false)
  }, [g, m, E]), N = i.useCallback(async e => {
    if (null != b && null != g) {
      A(true);
      try {
        let {
          token: t
        } = await l.Z.verifyPhone(b, e);
        T(null), v(t)
      } catch (e) {
        T(new s.Z(e))
      }
      A(false)
    }
  }, [g, b]), R = i.useCallback(async e => {
    null != O && (f.Z.isPhoneReverification(g, E) ? await l.Z.reverifyPhone(O, e, m) : await l.Z.addPhone(O, e, m), null == n || n(), p())
  }, [n, p, O, m, g, E]);
  return null != O ? (0, r.jsx)(o.Z, {
    onClose: p,
    transitionState: h,
    title: _.intl.string(_.t.ZtCDc3),
    handleSubmit: R
  }) : (0, r.jsx)(c.Z, {
    onClose: p,
    transitionState: h,
    error: null == I ? true : I.getAnyErrorMessage(),
    working: S,
    validPhone: null != b,
    onAddPhone: C,
    onVerifyPhone: N
  })
})