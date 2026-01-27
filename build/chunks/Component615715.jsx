/** Chunk was on 84704 **/
/** chunk id: 615715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
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
let R = Chunk64700.forwardRef(function(e, t) {
  let {
    onAddedPhone: n,
    onClose: R,
    transitionState: I,
    reason: p,
    layerContext: _
  } = e, f = (0, a.bG)([E.default], () => E.default.getCurrentUser()), g = (0, a.bG)([u.A], () => u.A.getAction()), [C, m] = s.useState(null), [b, A] = s.useState(null), [y, F] = s.useState(null), [v, P] = s.useState(false), x = s.useCallback(async e => {
    P(true);
    try {
      c.A.isPhoneReverification(f, g) ? await o.A.beginReverifyPhone(e, p) : await o.A.beginAddPhone(e, p), F(null), m(e)
    } catch (e) {
      F(new i.A(e))
    }
    P(false)
  }, [f, p, g]), V = s.useCallback(async e => {
    if (null != C && null != f) {
      P(true);
      try {
        let {
          token: t
        } = await o.A.verifyPhone(C, e);
        F(null), A(t)
      } catch (e) {
        F(new i.A(e))
      }
      P(false)
    }
  }, [f, C]), B = s.useCallback(async e => {
    null != b && (c.A.isPhoneReverification(f, g) ? await o.A.reverifyPhone(b, e, p) : await o.A.addPhone(b, e, p), null == n || n(), R())
  }, [n, R, b, p, f, g]);
  return null != b ? (0, l.jsx)(d.default, {
    onClose: R,
    transitionState: I,
    title: h.intl.string(h.t.ZtCDc2),
    handleSubmit: B
  }) : (0, l.jsx)(r.default, {
    onClose: R,
    transitionState: I,
    error: null == y ? true : y.getAnyErrorMessage(),
    working: v,
    validPhone: null != C,
    onAddPhone: x,
    onVerifyPhone: V,
    layerContext: _
  })
})