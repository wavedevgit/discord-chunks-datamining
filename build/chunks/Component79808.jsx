/** Chunk was on 36878 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk178167 = require("./178167.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk254204 = require("./254204.js");

function m(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: l,
    sidebarHeader: m,
    sidebarFooter: x
  } = e, [g, v] = o.useState(true), [b, j] = o.useState([n]), [p, y] = o.useState(0), N = o.useMemo(() => ({
    history: b,
    activeIndex: p,
    showNavigationMobile: g,
    forward() {
      y(Math.min(p + 1, b.length - 1))
    },
    back() {
      y(Math.max(p - 1, 0))
    },
    pushPanel(e) {
      j([...b.slice(0, p + 1), e]), y(p + 1)
    }
  }), [p, b, g]);
  return (0, i.jsx)(d.j.Provider, {
    value: N,
    children: (0, i.jsxs)("div", {
      className: r()(f.container, {
        [f.mobile]: a.tq
      }),
      children: [(0, i.jsx)(u.d, {
        onClose: l
      }), (0, i.jsx)(c.P, {
        root: t,
        header: m,
        footer: x
      }), (0, i.jsx)(s.Z, {
        onClose: l,
        setShowNavigationMobile: v,
        setting: b[p]
      })]
    })
  })
}