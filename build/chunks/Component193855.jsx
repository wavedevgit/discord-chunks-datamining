/** Chunk was on 13492 **/
/** chunk id: 193855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk780376 = require("./780376.jsx"),
  Chunk625180 = require("./625180.js"),
  Chunk91242 = require("./91242.js"),
  Chunk905579 = require("./905579.js");

function u(e) {
  let {
    applicationId: t
  } = e, n = (0, i.bG)([c.A], () => c.A.getConnectedFrame()), u = r.useCallback(async () => {
    await a.A.refreshProxyTicket({
      applicationId: t
    }), s.A.popInFrame()
  }, [t]);
  return (0, l.jsx)(o.d, {
    hasActivity: null != n,
    applicationId: t,
    isRichPresenceInvite: true,
    onConfirmClosePopout: u,
    channelId: true
  })
}