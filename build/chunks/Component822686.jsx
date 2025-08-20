/** Chunk was on 26475 **/
/** chunk id: 822686, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk904245 = require("./904245.js"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = e => {
  let {
    message: t,
    reportId: n
  } = e, [_, m] = a.useState(false), p = a.useCallback(() => {
    m(true), o.ZP.trackWithMetadata(d.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
      report_id: n
    }), i.Z.deleteMessage(t.getChannelId(), t.id)
  }, [t, n]), g = a.useMemo(() => {
    let e = s.Z.getChannel(t.getChannelId());
    return null != e && e.type !== d.d4z.DM && e.type !== d.d4z.GROUP_DM && c.Z.canWithPartialContext(d.Plq.MANAGE_MESSAGES, {
      channelId: e.id
    })
  }, [t]);
  return null != t && g ? (0, r.jsx)(l.JZ, {
    title: u.intl.string(u.t.c9BHLy),
    description: u.intl.string(u.t.dK8S09),
    buttonText: _ ? u.intl.string(u.t.f3pnLC) : u.intl.string(u.t.ch2xbm),
    buttonDisabled: _,
    buttonVariant: "critical-primary",
    onButtonPress: p
  }) : null
}