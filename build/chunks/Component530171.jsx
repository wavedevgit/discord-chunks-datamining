/** Chunk was on 76210 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk481446 = require("./481446.js");

function u(e) {
  let {
    title: t,
    subtitle: n,
    isOpen: i,
    setIsOpen: u,
    compact: c = false,
    children: d
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.x, {
      title: t,
      description: i ? true : n,
      secondaryTrailingElement: (0, l.jsx)(s.sXD, {
        className: r()(o.icon, {
          [o.iconClosed]: !i
        })
      }),
      onClick: () => u(!i),
      compact: c
    }), (0, l.jsx)("div", {
      className: r()({
        [o.hidden]: !i
      }),
      children: d
    })]
  })
}