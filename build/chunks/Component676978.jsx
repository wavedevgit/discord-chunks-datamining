/** Chunk was on 58652 **/
/** chunk id: 676978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk843472 = require("./843472.js"),
  Chunk58149 = require("./58149.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let m = e => {
  let {
    message: t,
    reportId: n
  } = e, [m, b] = r.useState(false), p = r.useCallback(() => {
    b(true), i.Ay.trackWithMetadata(d.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
      report_id: n
    }), a.A.deleteMessage(t.getChannelId(), t.id)
  }, [t, n]), x = r.useMemo(() => {
    let e = o.A.getChannel(t.getChannelId());
    return null != e && e.type !== d.rbe.DM && e.type !== d.rbe.GROUP_DM && c.A.canWithPartialContext(d.xBc.MANAGE_MESSAGES, {
      channelId: e.id
    })
  }, [t]);
  return null != t && x ? (0, l.jsx)(s.PQ, {
    title: u.intl.string(u.t.c9BHL9),
    description: u.intl.string(u.t.dK8S0w),
    buttonText: m ? u.intl.string(u.t.f3pnLL) : u.intl.string(u.t.ch2xbt),
    buttonDisabled: m,
    buttonVariant: "critical-primary",
    onButtonPress: p
  }) : null
}