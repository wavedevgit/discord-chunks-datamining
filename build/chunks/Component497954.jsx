/** Chunk was on 54844 **/
/** chunk id: 497954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194359 = require("./194359.js"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = e => {
  let {
    user: t,
    channelId: n,
    reportId: g
  } = e, {
    isIgnored: _,
    isBlocked: x
  } = (0, i.cj)([d.Z], () => ({
    isIgnored: d.Z.isIgnored(t.id),
    isBlocked: d.Z.isBlocked(t.id)
  }), [t]), b = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]), h = l.useMemo(() => u.ZP.getName(null == b ? true : b.guild_id, null == b ? true : b.id, t), [b, t]), f = l.useCallback(() => {
    s.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: g
    }), a.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n)
  }, [t, g, n]), v = l.useMemo(() => _ || x, [_, x]);
  return (0, r.jsx)(o.JZ, {
    title: p.intl.formatToPlainString(p.t.U3yyFs, {
      username: h
    }),
    description: p.intl.string(p.t.naWE6W),
    buttonText: v ? p.intl.string(p.t.nDdxOG) : p.intl.string(p.t.ICYEfY),
    buttonDisabled: v,
    onButtonPress: f
  })
}