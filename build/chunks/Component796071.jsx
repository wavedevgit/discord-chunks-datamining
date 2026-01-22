/** Chunk was on 58652 **/
/** chunk id: 796071, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk49229 = require("./49229.js"),
  Chunk58149 = require("./58149.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk562153 = require("./562153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let p = e => {
  let {
    user: t,
    channelId: n,
    reportId: p
  } = e, {
    isIgnored: x,
    isBlocked: g
  } = (0, a.cf)([d.A], () => ({
    isIgnored: d.A.isIgnored(t.id),
    isBlocked: d.A.isBlocked(t.id)
  }), [t]), f = (0, a.bG)([c.A], () => c.A.getChannel(n), [n]), v = r.useMemo(() => u.Ay.getName(null == f ? true : f.guild_id, null == f ? true : f.id, t), [f, t]), h = r.useCallback(() => {
    s.Ay.trackWithMetadata(m.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: p
    }), i.A.ignoreUser(t.id, "web_iar_ignore_user_element", n)
  }, [t, p, n]), j = r.useMemo(() => x || g, [x, g]);
  return (0, l.jsx)(o.PQ, {
    title: b.intl.formatToPlainString(b.t.U3yyFs, {
      username: v
    }),
    description: b.intl.string(b.t.naWE6W),
    buttonText: j ? b.intl.string(b.t.nDdxOG) : b.intl.string(b.t.ICYEfY),
    buttonDisabled: j,
    onButtonPress: h
  })
}