/** Chunk was on 36878 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk178167 = require("./178167.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk254204 = require("./254204.js");

function g(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: s,
    sidebarHeader: g,
    sidebarFooter: m
  } = e, [v, b] = l.useState(true), [x, p] = l.useState([n]), [j, h] = l.useState(0), C = l.useMemo(() => ({
    history: x,
    activeIndex: j,
    showNavigationMobile: v,
    forward() {
      h(Math.min(j + 1, x.length - 1))
    },
    back() {
      h(Math.max(j - 1, 0))
    },
    pushPanel(e) {
      p([...x.slice(0, j + 1), e]), h(j + 1)
    }
  }), [j, x, v]);
  return (0, i.jsx)(d.j.Provider, {
    value: C,
    children: (0, i.jsxs)("div", {
      className: o()(f.container, {
        [f.mobile]: a.tq
      }),
      children: [(0, i.jsx)(c.d, {
        onClose: s
      }), (0, i.jsx)(u.P, {
        root: t,
        header: g,
        footer: m
      }), (0, i.jsx)(r.Z, {
        onClose: s,
        setShowNavigationMobile: b,
        setting: x[j]
      })]
    })
  })
}