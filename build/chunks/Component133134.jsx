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
  } = e, _ = (0, i.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]), h = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), v = r.useMemo(() => m.Ay.getName(null == h ? true : h.guild_id, null == h ? true : h.id, t), [h, t]), f = r.useCallback(() => {
    s.Ay.trackWithMetadata(p.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: x
    }), a.A.blockUser(t.id, {
      location: "ReportMenuBlockUser-iOS"
    }).then(() => {
      o.A.showBlockSuccessToast(t.id, n)
    })
  }, [t, x, n]);
  return (0, l.jsx)(d.PQ, {
    title: b.intl.formatToPlainString(b.t["Q1o/f3"], {
      username: v
    }),
    description: b.intl.string(b.t.G08MKu),
    buttonText: _ ? b.intl.string(b.t.ot2tSp) : b.intl.string(b.t["l+7PZY"]),
    buttonDisabled: _,
    onButtonPress: f,
    buttonVariant: "application" === g.name && _ ? "secondary" : "critical-primary"
  })
}