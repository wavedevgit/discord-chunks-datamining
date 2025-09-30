/** Chunk was on web.js **/
/** chunk id: 872608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk399606 = require("./399606.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk198952 = require("./198952.jsx"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk869392 = require("./869392.js");
let f = e => {
  let {
    userId: t,
    dmsSent: n,
    callCount: f
  } = e, _ = (0, i.e7)([s.default], () => s.default.getUser(t));
  return true === _ ? null : (0, r.jsx)(a.i_, {
    title: _.username,
    body: u.intl.formatToPlainString(c.default.Fjwpen, {
      dmsSent: n,
      callCount: f
    }),
    asContainer: true,
    children: (0, r.jsx)("div", {
      className: d.container,
      children: (0, r.jsx)(l.r, {
        user: _,
        avatarSize: o.EFr.SIZE_40
      })
    })
  })
}