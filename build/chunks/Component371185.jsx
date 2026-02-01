/** Chunk was on 84938 **/
/** chunk id: 371185, original params: t,e,a (module,exports,require) **/
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
    userId: e,
    channelId: a,
    transitionState: C,
    onBlock: g,
    onBlockAndReport: h,
    onClose: v,
    onCancel: A
  } = t, f = (0, d.W)(a), m = l.useCallback(() => {
    i.A.blockUser(e, {
      location: p.Rx
    }).then(() => {
      u.A.showBlockSuccessToast(e, a)
    })
  }, [e, a]), x = l.useCallback(() => {
    m(), g(), v()
  }, [m, g, v]), M = l.useCallback(() => {
    m(), (0, o.jJ)(f), h(), v()
  }, [f, m, h, v]), U = l.useCallback(() => (null == A || A(), null == v || v(), Promise.resolve()), [A, v]), j = (0, r.bG)([c.default], () => c.default.getUser(e)), w = k.Ay.useName(j);
  return (0, s.jsx)(n.Modal, {
    transitionState: C,
    onClose: U,
    title: b.intl.formatToPlainString(b.t.x5pOn9, {
      name: w
    }),
    subtitle: b.intl.string(b.t.aedkso),
    actions: [{
      text: b.intl.string(b.t["3pzujz"]),
      onClick: M,
      variant: "secondary"
    }, {
      text: b.intl.string(b.t.MzsUsp),
      onClick: x,
      variant: "primary"
    }]
  })
}