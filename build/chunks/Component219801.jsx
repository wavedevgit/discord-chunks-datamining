/** Chunk was on 4309 **/
/** chunk id: 219801, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => n
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk994288 = require("./994288.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function n(e) {
  let {
    transitionState: t,
    onClose: a,
    userId: n,
    onCancel: r,
    confirmBlock: o
  } = e, i = (0, d.bG)([s.default], () => s.default.getUser(n));
  if (null != i) return (0, c.jsx)(f.default, {
    transitionState: t,
    user: i,
    onBlock: () => {
      o(), u.default.track(l.HAw.BLOCK_USER_CONFIRMED)
    },
    onClose: a,
    onCancel: r
  })
}