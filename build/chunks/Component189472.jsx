/** Chunk was on 54844 **/
/** chunk id: 189472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, x = c.Z.getDMFromUserId(t.id), b = (0, l.e7)([c.Z], () => c.Z.getChannel(n), [n]), f = i.useMemo(() => m.ZP.getName(null == b ? true : b.guild_id, null == b ? true : b.id, t), [b, t]), v = (0, l.e7)([u.ZP], () => null == x ? null : u.ZP.isChannelMuted(null, x)), [j, y] = i.useState(null != v && v), Z = i.useCallback(() => {
    null != x && (y(true), s.ZP.trackWithMetadata(g.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: h
    }), a.Z.updateChannelOverrideSettings(null, x, {
      muted: true
    }, p.ZB.Muted), o.Z.showMuteSuccessToast(t.id, n))
  }, [x, n, t, h]);
  return (0, r.jsx)(d.JZ, {
    title: _.intl.formatToPlainString(_.t.TRp5wR, {
      username: f
    }),
    description: _.intl.string(_.t["yM/+AJ"]),
    buttonText: j ? _.intl.string(_.t.E8x4Nj) : _.intl.string(_.t.HITUcR),
    buttonDisabled: j,
    onButtonPress: Z
  })
}