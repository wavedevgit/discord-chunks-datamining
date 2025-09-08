/** Chunk was on web.js **/
/** chunk id: 894300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk865066 = require("./865066.js"),
  Chunk388032 = require("./388032.jsx");

function s() {
  (0, Chunk865066.sU)("overlay-settings")
}

function l(e) {
  let {
    className: t,
    game: n
  } = e;
  return (0, a.hi)() && null != n && n.elevated ? (0, r.jsx)("div", {
    className: t,
    children: (0, r.jsx)(i.Wn, {
      messageType: i.QYI.WARNING,
      action: (0, r.jsx)(i.zxk, {
        variant: "secondary",
        size: "sm",
        text: o.intl.string(o.t["1iI46O"]),
        onClick: s
      }),
      children: o.intl.string(o.t.NP1FHx)
    })
  }) : null
}