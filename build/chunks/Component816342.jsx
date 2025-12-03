/** Chunk was on 54844 **/
/** chunk id: 816342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194359 = require("./194359.js"),
  Chunk367907 = require("./367907.js"),
  Chunk681678 = require("./681678.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = e => {
  let {
    user: t,
    channelId: n,
    reportId: _,
    reportType: h
  } = e, x = (0, l.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]), b = (0, l.e7)([c.Z], () => c.Z.getChannel(n), [n]), f = i.useMemo(() => m.ZP.getName(null == b ? true : b.guild_id, null == b ? true : b.id, t), [b, t]), v = i.useCallback(() => {
    s.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: _
    }), a.Z.blockUser(t.id, {
      location: "ReportMenuBlockUser-iOS"
    }).then(() => {
      o.Z.showBlockSuccessToast(t.id, n)
    })
  }, [t, _, n]);
  return (0, r.jsx)(d.JZ, {
    title: g.intl.formatToPlainString(g.t["Q1o/f3"], {
      username: f
    }),
    description: g.intl.string(g.t.G08MKu),
    buttonText: x ? g.intl.string(g.t.ot2tSp) : g.intl.string(g.t["l+7PZY"]),
    buttonDisabled: x,
    onButtonPress: v,
    buttonVariant: "application" === h.name && x ? "secondary" : "critical-primary"
  })
}