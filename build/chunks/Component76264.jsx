/** Chunk was on 60151 **/
/** chunk id: 76264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk880637 = require("./880637.js"),
  Chunk239736 = require("./239736.js");
let d = e => {
    let {
      child: t,
      onClick: n
    } = e, [i] = t;
    return (0, r.jsxs)(a.P3F, {
      className: l()(c.childButton, s.listElement),
      onClick: () => n(t),
      children: [(0, r.jsx)(a.Text, {
        className: c.childText,
        variant: "text-md/semibold",
        children: i
      }), (0, r.jsx)(o.Z, {
        className: c.childIcon,
        direction: o.Z.Directions.RIGHT
      })]
    })
  },
  u = e => {
    let {
      node: {
        children: t
      },
      onSelectChild: n
    } = e;
    if (null == t || 0 === t.length) return null;
    let i = t.map(e => {
      let [t, i] = e;
      return (0, r.jsx)(d, {
        child: e,
        onClick: n
      }, "".concat(t, "+").concat(i))
    });
    return (0, r.jsx)("div", {
      className: s.listElementWrapper,
      children: i
    })
  }