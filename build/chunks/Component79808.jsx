/** Chunk was on 36878 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
    onClose: o,
    sidebarHeader: g,
    sidebarFooter: v
  } = e, [m, b] = l.useState(true), [p, x] = l.useState(n.key), j = l.useMemo(() => ({
    currentPanel: t.layout.flatMap(e => e.layout).find(e => e.key === p),
    setCurrentPanel: e => x(e.key),
    showNavigationMobile: m
  }), [p, t, m]);
  return (0, i.jsx)(d.j.Provider, {
    value: j,
    children: (0, i.jsxs)("div", {
      className: r()(f.container, {
        [f.mobile]: s.tq
      }),
      children: [(0, i.jsx)(c.d, {
        onClose: o
      }), (0, i.jsx)(u.P, {
        root: t,
        header: g,
        footer: v
      }), (0, i.jsx)(a.Z, {
        onClose: o,
        setShowNavigationMobile: b,
        setting: j.currentPanel
      })]
    })
  })
}