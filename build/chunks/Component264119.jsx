/** Chunk was on 9343 **/
/** chunk id: 264119, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780187 = require("./780187.js"),
  Chunk800010 = require("./800010.js");

function o(t) {
  let {
    email: n,
    onClose: e,
    transitionState: o
  } = t;
  return (0, a.jsx)(r.Ioy, {
    graphic: {
      type: "image",
      src: s
    },
    title: i.intl.string(i.t["8O+nF7"]),
    onClose: e,
    transitionState: o,
    actions: [{
      variant: "primary",
      text: i.intl.string(i.t.BddRzS),
      onClick: e
    }],
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(r.Text, {
        className: l.description,
        variant: "text-md/normal",
        children: i.intl.format(i.t.Zvx0O3, {
          email: n
        })
      }), (0, a.jsx)(r.Text, {
        className: l.tooltip,
        variant: "text-sm/normal",
        children: i.intl.string(i.t.yb7itQ)
      })]
    })
  })
}