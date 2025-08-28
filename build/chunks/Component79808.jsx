/** Chunk was on 47129 **/
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
  } = e, [E, N] = r.useState(true), [g, f] = r.useState(n.key), {
    navigateWithValidation: O
  } = (0, a.Cu)(), I = r.useMemo(() => ({
    currentPanel: t.layout.flatMap(e => e.layout).find(e => e.key === g),
    setCurrentPanel: e => O(() => f(e.key)),
    showNavigationMobile: E,
    setShowNavigationMobile: N
  }), [g, t, E, O, N]);
  return (0, i.jsx)(s.j.Provider, {
    value: I,
    children: (0, i.jsxs)("div", {
      className: u.container,
      children: [(0, i.jsx)(o.P, {
        root: t,
        header: d,
        footer: _
      }), (0, i.jsx)(l.Z, {
        onClose: () => O(c),
        setting: I.currentPanel
      })]
    })
  })
}

function d(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: r,
    sidebarHeader: l,
    sidebarFooter: o
  } = e;
  return (0, i.jsx)(a.Ri, {
    children: (0, i.jsx)(c, {
      root: t,
      initialPanel: n,
      onClose: r,
      sidebarHeader: l,
      sidebarFooter: o
    })
  })
}