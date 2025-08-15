/** Chunk was on 36878 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk178167 = require("./178167.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk990757 = require("./990757.js");

function g(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: s,
    sidebarHeader: g,
    sidebarFooter: m
  } = e, [v, b] = l.useState(true), [x, j] = l.useState([n]), [p, h] = l.useState(0), C = l.useMemo(() => ({
    history: x,
    activeIndex: p,
    showNavigationMobile: v,
    forward() {
      h(Math.min(p + 1, x.length - 1))
    },
    back() {
      h(Math.max(p - 1, 0))
    },
    pushPanel(e) {
      j([...x.slice(0, p + 1), e]), h(p + 1)
    }
  }), [p, x, v]);
  return (0, i.jsx)(d.j.Provider, {
    value: C,
    children: (0, i.jsxs)("div", {
      className: o()(f.container, {
        [f.mobile]: r.tq
      }),
      children: [(0, i.jsx)(c.d, {
        onClose: s
      }), (0, i.jsx)(u.P, {
        root: t,
        header: g,
        footer: m
      }), (0, i.jsx)(a.Z, {
        onClose: s,
        setShowNavigationMobile: b,
        setting: x[p]
      })]
    })
  })
}