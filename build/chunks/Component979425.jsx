/** Chunk was on web.js **/
/** chunk id: 979425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk871118 = require("./871118.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867236 = require("./867236.js");

function u(e) {
  let {
    stream: t,
    isSmall: n,
    selected: i,
    isSelfStream: u
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      className: o()(c.absoluteFill, c.streamPreviewOpacity),
      stream: t,
      noText: true
    }), !i && (0, r.jsxs)("div", {
      className: o()(c.content, c.streamUnavailable, {
        [c.small]: n
      }),
      children: [(0, r.jsx)(a.Text, {
        className: c.streamUnavailableText,
        color: "always-white",
        variant: n ? "text-sm/semibold" : "text-md/semibold",
        children: u ? l.intl.string(l.t.UeEwj4) : l.intl.string(l.t["1i3tSU"])
      }), (0, r.jsx)(a.DY3, {
        text: u ? l.intl.string(l.t["ro/HNz"]) : l.intl.string(l.t.UPf6ZG),
        className: c.darkCircle,
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(a.o8v, {
            size: "md",
            color: "currentColor",
            className: c.stopStreamIcon,
            colorClass: c.stopStreamForeground
          })
        })
      })]
    })]
  })
}