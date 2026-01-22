/** Chunk was on web.js **/
/** chunk id: 695311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk211401 = require("./211401.js"),
  Chunk500049 = require("./500049.js"),
  Chunk975412 = require("./975412.jsx"),
  Chunk355622 = require("./355622.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  let {
    applicationId: t,
    onClose: n
  } = e, {
    newestAnalyticsLocation: p
  } = (0, i.Ay)(), _ = (0, r.bG)([u.A, d.A], () => u.A.getChannel(d.A.getChannelId())), h = (0, c.Us)() === f.BRT.POPOUT;
  return () => {
    null == n || n(), null == _ || (null == _ ? true : _.isVocal()) ? (0, o.A)({
      context: null != _ ? {
        type: "channel",
        channel: _
      } : {
        type: "contextless"
      },
      analyticsLocation: p,
      openInPopout: h,
      initialState: {
        applicationId: t
      }
    }) : (0, a.R)(s.s4.TEXT, l.oU.NORMAL, {
      applicationId: t
    })
  }
}