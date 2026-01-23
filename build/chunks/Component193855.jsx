/** Chunk was on 13492 **/
/** chunk id: 193855, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk780376 = require("./780376.jsx"),
  Chunk625180 = require("./625180.js"),
  Chunk91242 = require("./91242.js"),
  Chunk905579 = require("./905579.js");

function s(e) {
  let {
    applicationId: n
  } = e, t = (0, a.bG)([c.A], () => c.A.getConnectedFrame()), s = o.useCallback(async () => {
    await l.A.refreshProxyTicket({
      applicationId: n
    }), _.A.popInFrame()
  }, [n]);
  return (0, r.jsx)(i.d, {
    hasActivity: null != t,
    applicationId: n,
    isRichPresenceInvite: true,
    onConfirmClosePopout: s,
    channelId: true
  })
}