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
  } = e, E = (0, a.bG)([u.default], () => u.default.getCurrentUser()), b = (0, a.bG)([c.A], () => c.A.getAction()), [y, O] = i.useState(null), [A, v] = i.useState(null), [S, I] = i.useState(null), [T, C] = i.useState(false), N = i.useCallback(async e => {
    C(true);
    try {
      d.A.isPhoneReverification(E, b) ? await o.A.beginReverifyPhone(e, m) : await o.A.beginAddPhone(e, m), I(null), O(e)
    } catch (e) {
      I(new s.A(e))
    }
    C(false)
  }, [E, m, b]), R = i.useCallback(async e => {
    if (null != y && null != E) {
      C(true);
      try {
        let {
          token: t
        } = await o.A.verifyPhone(y, e);
        I(null), v(t)
      } catch (e) {
        I(new s.A(e))
      }
      C(false)
    }
  }, [E, y]), w = i.useCallback(async e => {
    null != A && (d.A.isPhoneReverification(E, b) ? await o.A.reverifyPhone(A, e, m) : await o.A.addPhone(A, e, m), null == n || n(), _())
  }, [n, _, A, m, E, b]);
  return null != A ? (0, r.jsx)(f.default, {
    onClose: _,
    transitionState: h,
    title: p.intl.string(p.t.ZtCDc2),
    handleSubmit: w
  }) : (0, r.jsx)(l.default, {
    onClose: _,
    transitionState: h,
    error: null == S ? true : S.getAnyErrorMessage(),
    working: T,
    validPhone: null != y,
    onAddPhone: N,
    onVerifyPhone: R,
    layerContext: g
  })
})