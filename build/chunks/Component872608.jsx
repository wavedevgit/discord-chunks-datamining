/** Chunk was on web.js **/
/** chunk id: 872608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk399606 = require("./399606.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk546791 = require("./546791.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk789651 = require("./789651.js");
let d = e => {
  let {
    userId: t,
    dmsSent: n,
    callCount: d
  } = e, f = (0, i.e7)([s.default], () => s.default.getUser(t));
  return true === f ? null : (0, r.jsx)(a.i_, {
    title: f.username,
    body: (0, l.Kp)(n, d),
    asContainer: true,
    children: (0, r.jsx)("div", {
      className: u.container,
      children: (0, r.jsx)(c.r, {
        user: f,
        avatarSize: o.EFr.SIZE_40
      })
    })
  })
}