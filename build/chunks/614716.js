/** Chunk was on web.js **/
/** chunk id: 614716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk397698 = require("./397698.jsx"),
  Chunk541716 = require("./541716.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js");

function _(e) {
  let {
    applicationId: t,
    onClose: n
  } = e, {
    newestAnalyticsLocation: _
  } = (0, i.ZP)(), p = (0, r.e7)([u.Z, d.Z], () => u.Z.getChannel(d.Z.getChannelId())), h = (0, c.bp)() === f.IlC.POPOUT;
  return () => {
    null == n || n(), null == p || (null == p ? true : p.isVocal()) ? (0, s.Z)({
      context: null != p ? {
        type: "channel",
        channel: p
      } : {
        type: "contextless"
      },
      analyticsLocation: _,
      openInPopout: h,
      initialState: {
        applicationId: t
      }
    }) : (0, a._)(o._b.TEXT, l.Ie.NORMAL, {
      applicationId: t
    })
  }
}