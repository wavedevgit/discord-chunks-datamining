/** Chunk was on 75685 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk481446 = require("./481446.js");

function s(e) {
  let {
    title: t,
    subtitle: n,
    isOpen: o,
    setIsOpen: s,
    compact: u = false,
    children: d
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.x, {
      title: t,
      description: o ? true : n,
      secondaryTrailingElement: (0, r.jsx)(i.sXD, {
        className: l()(c.icon, {
          [c.iconClosed]: !o
        })
      }),
      onClick: () => s(!o),
      compact: u
    }), o && d]
  })
}