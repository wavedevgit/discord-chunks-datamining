/** Chunk was on web.js **/
/** chunk id: 607018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk479531 = require("./479531.js"),
  Chunk144114 = require("./144114.js"),
  Chunk145454 = require("./145454.jsx"),
  Chunk23434 = require("./23434.js"),
  Chunk594174 = require("./594174.js"),
  Chunk1964 = require("./1964.js"),
  Chunk355497 = require("./355497.jsx"),
  Chunk388032 = require("./388032.jsx");
let _ = Chunk473749.forwardRef(function(e, t) {
  let {
    onAddedPhone: n,
    onClose: _,
    transitionState: m,
    reason: h,
    layerContext: g
  } = e, E = (0, a.e7)([u.default], () => u.default.getCurrentUser()), b = (0, a.e7)([c.Z], () => c.Z.getAction()), [y, O] = i.useState(null), [v, S] = i.useState(null), [I, T] = i.useState(null), [A, C] = i.useState(false), N = i.useCallback(async e => {
    C(true);
    try {
      d.Z.isPhoneReverification(E, b) ? await s.Z.beginReverifyPhone(e, h) : await s.Z.beginAddPhone(e, h), T(null), O(e)
    } catch (e) {
      T(new o.Z(e))
    }
    C(false)
  }, [E, h, b]), P = i.useCallback(async e => {
    if (null != y && null != E) {
      C(true);
      try {
        let {
          token: t
        } = await s.Z.verifyPhone(y, e);
        T(null), S(t)
      } catch (e) {
        T(new o.Z(e))
      }
      C(false)
    }
  }, [E, y]), R = i.useCallback(async e => {
    null != v && (d.Z.isPhoneReverification(E, b) ? await s.Z.reverifyPhone(v, e, h) : await s.Z.addPhone(v, e, h), null == n || n(), _())
  }, [n, _, v, h, E, b]);
  return null != v ? (0, r.jsx)(f.Z, {
    onClose: _,
    transitionState: m,
    title: p.intl.string(p.t.ZtCDc2),
    handleSubmit: R
  }) : (0, r.jsx)(l.default, {
    onClose: _,
    transitionState: m,
    error: null == I ? true : I.getAnyErrorMessage(),
    working: A,
    validPhone: null != y,
    onAddPhone: N,
    onVerifyPhone: P,
    layerContext: g
  })
})