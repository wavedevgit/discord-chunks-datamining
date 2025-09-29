/** Chunk was on web.js **/
/** chunk id: 657825, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk546791 = require("./546791.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk133870 = require("./133870.js");
let d = e => {
  let {
    userId: t,
    timestamp: n,
    timestampFormatter: d
  } = e, f = (0, i.e7)([o.default], () => o.default.getUser(t));
  return true === f ? null : (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(c.r, {
      user: f,
      avatarSize: a.EFr.SIZE_40
    }), (0, r.jsx)("div", {
      children: (0, r.jsxs)("div", {
        className: u.descriptors,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/semibold",
          children: s.ZP.getName(f)
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, l.LI)(new Date(n).getTime(), d)
        })]
      })
    })]
  })
}