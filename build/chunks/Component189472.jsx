/** Chunk was on 1056 **/
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
  } = e, b = d.Z.getDMFromUserId(t.id), h = (0, i.e7)([d.Z], () => d.Z.getChannel(n), [n]), x = a.useMemo(() => _.ZP.getName(null == h ? true : h.guild_id, null == h ? true : h.id, t), [h, t]), v = (0, i.e7)([u.ZP], () => null == b ? null : u.ZP.isChannelMuted(null, b)), [j, y] = a.useState(null != v && v), C = a.useCallback(() => {
    null != b && (y(true), l.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: f
    }), o.Z.updateChannelOverrideSettings(null, b, {
      muted: true
    }, m.ZB.Muted), s.Z.showMuteSuccessToast(t.id, n))
  }, [b, n, t, f]);
  return (0, r.jsx)(c.JZ, {
    title: g.intl.formatToPlainString(g.t.TRp5wc, {
      username: x
    }),
    description: g.intl.string(g.t["yM/+AA"]),
    buttonText: j ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcX),
    buttonDisabled: j,
    onButtonPress: C
  })
}