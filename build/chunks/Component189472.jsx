/** Chunk was on 45410 **/
/** chunk id: 189472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
let g = e => {
  let {
    user: t,
    channelId: n,
    reportId: g
  } = e, f = d.Z.getDMFromUserId(t.id), b = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]), h = i.useMemo(() => m.ZP.getName(null == b ? true : b.guild_id, null == b ? true : b.id, t), [b, t]), v = (0, l.e7)([u.ZP], () => null == f ? null : u.ZP.isChannelMuted(null, f)), [j, y] = i.useState(null != v && v), O = i.useCallback(() => {
    null != f && (y(true), o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: g
    }), a.Z.updateChannelOverrideSettings(null, f, {
      muted: true
    }, _.ZB.Muted), s.Z.showMuteSuccessToast(t.id, n))
  }, [f, n, t, g]);
  return (0, r.jsx)(c.JZ, {
    title: x.intl.formatToPlainString(x.t.TRp5wc, {
      username: h
    }),
    description: x.intl.string(x.t["yM/+AA"]),
    buttonText: j ? x.intl.string(x.t.E8x4Nj) : x.intl.string(x.t.HITUcX),
    buttonDisabled: j,
    onButtonPress: O
  })
}