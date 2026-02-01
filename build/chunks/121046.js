/** Chunk was on 92617 **/
/** chunk id: 121046, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk827343 = require("./827343.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d.x.DEFAULT,
    n = (0, r.bG)([a.default], () => a.default.getId()),
    c = (0, r.bG)([l.A], () => l.A.supports(d.O5.DISABLE_VIDEO)),
    u = (0, r.bG)([l.A], () => l.A.isLocalVideoDisabled(n, t), [n, t]);
  return [(null == e || e === n) && c, u, e => {
    let r = e ? o.bb8.DISABLED : o.bb8.MANUAL_ENABLED;
    i.A.setDisableLocalVideo(n, r, t)
  }]
}