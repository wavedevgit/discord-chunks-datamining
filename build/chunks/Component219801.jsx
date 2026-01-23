/** Chunk was on 4309 **/
/** chunk id: 219801, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk994288 = require("./994288.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let {
    transitionState: a,
    onClose: t,
    userId: s,
    onCancel: d,
    confirmBlock: l
  } = e, _ = (0, o.bG)([i.default], () => i.default.getUser(s));
  if (null != _) return (0, n.jsx)(r.default, {
    transitionState: a,
    user: _,
    onBlock: () => {
      l(), u.default.track(c.HAw.BLOCK_USER_CONFIRMED)
    },
    onClose: t,
    onCancel: d
  })
}