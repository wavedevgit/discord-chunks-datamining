/** Chunk was on 47129 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk481446 = require("./481446.js");

function u(e) {
  let {
    title: t,
    subtitle: n,
    isOpen: r,
    setIsOpen: u,
    compact: c = false,
    children: d
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.x, {
      title: t,
      description: r ? true : n,
      secondaryTrailingElement: (0, i.jsx)(o.sXD, {
        className: l()(a.icon, {
          [a.iconClosed]: !r
        })
      }),
      onClick: () => u(!r),
      compact: c
    }), (0, i.jsx)("div", {
      className: l()({
        [a.hidden]: !r
      }),
      children: d
    })]
  })
}