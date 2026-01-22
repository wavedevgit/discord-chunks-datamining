/** Chunk was on 13492 **/
/** chunk id: 193855, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk780376 = require("./780376.jsx"),
  Chunk625180 = require("./625180.js"),
  Chunk91242 = require("./91242.js"),
  Chunk905579 = require("./905579.js");

function f(e) {
  let {
    applicationId: t
  } = e, a = (0, l.bG)([o.A], () => o.A.getConnectedFrame()), f = n.useCallback(async () => {
    await r.A.refreshProxyTicket({
      applicationId: t
    }), i.A.popInFrame()
  }, [t]);
  return (0, c.jsx)(d.d, {
    hasActivity: null != a,
    applicationId: t,
    isRichPresenceInvite: true,
    onConfirmClosePopout: f,
    channelId: true
  })
}