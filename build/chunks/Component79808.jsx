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
    sidebarFooter: T
  } = e, [O, f] = i.useState(true), [N, I] = i.useState(n.key), {
    navigateWithValidation: E
  } = (0, a.Cu)(), g = i.useMemo(() => ({
    currentPanel: t.layout.flatMap(e => e.layout).find(e => e.key === N),
    setCurrentPanel: e => E(() => I(e.key)),
    showNavigationMobile: O,
    setShowNavigationMobile: f
  }), [N, t, O, E, f]);
  return (0, l.jsx)(o.j.Provider, {
    value: g,
    children: (0, l.jsxs)("div", {
      className: u.container,
      children: [(0, l.jsx)(s.P, {
        root: t,
        header: d,
        footer: T
      }), (0, l.jsx)(r.Z, {
        onClose: () => E(c),
        setting: g.currentPanel
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
  return (0, l.jsx)(a.Ri, {
    children: (0, l.jsx)(c, {
      root: t,
      initialPanel: n,
      onClose: i,
      sidebarHeader: r,
      sidebarFooter: s
    })
  })
}