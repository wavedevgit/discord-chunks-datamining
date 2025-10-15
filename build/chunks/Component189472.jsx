/** Chunk was on 25244 **/
/** chunk id: 189472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
let f = e => {
  let {
    user: t,
    channelId: n,
    reportId: f
  } = e, h = d.Z.getDMFromUserId(t.id), b = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]), x = i.useMemo(() => _.ZP.getName(null == b ? true : b.guild_id, null == b ? true : b.id, t), [b, t]), v = (0, l.e7)([u.ZP], () => null == h ? null : u.ZP.isChannelMuted(null, h)), [j, y] = i.useState(null != v && v), O = i.useCallback(() => {
    null != h && (y(true), o.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: f
    }), a.Z.updateChannelOverrideSettings(null, h, {
      muted: true
    }, m.ZB.Muted), s.Z.showMuteSuccessToast(t.id, n))
  }, [h, n, t, f]);
  return (0, r.jsx)(c.JZ, {
    title: g.intl.formatToPlainString(g.t.TRp5wc, {
      username: x
    }),
    description: g.intl.string(g.t["yM/+AA"]),
    buttonText: j ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcX),
    buttonDisabled: j,
    onButtonPress: O
  })
}