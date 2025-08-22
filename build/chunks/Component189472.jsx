/** Chunk was on 54844 **/
/** chunk id: 189472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk87051 = require("./87051.js"),
  Chunk367907 = require("./367907.js"),
  Chunk681678 = require("./681678.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk9156 = require("./9156.js"),
  Chunk5192 = require("./5192.js"),
  Chunk621600 = require("./621600.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = e => {
  let {
    user: t,
    channelId: n,
    reportId: h
  } = e, b = d.Z.getDMFromUserId(t.id), _ = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]), f = i.useMemo(() => m.ZP.getName(null == _ ? true : _.guild_id, null == _ ? true : _.id, t), [_, t]), v = (0, l.e7)([u.ZP], () => null == b ? null : u.ZP.isChannelMuted(null, b)), [j, y] = i.useState(null != v && v), O = i.useCallback(() => {
    null != b && (y(true), s.ZP.trackWithMetadata(g.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: h
    }), a.Z.updateChannelOverrideSettings(null, b, {
      muted: true
    }, p.ZB.Muted), o.Z.showMuteSuccessToast(t.id, n))
  }, [b, n, t, h]);
  return (0, r.jsx)(c.JZ, {
    title: x.intl.formatToPlainString(x.t.TRp5wc, {
      username: f
    }),
    description: x.intl.string(x.t["yM/+AA"]),
    buttonText: j ? x.intl.string(x.t.E8x4Nj) : x.intl.string(x.t.HITUcX),
    buttonDisabled: j,
    onButtonPress: O
  })
}