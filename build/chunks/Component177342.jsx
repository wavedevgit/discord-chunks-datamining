/** Chunk was on 13140 **/
/** chunk id: 177342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk286379 = require("./286379.js"),
  Chunk797614 = require("./797614.js"),
  Chunk596739 = require("./596739.jsx"),
  Chunk473092 = require("./473092.js");

function c(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: c,
    warningType: u,
    header: d,
    description: p,
    onDismiss: f,
    buttons: h
  } = e;
  i.useEffect(() => {
    a.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, []);
  let m = i.useCallback(() => {
    null == f || f(), (0, s.qc)({
      channelId: t,
      warningId: n,
      senderId: c,
      warningType: u,
      cta: s.NM.USER_BANNER_DISMISS
    })
  }, [f, t, n, c, u]);
  return (0, r.jsx)(o.W, {
    buttons: h,
    description: p,
    header: d,
    onDismiss: m
  })
}