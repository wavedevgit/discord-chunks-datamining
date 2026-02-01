/** Chunk was on 9207 **/
/** chunk id: 994987, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk417597 = require("./417597.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk923531 = require("./923531.js"),
  Chunk283900 = require("./283900.jsx"),
  Chunk478311 = require("./478311.js");
let u = e => {
  let {
    userId: t,
    dmsSent: n,
    callCount: u
  } = e, _ = (0, i.bG)([a.default], () => a.default.getUser(t));
  return true === _ ? null : (0, r.jsx)(l.un, {
    title: _.username,
    body: (0, o.fq)(n, u),
    asContainer: true,
    children: (0, r.jsx)("div", {
      className: d.k,
      children: (0, r.jsx)(c.H, {
        user: _,
        avatarSize: s._3J.SIZE_40
      })
    })
  })
}