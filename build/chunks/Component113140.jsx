/** Chunk was on 13878 **/
/** chunk id: 113140, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk471253 = require("./471253.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374378 = require("./374378.js"),
  Chunk768982 = require("./768982.js");

function d(t) {
  let {
    transitionState: n,
    onClose: e,
    channel: d
  } = t, h = t => {
    (0, i.RK)(d, t), e()
  };
  return (0, c.jsx)(a.I, {
    transitionState: n,
    graphic: {
      type: "image",
      src: l.Z
    },
    title: o.intl.string(o.t.Ul1RJS),
    subtitle: o.intl.format(o.t["Z+3bW1"], {
      stageChannelHook: () => (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(s.ewx, {
          size: "custom",
          color: "currentColor",
          height: 14,
          width: 14,
          className: r.channelIcon
        }), d.name]
      })
    }),
    onClose: () => (h(true), Promise.resolve()),
    actions: [{
      text: o.intl.string(o.t.L5eIZ2),
      onClick: () => e(),
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.MMlhsr),
      onClick: () => h(false),
      variant: "active"
    }]
  })
}