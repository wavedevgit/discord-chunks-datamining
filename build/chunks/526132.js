/** Chunk was on 78580 **/
/** chunk id: 526132, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  e: () => l,
  n: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i.A;
  return null != e && null != e.linkedLobby && n.can(c.xBc.MANAGE_CHANNELS, e) && n.can(c.xBc.VIEW_CHANNEL, e) && n.can(c.xBc.SEND_MESSAGES, e)
}

function l(e) {
  return (0, r.bG)([i.A], () => a(e, i.A))
}