/** Chunk was on 59727 **/
/** chunk id: 816342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
let g = e => {
  let {
    user: t,
    channelId: n,
    reportId: g,
    reportType: b
  } = e, h = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]), x = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]), f = a.useMemo(() => m.ZP.getName(null == x ? true : x.guild_id, null == x ? true : x.id, t), [x, t]), v = a.useCallback(() => {
    o.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: g
    }), l.Z.blockUser(t.id, {
      location: "ReportMenuBlockUser-iOS"
    }).then(() => {
      s.Z.showBlockSuccessToast(t.id, n)
    })
  }, [t, g, n]);
  return (0, r.jsx)(c.JZ, {
    title: _.intl.formatToPlainString(_.t["Q1o/f3"], {
      username: f
    }),
    description: _.intl.string(_.t.G08MKi),
    buttonText: h ? _.intl.string(_.t.ot2tSk) : _.intl.string(_.t["l+7PZW"]),
    buttonDisabled: h,
    onButtonPress: v,
    buttonVariant: "application" === b.name && h ? "secondary" : "critical-primary"
  })
}