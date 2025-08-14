/** Chunk was on 36878 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk481446 = require("./481446.js");

function u(e) {
  let {
    title: t,
    subtitle: n,
    isOpen: l,
    setIsOpen: u,
    compact: c = false,
    children: d
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.x, {
      title: t,
      description: l ? true : n,
      secondaryTrailingElement: (0, i.jsx)(o.sXD, {
        className: s()(r.icon, {
          [r.iconClosed]: !l
        })
      }),
      onClick: () => u(!l),
      compact: c
    }), (0, i.jsx)("div", {
      className: s()({
        [r.hidden]: !l
      }),
      children: d
    })]
  })
}