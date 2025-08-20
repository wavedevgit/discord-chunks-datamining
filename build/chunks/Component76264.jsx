/** Chunk was on 26475 **/
/** chunk id: 76264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk520310 = require("./520310.js"),
  Chunk452847 = require("./452847.js");
let d = e => {
    let {
      child: t,
      onClick: n
    } = e, [a] = t;
    return (0, r.jsxs)(o.P3F, {
      className: i()(c.childButton, s.listElement),
      onClick: () => n(t),
      children: [(0, r.jsx)(o.Text, {
        className: c.childText,
        variant: "text-md/semibold",
        children: a
      }), (0, r.jsx)(l.Z, {
        className: c.childIcon,
        direction: l.Z.Directions.RIGHT
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
    let a = t.map(e => {
      let [t, a] = e;
      return (0, r.jsx)(d, {
        child: e,
        onClick: n
      }, "".concat(t, "+").concat(a))
    });
    return (0, r.jsx)("div", {
      className: s.listElementWrapper,
      children: a
    })
  }