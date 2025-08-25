/** Chunk was on 76210 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk990757 = require("./990757.js");

function c(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: c,
    sidebarHeader: d,
    sidebarFooter: f
  } = e, [g, v] = i.useState(true), [m, j] = i.useState(n.key), {
    navigateWithValidation: b
  } = (0, u.Cu)(), y = i.useMemo(() => ({
    currentPanel: t.layout.flatMap(e => e.layout).find(e => e.key === m),
    setCurrentPanel: e => b(() => j(e.key)),
    showNavigationMobile: g,
    setShowNavigationMobile: v
  }), [m, t, g, b, v]);
  return (0, l.jsx)(o.j.Provider, {
    value: y,
    children: (0, l.jsxs)("div", {
      className: a.container,
      children: [(0, l.jsx)(s.P, {
        root: t,
        header: d,
        footer: f
      }), (0, l.jsx)(r.Z, {
        onClose: () => b(c),
        setting: y.currentPanel
      })]
    })
  })
}

function d(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: i,
    sidebarHeader: r,
    sidebarFooter: s
  } = e;
  return (0, l.jsx)(u.Ri, {
    children: (0, l.jsx)(c, {
      root: t,
      initialPanel: n,
      onClose: i,
      sidebarHeader: r,
      sidebarFooter: s
    })
  })
}