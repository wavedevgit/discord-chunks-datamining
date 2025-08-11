/** Chunk was on 76540 **/
/** chunk id: 607018, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk279837 = require("./279837.jsx"),
  Chunk479531 = require("./479531.js"),
  Chunk144114 = require("./144114.js"),
  Chunk145454 = require("./145454.jsx"),
  Chunk23434 = require("./23434.js"),
  Chunk594174 = require("./594174.js"),
  Chunk1964 = require("./1964.js"),
  Chunk388032 = require("./388032.jsx");
let p = Chunk73800.forwardRef(function(e, t) {
  let {
    onAddedPhone: n,
    onClose: p,
    transitionState: R,
    reason: m
  } = e, I = (0, r.e7)([u.default], () => u.default.getCurrentUser()), f = (0, r.e7)([h.Z], () => h.Z.getAction()), [C, g] = i.useState(null), [y, _] = i.useState(null), [P, b] = i.useState(null), [x, j] = i.useState(false), v = i.useCallback(async e => {
    j(true);
    try {
      d.Z.isPhoneReverification(I, f) ? await a.Z.beginReverifyPhone(e, m) : await a.Z.beginAddPhone(e, m), b(null), g(e)
    } catch (e) {
      b(new o.Z(e))
    }
    j(false)
  }, [I, m, f]), N = i.useCallback(async e => {
    if (null != C && null != I) {
      j(true);
      try {
        let {
          token: t
        } = await a.Z.verifyPhone(C, e);
        b(null), _(t)
      } catch (e) {
        b(new o.Z(e))
      }
      j(false)
    }
  }, [I, C]), O = i.useCallback(async e => {
    null != y && (d.Z.isPhoneReverification(I, f) ? await a.Z.reverifyPhone(y, e, m) : await a.Z.addPhone(y, e, m), null == n || n(), p())
  }, [n, p, y, m, I, f]);
  return null != y ? <l.Z onClose={p} transitionState={R} title={E.intl.string(E.t.ZtCDc3)} handleSubmit={O} /> : <c.Z onClose={p} transitionState={R} error={null == P ? true : P.getAnyErrorMessage()} working={x} validPhone={null != C} onAddPhone={v} onVerifyPhone={N} />
})