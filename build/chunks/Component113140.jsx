/** Chunk was on 13878 **/
/** chunk id: 113140, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk471253 = require("./471253.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374378 = require("./374378.js"),
  Chunk768982 = require("./768982.js");

function h(t) {
  let {
    transitionState: n,
    onClose: e,
    channel: h
  } = t, u = t => {
    (0, c.RK)(h, t), e()
  };
  return (0, i.jsx)(s.I, {
    transitionState: n,
    graphic: {
      type: "image",
      src: l.Z
    },
    title: r.intl.string(r.t.Ul1RJS),
    subtitle: r.intl.format(r.t["Z+3bW1"], {
      stageChannelHook: () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.ewx, {
          size: "custom",
          color: "currentColor",
          height: 14,
          width: 14,
          className: o.channelIcon
        }), h.name]
      })
    }),
    onClose: () => (u(true), Promise.resolve()),
    actions: [{
      text: r.intl.string(r.t.L5eIZ2),
      onClick: () => e(),
      variant: "secondary"
    }, {
      text: r.intl.string(r.t.MMlhsr),
      onClick: () => u(false),
      variant: "active"
    }]
  })
}