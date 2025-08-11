/** Chunk was on 54844 **/
/** chunk id: 816342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
    reportType: b
  } = e, h = (0, i.e7)([m.Z], () => m.Z.isBlocked(t.id), [t.id]), f = (0, i.e7)([u.Z], () => u.Z.getChannel(n), [n]), v = l.useMemo(() => p.ZP.getName(null == f ? true : f.guild_id, null == f ? true : f.id, t), [f, t]), j = l.useCallback(() => {
    o.ZP.trackWithMetadata(g.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: _
    }), s.Z.blockUser(t.id, {
      location: "ReportMenuBlockUser-iOS"
    }).then(() => {
      c.Z.showBlockSuccessToast(t.id, n)
    })
  }, [t, _, n]);
  return (0, r.jsx)(d.ZP, {
    title: x.intl.formatToPlainString(x.t["Q1o/f3"], {
      username: v
    }),
    description: x.intl.string(x.t.G08MKi),
    buttonText: h ? x.intl.string(x.t.ot2tSk) : x.intl.string(x.t["l+7PZW"]),
    buttonDisabled: h,
    onButtonPress: j,
    buttonColor: "application" === b.name && h ? a.zx.Colors.WHITE : a.zx.Colors.RED,
    buttonLook: "application" === b.name && h ? a.zx.Looks.LINK : a.zx.Looks.FILLED
  })
}