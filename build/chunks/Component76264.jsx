/** Chunk was on 54844 **/
/** chunk id: 76264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk88309 = require("./88309.js"),
  Chunk935786 = require("./935786.js");
let d = e => {
    let {
      child: t,
      onClick: n
    } = e, [i] = t;
    return (0, r.jsxs)(a.P3F, {
      className: l()(c.childButton, o.listElement),
      onClick: () => n(t),
      children: [(0, r.jsx)(a.Text, {
        className: c.childText,
        variant: "text-md/semibold",
        children: i
      }), (0, r.jsx)(s.Z, {
        className: c.childIcon,
        direction: s.Z.Directions.RIGHT
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
      className: o.listElementWrapper,
      children: i
    })
  }