/** Chunk was on web.js **/
/** chunk id: 615715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk181658 = require("./181658.js"),
  Chunk557722 = require("./557722.js"),
  Chunk515258 = require("./515258.jsx"),
  Chunk870570 = require("./870570.js"),
  Chunk287809 = require("./287809.js"),
  Chunk446868 = require("./446868.js"),
  Chunk662758 = require("./662758.jsx"),
  Chunk985018 = require("./985018.jsx");
let _ = Chunk64700.forwardRef(function(e, t) {
  let {
    onAddedPhone: n,
    onClose: _,
    transitionState: h,
    reason: m,
    layerContext: g
  } = e, E = (0, a.bG)([u.default], () => u.default.getCurrentUser()), y = (0, a.bG)([c.A], () => c.A.getAction()), [b, O] = i.useState(null), [v, A] = i.useState(null), [I, S] = i.useState(null), [T, C] = i.useState(false), N = i.useCallback(async e => {
    C(true);
    try {
      d.A.isPhoneReverification(E, y) ? await o.A.beginReverifyPhone(e, m) : await o.A.beginAddPhone(e, m), S(null), O(e)
    } catch (e) {
      S(new s.A(e))
    }
    C(false)
  }, [E, m, y]), w = i.useCallback(async e => {
    if (null != b && null != E) {
      C(true);
      try {
        let {
          token: t
        } = await o.A.verifyPhone(b, e);
        S(null), A(t)
      } catch (e) {
        S(new s.A(e))
      }
      C(false)
    }
  }, [E, b]), R = i.useCallback(async e => {
    null != v && (d.A.isPhoneReverification(E, y) ? await o.A.reverifyPhone(v, e, m) : await o.A.addPhone(v, e, m), null == n || n(), _())
  }, [n, _, v, m, E, y]);
  return null != v ? (0, r.jsx)(f.default, {
    onClose: _,
    transitionState: h,
    title: p.intl.string(p.t.ZtCDc2),
    handleSubmit: R
  }) : (0, r.jsx)(l.default, {
    onClose: _,
    transitionState: h,
    error: null == I ? true : I.getAnyErrorMessage(),
    working: T,
    validPhone: null != b,
    onAddPhone: N,
    onVerifyPhone: w,
    layerContext: g
  })
})