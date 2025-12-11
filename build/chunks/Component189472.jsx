/** Chunk was on 54844 **/
/** chunk id: 189472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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
let f = e => {
  let {
    user: t,
    channelId: n,
    reportId: f
  } = e, x = c.Z.getDMFromUserId(t.id), h = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]), v = l.useMemo(() => m.ZP.getName(null == h ? true : h.guild_id, null == h ? true : h.id, t), [h, t]), _ = (0, i.e7)([u.ZP], () => null == x ? null : u.ZP.isChannelMuted(null, x)), [j, y] = l.useState(null != _ && _), O = l.useCallback(() => {
    null != x && (y(true), s.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: f
    }), a.Z.updateChannelOverrideSettings(null, x, {
      muted: true
    }, b.ZB.Muted), o.Z.showMuteSuccessToast(t.id, n))
  }, [x, n, t, f]);
  return (0, r.jsx)(d.JZ, {
    title: g.intl.formatToPlainString(g.t.TRp5wR, {
      username: v
    }),
    description: g.intl.string(g.t["yM/+AJ"]),
    buttonText: j ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcR),
    buttonDisabled: j,
    onButtonPress: O
  })
}