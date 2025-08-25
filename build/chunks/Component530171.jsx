/** Chunk was on 76210 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk481446 = require("./481446.js");

function a(e) {
  let {
    title: t,
    subtitle: n,
    isOpen: i,
    setIsOpen: a,
    compact: c = false,
    children: d
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.x, {
      title: t,
      description: i ? true : n,
      secondaryTrailingElement: (0, l.jsx)(s.sXD, {
        className: r()(u.icon, {
          [u.iconClosed]: !i
        })
      }),
      onClick: () => a(!i),
      compact: c
    }), (0, l.jsx)("div", {
      className: r()({
        [u.hidden]: !i
      }),
      children: d
    })]
  })
}