/** Chunk was on 40184 **/
/** chunk id: 187237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk140106 = require("./140106.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk426217 = require("./426217.js");

function d(e) {
  let {
    channel: t,
    children: n,
    className: r,
    editable: d,
    location: p
  } = e;
  return d ? (0, i.jsx)(a.u, {
    position: "bottom",
    text: c.intl.string(c.t["0qPSMV"]),
    children: (0, i.jsxs)(o.P3F, {
      className: l()(u.editableGdmIcon, r),
      onClick: () => (0, s.P5)(t.id, p),
      children: [n, (0, i.jsx)("div", {
        className: u.editableGdmIconIndicator,
        children: (0, i.jsx)(o.vdY, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  }) : (0, i.jsx)("div", {
    className: r,
    children: n
  })
}