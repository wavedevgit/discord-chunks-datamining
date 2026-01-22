/** Chunk was on web.js **/
/** chunk id: 242254, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk692051 = require("./692051.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk364584 = require("./364584.js");

function d(e) {
  let {
    onPlay: t,
    className: n,
    inactive: a
  } = e, d = i.useRef(null), f = (0, r.jsx)("div", {
    className: u.P0,
    ref: d,
    children: (0, r.jsx)(o.udU, {
      size: "xs",
      color: "currentColor",
      className: u.Kk
    })
  });
  return (0, r.jsx)(l.Y.Consumer, {
    children: e => a || null == t ? (0, r.jsx)("div", {
      className: u.Iv,
      children: f
    }) : (0, r.jsx)(o.DUT, {
      className: s()(n, u.Iv, {
        [u.vu]: !e.disableInteractions
      }),
      onClick: t,
      tabIndex: 0,
      "aria-label": c.intl.string(c.t.RscU7I),
      focusProps: {
        ringTarget: d
      },
      children: f
    })
  })
}