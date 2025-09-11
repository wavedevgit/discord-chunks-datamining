/** Chunk was on 61805 **/
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
  } = e, b = d.Z.getDMFromUserId(t.id), x = (0, a.e7)([d.Z], () => d.Z.getChannel(n), [n]), h = i.useMemo(() => _.ZP.getName(null == x ? true : x.guild_id, null == x ? true : x.id, t), [x, t]), v = (0, a.e7)([u.ZP], () => null == b ? null : u.ZP.isChannelMuted(null, b)), [j, y] = i.useState(null != v && v), O = i.useCallback(() => {
    null != b && (y(true), o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: g
    }), l.Z.updateChannelOverrideSettings(null, b, {
      muted: true
    }, m.ZB.Muted), s.Z.showMuteSuccessToast(t.id, n))
  }, [b, n, t, g]);
  return (0, r.jsx)(c.JZ, {
    title: f.intl.formatToPlainString(f.t.TRp5wc, {
      username: h
    }),
    description: f.intl.string(f.t["yM/+AA"]),
    buttonText: j ? f.intl.string(f.t.E8x4Nj) : f.intl.string(f.t.HITUcX),
    buttonDisabled: j,
    onButtonPress: O
  })
}