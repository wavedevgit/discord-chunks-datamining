/** Chunk was on web.js **/
/** chunk id: 177342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    description: f,
    onDismiss: _,
    buttons: p
  } = e;
  i.useEffect(() => {
    a.Z.increment({
      name: o.V.SAFETY_WARNING_VIEW
    })
  }, []);
  let h = i.useCallback(() => {
    null == _ || _(), (0, l.qc)({
      channelId: t,
      warningId: n,
      senderId: c,
      warningType: u,
      cta: l.NM.USER_BANNER_DISMISS
    })
  }, [_, t, n, c, u]);
  return (0, r.jsx)(s.W, {
    buttons: p,
    description: f,
    header: d,
    onDismiss: h
  })
}