/** Chunk was on 36878 **/
/** chunk id: 79808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk636298 = require("./636298.jsx"),
  Chunk404975 = require("./404975.jsx"),
  Chunk178167 = require("./178167.jsx"),
  Chunk924052 = require("./924052.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk990757 = require("./990757.js");

function v(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: r,
    sidebarHeader: v,
    sidebarFooter: m
  } = e, [b, p] = l.useState(true), [x, j] = l.useState(n.key), {
    navigateWithValidation: y
  } = (0, d.Cu)(), C = l.useMemo(() => ({
    currentPanel: t.layout.flatMap(e => e.layout).find(e => e.key === x),
    setCurrentPanel: e => y(() => j(e.key)),
    showNavigationMobile: b,
    setShowNavigationMobile: p
  }), [x, t, b, y, p]), h = () => y(r);
  return (0, i.jsx)(f.j.Provider, {
    value: C,
    children: (0, i.jsxs)("div", {
      className: o()(g.container, {
        [g.mobile]: s.tq
      }),
      children: [(0, i.jsx)(c.d, {
        onClose: h
      }), (0, i.jsx)(u.P, {
        root: t,
        header: v,
        footer: m
      }), (0, i.jsx)(a.Z, {
        onClose: h,
        setting: C.currentPanel
      })]
    })
  })
}

function m(e) {
  let {
    root: t,
    initialPanel: n,
    onClose: l,
    sidebarHeader: r,
    sidebarFooter: o
  } = e;
  return (0, i.jsx)(d.Ri, {
    children: (0, i.jsx)(v, {
      root: t,
      initialPanel: n,
      onClose: l,
      sidebarHeader: r,
      sidebarFooter: o
    })
  })
}