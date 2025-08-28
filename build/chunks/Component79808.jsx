/** Chunk was on 5550 **/
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
    sidebarFooter: _
  } = e, [E, N] = l.useState(true), [T, I] = l.useState(n.key), {
    navigateWithValidation: g
  } = (0, a.Cu)(), O = l.useMemo(() => ({
    currentPanel: t.layout.flatMap(e => e.layout).find(e => e.key === T),
    setCurrentPanel: e => g(() => I(e.key)),
    showNavigationMobile: E,
    setShowNavigationMobile: N
  }), [T, t, E, g, N]);
  return (0, i.jsx)(o.j.Provider, {
    value: O,
    children: (0, i.jsxs)("div", {
      className: u.container,
      children: [(0, i.jsx)(s.P, {
        root: t,
        header: d,
        footer: _
      }), (0, i.jsx)(r.Z, {
        onClose: () => g(c),
        setting: O.currentPanel
      })]
    })
  })
}

function d(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: l,
    sidebarHeader: r,
    sidebarFooter: s
  } = e;
  return (0, i.jsx)(a.Ri, {
    children: (0, i.jsx)(c, {
      root: t,
      initialPanel: n,
      onClose: l,
      sidebarHeader: r,
      sidebarFooter: s
    })
  })
}