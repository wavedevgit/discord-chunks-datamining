/** Chunk was on 9343 **/
/** chunk id: 264119, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk36884 = require("./36884.js"),
  Chunk800010 = require("./800010.js");

function o(t) {
  let {
    email: n,
    onClose: e,
    transitionState: o
  } = t;
  return (0, r.jsx)(i.Ioy, {
    graphic: {
      type: "image",
      src: s
    },
    title: a.intl.string(a.t["8O+nF7"]),
    onClose: e,
    transitionState: o,
    actions: [{
      variant: "primary",
      text: a.intl.string(a.t.BddRzS),
      onClick: e
    }],
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.Text, {
        className: l.description,
        variant: "text-md/normal",
        children: a.intl.format(a.t.Zvx0O3, {
          email: n
        })
      }), (0, r.jsx)(i.Text, {
        className: l.tooltip,
        variant: "text-sm/normal",
        children: a.intl.string(a.t.yb7itQ)
      })]
    })
  })
}