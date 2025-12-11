/** Chunk was on 54844 **/
/** chunk id: 816342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
let g = e => {
  let {
    user: t,
    channelId: n,
    reportId: g,
    reportType: f
  } = e, x = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id), [t.id]), h = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]), v = l.useMemo(() => m.ZP.getName(null == h ? true : h.guild_id, null == h ? true : h.id, t), [h, t]), _ = l.useCallback(() => {
    s.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: g
    }), a.Z.blockUser(t.id, {
      location: "ReportMenuBlockUser-iOS"
    }).then(() => {
      o.Z.showBlockSuccessToast(t.id, n)
    })
  }, [t, g, n]);
  return (0, r.jsx)(d.JZ, {
    title: b.intl.formatToPlainString(b.t["Q1o/f3"], {
      username: v
    }),
    description: b.intl.string(b.t.G08MKu),
    buttonText: x ? b.intl.string(b.t.ot2tSp) : b.intl.string(b.t["l+7PZY"]),
    buttonDisabled: x,
    onButtonPress: _,
    buttonVariant: "application" === f.name && x ? "secondary" : "critical-primary"
  })
}