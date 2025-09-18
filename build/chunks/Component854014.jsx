/** Chunk was on 47129 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => a,
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk873395 = require("./873395.js");

function a(e) {
  let {
    onClick: t,
    active: n,
    children: i
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: l()(s.item, {
      [s.active]: n
    }),
    onClick: t,
    children: i
  })
}

function u(e) {
  let {
    icon: t,
    title: n,
    onClick: i,
    active: l,
    trailing: u
  } = e;
  return (0, r.jsxs)(a, {
    onClick: i,
    active: l,
    children: [(0, r.jsxs)("div", {
      className: s.itemContent,
      children: [(0, r.jsx)(t, {
        color: "currentColor",
        size: "refresh_sm",
        className: s.icon
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "currentColor",
        children: n
      })]
    }), (0, r.jsx)("div", {
      className: s.itemContent,
      children: u
    })]
  })
}