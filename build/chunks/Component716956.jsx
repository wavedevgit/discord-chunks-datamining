/** Chunk was on 41469 **/
/** chunk id: 716956, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk303612 = require("./303612.jsx"),
  Chunk855018 = require("./855018.js");

function a(e) {
  let {
    className: t,
    onClose: r
  } = e;
  return (0, n.jsx)(c.DUT, {
    className: l()(u.cG, t),
    onClick: r,
    children: (0, n.jsx)(c.PGe, {
      size: "xs",
      color: "currentColor",
      className: u.yP
    })
  })
}

function s(e) {
  let {
    guildProductListing: t,
    onClose: r,
    className: o
  } = e;
  return (0, n.jsxs)(c.rQ0, {
    className: l()(u.wx, o),
    separator: false,
    "data-migration-pending": true,
    children: [(0, n.jsx)(i.A, {
      className: u.F0,
      listing: t,
      imageSize: 500,
      alt: ""
    }), (0, n.jsx)(a, {
      className: u.b,
      onClose: r
    })]
  })
}