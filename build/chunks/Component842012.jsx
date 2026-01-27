/** Chunk was on 12236 **/
/** chunk id: 842012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk832712 = require("./832712.js"),
  Chunk58149 = require("./58149.js"),
  Chunk662502 = require("./662502.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk543465 = require("./543465.js"),
  Chunk562153 = require("./562153.js"),
  Chunk477427 = require("./477427.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let g = e => {
  let {
    user: t,
    channelId: n,
    reportId: g
  } = e, x = c.A.getDMFromUserId(t.id), h = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), v = r.useMemo(() => m.Ay.getName(null == h ? true : h.guild_id, null == h ? true : h.id, t), [h, t]), f = (0, i.bG)([u.Ay], () => null == x ? null : u.Ay.isChannelMuted(null, x)), [j, A] = r.useState(null != f && f), y = r.useCallback(() => {
    null != x && (A(true), s.Ay.trackWithMetadata(b.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: g
    }), a.A.updateChannelOverrideSettings(null, x, {
      muted: true
    }, p.fd.Muted), o.A.showMuteSuccessToast(t.id, n))
  }, [x, n, t, g]);
  return (0, l.jsx)(d.PQ, {
    title: _.intl.formatToPlainString(_.t.TRp5wR, {
      username: v
    }),
    description: _.intl.string(_.t["yM/+AJ"]),
    buttonText: j ? _.intl.string(_.t.E8x4Nj) : _.intl.string(_.t.HITUcR),
    buttonDisabled: j,
    onButtonPress: y
  })
}