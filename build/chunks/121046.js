/** Chunk was on 78238 **/
/** chunk id: 121046, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : c.x.DEFAULT,
    r = (0, n.bG)([i.default], () => i.default.getId()),
    u = (0, n.bG)([l.A], () => l.A.supports(c.O5.DISABLE_VIDEO)),
    s = (0, n.bG)([l.A], () => l.A.isLocalVideoDisabled(r, t), [r, t]);
  return [(null == e || e === r) && u, s, e => {
    let n = e ? a.bb8.DISABLED : a.bb8.MANUAL_ENABLED;
    o.A.setDisableLocalVideo(r, n, t)
  }]
}