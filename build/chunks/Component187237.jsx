/** Chunk was on 13873 **/
/** chunk id: 187237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk140106 = require("./140106.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk827723 = require("./827723.js");

function d(e) {
  let {
    channel: t,
    children: n,
    className: i,
    editable: d,
    location: p
  } = e;
  return d ? (0, r.jsx)(a.u, {
    position: "bottom",
    text: c.intl.string(c.t["0qPSMV"]),
    children: (0, r.jsxs)(o.P3F, {
      className: l()(u.editableGdmIcon, i),
      onClick: () => (0, s.P5)(t.id, p),
      children: [n, (0, r.jsx)("div", {
        className: u.editableGdmIconIndicator,
        children: (0, r.jsx)(o.vdY, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  }) : (0, r.jsx)("div", {
    className: i,
    children: n
  })
}