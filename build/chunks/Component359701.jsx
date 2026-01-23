/** Chunk was on 65599 **/
/** chunk id: 359701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk675953 = require("./675953.js");
let c = e => {
  let {
    showStatus: t,
    width: n,
    opacity: l,
    size: c = "default"
  } = e, d = "small" === c ? i._3J.SIZE_24 : i._3J.SIZE_32;
  return (0, a.jsxs)("div", {
    className: r()(o.Os, {
      [o.i]: "small" === c
    }),
    style: {
      opacity: l
    },
    children: [(0, a.jsx)(i.euF, {
      src: null,
      size: d,
      status: t ? s.clD.ONLINE : true,
      statusColor: "var(--border-subtle)",
      "aria-hidden": true,
      imageClassName: o.yf
    }), (0, a.jsx)("div", {
      className: r()(o.aA, {
        [o.vX]: "small" === c
      }),
      style: {
        maxWidth: null != n ? n : "100px"
      }
    })]
  })
}