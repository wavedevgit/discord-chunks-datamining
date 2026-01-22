/** Chunk was on 58652 **/
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
  } = e, f = d.A.getDMFromUserId(t.id), v = (0, a.bG)([d.A], () => d.A.getChannel(n), [n]), h = r.useMemo(() => m.Ay.getName(null == v ? true : v.guild_id, null == v ? true : v.id, t), [v, t]), j = (0, a.bG)([u.Ay], () => null == f ? null : u.Ay.isChannelMuted(null, f)), [_, A] = r.useState(null != j && j), y = r.useCallback(() => {
    null != f && (A(true), s.Ay.trackWithMetadata(p.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: g
    }), i.A.updateChannelOverrideSettings(null, f, {
      muted: true
    }, b.fd.Muted), o.A.showMuteSuccessToast(t.id, n))
  }, [f, n, t, g]);
  return (0, l.jsx)(c.PQ, {
    title: x.intl.formatToPlainString(x.t.TRp5wR, {
      username: h
    }),
    description: x.intl.string(x.t["yM/+AJ"]),
    buttonText: _ ? x.intl.string(x.t.E8x4Nj) : x.intl.string(x.t.HITUcR),
    buttonDisabled: _,
    onButtonPress: y
  })
}