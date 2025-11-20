/** Chunk was on 16985 **/
/** chunk id: 530171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk206403 = require("./206403.jsx"),
  Chunk481446 = require("./481446.js");

function u(e) {
  let {
    title: t,
    collapsedSubtitle: n,
    isOpen: i,
    setIsOpen: u,
    children: d
  } = e, f = l.useRef(null), [b, p] = l.useState(null), y = i && null != b;
  return l.useLayoutEffect(() => {
    null != f.current && null == b && p(f.current.clientHeight)
  }, [b]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.x, {
      ref: f,
      style: null != b ? {
        minHeight: b
      } : true,
      title: t,
      description: y ? true : n,
      secondaryTrailingElement: (0, r.jsx)(a.sXD, {
        className: o()(s.icon, {
          [s.iconClosed]: !i
        })
      }),
      onClick: () => u(!i)
    }), i && d]
  })
}