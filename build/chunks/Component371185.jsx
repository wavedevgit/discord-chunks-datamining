/** Chunk was on 84938 **/
/** chunk id: 371185, original params: t,a,s (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk49229 = require("./49229.js"),
  Chunk928658 = require("./928658.js"),
  Chunk662502 = require("./662502.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk192311 = require("./192311.js"),
  Chunk327337 = require("./327337.js"),
  Chunk985018 = require("./985018.jsx");

function C(t) {
  let {
    userId: a,
    channelId: s,
    transitionState: C,
    onBlock: h,
    onBlockAndReport: f,
    onClose: g,
    onCancel: m
  } = t, x = (0, d.W)(s), v = l.useCallback(() => {
    o.A.blockUser(a, {
      location: p.Rx
    }).then(() => {
      c.A.showBlockSuccessToast(a, s)
    })
  }, [a, s]), j = l.useCallback(() => {
    v(), h(), g()
  }, [v, h, g]), w = l.useCallback(() => {
    v(), (0, r.jJ)(x), f(), g()
  }, [x, v, f, g]), y = l.useCallback(() => (null == m || m(), null == g || g(), Promise.resolve()), [m, g]), z = (0, i.bG)([u.default], () => u.default.getUser(a)), A = k.Ay.useName(z);
  return (0, e.jsx)(n.Modal, {
    transitionState: C,
    onClose: y,
    title: b.intl.formatToPlainString(b.t.x5pOn9, {
      name: A
    }),
    subtitle: b.intl.string(b.t.aedkso),
    actions: [{
      text: b.intl.string(b.t["3pzujz"]),
      onClick: w,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t.MzsUsp),
      onClick: j,
      variant: "primary"
    }]
  })
}