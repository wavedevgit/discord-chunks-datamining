/** Chunk was on 71020 **/
/** chunk id: 974544, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk391870 = require("./391870.js");

function u(e) {
  let {
    disableButton: t
  } = e;
  return (0, i.jsxs)("div", {
    className: _.IG,
    children: [(0, i.jsx)("div", {
      className: _.TE
    }), (0, i.jsx)(a.DUT, {
      className: l()(_.Ac, {
        [_.r9]: t
      }),
      onClick: () => {
        true !== t && (0, s.openUserSettings)(o.X.STREAMER_MODE_PANEL)
      },
      children: c.intl.string(c.t.Br1ls3)
    })]
  })
}