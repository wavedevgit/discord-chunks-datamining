/** Chunk was on web.js **/
/** chunk id: 657825, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk905599 = require("./905599.js");
let f = e => {
  let {
    userId: t,
    subText: n,
    className: i
  } = e, f = (0, o.e7)([l.default], () => l.default.getUser(t));
  return true === f ? null : (0, r.jsxs)("div", {
    className: a()(d.container, i),
    children: [(0, r.jsx)(u.r, {
      user: f,
      avatarSize: s.EFr.SIZE_40
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: d.descriptors,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/semibold",
          children: c.ZP.getName(f)
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: n
        })]
      })
    })]
  })
}