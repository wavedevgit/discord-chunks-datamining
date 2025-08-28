/** Chunk was on 47129 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.x, {
      title: t,
      description: l ? true : n,
      secondaryTrailingElement: (0, r.jsx)(o.sXD, {
        className: i()(a.icon, {
          [a.iconClosed]: !l
        })
      }),
      onClick: () => u(!l),
      compact: c
    }), l && d]
  })
}