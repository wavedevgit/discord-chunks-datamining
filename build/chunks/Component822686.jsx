/** Chunk was on 54844 **/
/** chunk id: 822686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk904245 = require("./904245.js"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = e => {
  let {
    message: t,
    reportId: n
  } = e, [m, p] = l.useState(false), b = l.useCallback(() => {
    p(true), a.ZP.trackWithMetadata(c.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
      report_id: n
    }), i.Z.deleteMessage(t.getChannelId(), t.id)
  }, [t, n]), g = l.useMemo(() => {
    let e = o.Z.getChannel(t.getChannelId());
    return null != e && e.type !== c.d4z.DM && e.type !== c.d4z.GROUP_DM && d.Z.canWithPartialContext(c.Plq.MANAGE_MESSAGES, {
      channelId: e.id
    })
  }, [t]);
  return null != t && g ? (0, r.jsx)(s.JZ, {
    title: u.intl.string(u.t.c9BHL9),
    description: u.intl.string(u.t.dK8S0w),
    buttonText: m ? u.intl.string(u.t.f3pnLL) : u.intl.string(u.t.ch2xbt),
    buttonDisabled: m,
    buttonVariant: "critical-primary",
    onButtonPress: b
  }) : null
}