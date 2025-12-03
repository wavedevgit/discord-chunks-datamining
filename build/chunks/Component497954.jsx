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
    isBlocked: h
  } = (0, l.cj)([c.Z], () => ({
    isIgnored: c.Z.isIgnored(t.id),
    isBlocked: c.Z.isBlocked(t.id)
  }), [t]), x = (0, l.e7)([d.Z], () => d.Z.getChannel(n), [n]), b = i.useMemo(() => u.ZP.getName(null == x ? true : x.guild_id, null == x ? true : x.id, t), [x, t]), f = i.useCallback(() => {
    s.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: g
    }), a.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n)
  }, [t, g, n]), v = i.useMemo(() => _ || h, [_, h]);
  return (0, r.jsx)(o.JZ, {
    title: p.intl.formatToPlainString(p.t.U3yyFs, {
      username: b
    }),
    description: p.intl.string(p.t.naWE6W),
    buttonText: v ? p.intl.string(p.t.nDdxOG) : p.intl.string(p.t.ICYEfY),
    buttonDisabled: v,
    onButtonPress: f
  })
}