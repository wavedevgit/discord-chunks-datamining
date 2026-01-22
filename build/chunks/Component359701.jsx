/** Chunk was on 23321 **/
/** chunk id: 359701, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  _: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk675953 = require("./675953.js");
let o = e => {
  let {
    showStatus: t,
    width: l,
    opacity: r,
    size: o = "default"
  } = e, u = "small" === o ? s._3J.SIZE_24 : s._3J.SIZE_32;
  return (0, n.jsxs)("div", {
    className: i()(c.Os, {
      [c.i]: "small" === o
    }),
    style: {
      opacity: r
    },
    children: [(0, n.jsx)(s.euF, {
      src: null,
      size: u,
      status: t ? a.clD.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: c.yf
    }), (0, n.jsx)("div", {
      className: i()(c.aA, {
        [c.vX]: "small" === o
      }),
      style: {
        maxWidth: null != l ? l : "100px"
      }
    })]
  })
}