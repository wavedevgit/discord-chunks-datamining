/** Chunk was on 47129 **/
/** chunk id: 854014, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => s,
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk843816 = require("./843816.js");

function s(e) {
  let {
    onClick: t,
    active: n,
    children: i
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: l()(a.item, {
      [a.active]: n
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
    trailing: o
  } = e;
  return (0, r.jsxs)(s, {
    onClick: i,
    active: l,
    children: [(0, r.jsxs)("div", {
      className: a.itemContent,
      children: [(0, r.jsx)(t, {
        color: "currentColor",
        size: "refresh_sm",
        className: a.icon
      }), n]
    }), (0, r.jsx)("div", {
      className: a.itemContent,
      children: o
    })]
  })
}