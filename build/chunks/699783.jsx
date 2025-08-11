/** Chunk was on 41128 **/
/** chunk id: 699783, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function b(t) {
  let {
    userId: a,
    channelId: e,
    transitionState: b,
    onBlock: h,
    onBlockAndReport: f,
    onClose: g,
    onCancel: m
  } = t, v = (0, d.q)(e), w = l.useCallback(() => {
    r.Z.blockUser(a, {
      location: p.zr
    }).then(() => {
      c.Z.showBlockSuccessToast(a, e)
    })
  }, [a, e]), x = l.useCallback(() => {
    w(), h(), g()
  }, [w, h, g]), z = l.useCallback(() => {
    w(), (0, o.wk)(v), f(), g()
  }, [v, w, f, g]), P = l.useCallback(() => (null == m || m(), null == g || g(), Promise.resolve()), [m, g]), S = (0, n.e7)([u.default], () => u.default.getUser(a)), U = k.ZP.useName(S);
  return <i.Modal transitionState={b} onClose={P} title={C.intl.formatToPlainString(C.t.x5pOn5, {
      name: U
    })} subtitle={C.intl.string(C.t.aedksr)} actions={[{
      text: C.intl.string(C.t["3pzuj4"]),
      onClick: z,
      variant: "secondary"
    }, {
      text: C.intl.string(C.t.MzsUsr),
      onClick: x,
      variant: "primary"
    }]} />
}