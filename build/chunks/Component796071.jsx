/** Chunk was on 12236 **/
/** chunk id: 796071, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let b = e => {
  let {
    user: t,
    channelId: n,
    reportId: b
  } = e, {
    isIgnored: _,
    isBlocked: g
  } = (0, i.cf)([c.A], () => ({
    isIgnored: c.A.isIgnored(t.id),
    isBlocked: c.A.isBlocked(t.id)
  }), [t]), x = (0, i.bG)([d.A], () => d.A.getChannel(n), [n]), h = r.useMemo(() => u.Ay.getName(null == x ? true : x.guild_id, null == x ? true : x.id, t), [x, t]), v = r.useCallback(() => {
    s.Ay.trackWithMetadata(m.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: b
    }), a.A.ignoreUser(t.id, "web_iar_ignore_user_element", n)
  }, [t, b, n]), f = r.useMemo(() => _ || g, [_, g]);
  return (0, l.jsx)(o.PQ, {
    title: p.intl.formatToPlainString(p.t.U3yyFs, {
      username: h
    }),
    description: p.intl.string(p.t.naWE6W),
    buttonText: f ? p.intl.string(p.t.nDdxOG) : p.intl.string(p.t.ICYEfY),
    buttonDisabled: f,
    onButtonPress: v
  })
}