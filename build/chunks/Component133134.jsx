/** Chunk was on 58652 **/
/** chunk id: 133134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk49229 = require("./49229.js"),
  Chunk58149 = require("./58149.js"),
  Chunk662502 = require("./662502.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk562153 = require("./562153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let x = e => {
  let {
    user: t,
    channelId: n,
    reportId: x,
    reportType: g
  } = e, f = (0, a.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]), v = (0, a.bG)([d.A], () => d.A.getChannel(n), [n]), h = r.useMemo(() => m.Ay.getName(null == v ? true : v.guild_id, null == v ? true : v.id, t), [v, t]), j = r.useCallback(() => {
    s.Ay.trackWithMetadata(b.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: x
    }), i.A.blockUser(t.id, {
      location: "ReportMenuBlockUser-iOS"
    }).then(() => {
      o.A.showBlockSuccessToast(t.id, n)
    })
  }, [t, x, n]);
  return (0, l.jsx)(c.PQ, {
    title: p.intl.formatToPlainString(p.t["Q1o/f3"], {
      username: h
    }),
    description: p.intl.string(p.t.G08MKu),
    buttonText: f ? p.intl.string(p.t.ot2tSp) : p.intl.string(p.t["l+7PZY"]),
    buttonDisabled: f,
    onButtonPress: j,
    buttonVariant: "application" === g.name && f ? "secondary" : "critical-primary"
  })
}