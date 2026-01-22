/** Chunk was on web.js **/
/** chunk id: 994987, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk417597 = require("./417597.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk923531 = require("./923531.js"),
  Chunk283900 = require("./283900.jsx"),
  Chunk478311 = require("./478311.js");
let d = e => {
  let {
    userId: t,
    dmsSent: n,
    callCount: d
  } = e, f = (0, i.bG)([o.default], () => o.default.getUser(t));
  return true === f ? null : (0, r.jsx)(a.un, {
    title: f.username,
    body: (0, l.fq)(n, d),
    asContainer: true,
    children: (0, r.jsx)("div", {
      className: u.k,
      children: (0, r.jsx)(c.H, {
        user: f,
        avatarSize: s._3J.SIZE_40
      })
    })
  })
}