/** Chunk was on 44669 **/
/** chunk id: 136179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk397927 = require("./397927.js"),
  Chunk772577 = require("./772577.jsx"),
  Chunk216042 = require("./216042.js");

function u(e) {
  let {
    guildId: t,
    children: n,
    className: l
  } = e, {
    horizontalScrollNotice: u,
    handleScroll: d,
    handleSetScrollerRef: p,
    handleSetContainerRef: h
  } = (0, o.A)(t), g = (0, r.jsx)("div", {
    className: c.vi,
    children: (0, r.jsx)("div", {
      className: i()(c._s, l),
      children: n
    })
  });
  return s.Fr || (g = (0, r.jsxs)(r.Fragment, {
    children: [u, (0, r.jsx)(a.T7Y, {
      className: c.XG,
      orientation: "horizontal",
      ref: p,
      onScroll: d,
      children: g
    })]
  })), (0, r.jsx)("div", {
    className: c.Rc,
    ref: h,
    children: g
  })
}