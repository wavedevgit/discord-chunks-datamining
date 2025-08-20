/** Chunk was on 40226 **/
/** chunk id: 816342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let f = e => {
  let {
    user: t,
    channelId: n,
    reportId: f,
    reportType: g
  } = e, x = (0, l.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]), b = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]), h = i.useMemo(() => m.ZP.getName(null == b ? true : b.guild_id, null == b ? true : b.id, t), [b, t]), v = i.useCallback(() => {
    o.ZP.trackWithMetadata(_.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: f
    }), a.Z.blockUser(t.id, {
      location: "ReportMenuBlockUser-iOS"
    }).then(() => {
      s.Z.showBlockSuccessToast(t.id, n)
    })
  }, [t, f, n]);
  return (0, r.jsx)(c.JZ, {
    title: p.intl.formatToPlainString(p.t["Q1o/f3"], {
      username: h
    }),
    description: p.intl.string(p.t.G08MKi),
    buttonText: x ? p.intl.string(p.t.ot2tSk) : p.intl.string(p.t["l+7PZW"]),
    buttonDisabled: x,
    onButtonPress: v,
    buttonVariant: "application" === g.name && x ? "secondary" : "critical-primary"
  })
}