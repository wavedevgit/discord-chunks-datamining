/** Chunk was on 27278 **/
/** chunk id: 80963, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk325749 = require("./325749.jsx"),
  Chunk48131 = require("./48131.js"),
  Chunk591472 = require("./591472.js"),
  Chunk828838 = require("./828838.js");

function u(e) {
  let {
    applicationId: n
  } = e, t = (0, i.e7)([l.Z], () => l.Z.getConnectedFrame()), u = o.useCallback(async () => {
    await c.Z.refreshProxyTicket({
      applicationId: n
    }), d.Z.popInFrame()
  }, [n]);
  return (0, a.jsx)(r.d, {
    hasActivity: null != t,
    applicationId: n,
    isRichPresenceInvite: true,
    onConfirmClosePopout: u,
    channelId: true
  })
}