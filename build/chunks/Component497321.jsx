/** Chunk was on web.js **/
/** chunk id: 497321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk737430 = require("./737430.js");

function f(e) {
  let {
    disableButton: t
  } = e, n = () => {
    true !== t && (0, l.openUserSettings)(s.n.STREAMER_MODE_PANEL, {
      section: c.oAB.STREAMER_MODE
    })
  };
  return (0, r.jsxs)("div", {
    className: d.streamerModeEnabled,
    children: [(0, r.jsx)("div", {
      className: d.streamerModeEnabledImage
    }), (0, r.jsx)(o.P3F, {
      className: a()(d.streamerModeEnabledBtn, {
        [d.disabled]: t
      }),
      onClick: n,
      children: u.intl.string(u.t.Br1ls3)
    })]
  })
}