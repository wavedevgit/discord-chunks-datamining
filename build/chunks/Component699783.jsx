/** Chunk was on 63498 **/
/** chunk id: 699783, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk194359 = require("./194359.js"),
  Chunk726521 = require("./726521.js"),
  Chunk681678 = require("./681678.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk991981 = require("./991981.js"),
  Chunk134612 = require("./134612.js"),
  Chunk388032 = require("./388032.jsx");

function g(t) {
  let {
    userId: e,
    channelId: a,
    transitionState: g,
    onBlock: b,
    onBlockAndReport: f,
    onClose: h,
    onCancel: v
  } = t, Z = (0, d.q)(a), m = n.useCallback(() => {
    i.Z.blockUser(e, {
      location: p.zr
    }).then(() => {
      u.Z.showBlockSuccessToast(e, a)
    })
  }, [e, a]), w = n.useCallback(() => {
    m(), b(), h()
  }, [m, b, h]), x = n.useCallback(() => {
    m(), (0, o.wk)(Z), f(), h()
  }, [Z, m, f, h]), M = n.useCallback(() => (null == v || v(), null == h || h(), Promise.resolve()), [v, h]), U = (0, l.e7)([c.default], () => c.default.getUser(e)), z = k.ZP.useName(U);
  return (0, s.jsx)(r.Modal, {
    transitionState: g,
    onClose: M,
    title: C.intl.formatToPlainString(C.t.x5pOn5, {
      name: z
    }),
    subtitle: C.intl.string(C.t.aedksr),
    actions: [{
      text: C.intl.string(C.t["3pzuj4"]),
      onClick: x,
      variant: "secondary"
    }, {
      text: C.intl.string(C.t.MzsUsr),
      onClick: w,
      variant: "primary"
    }]
  })
}