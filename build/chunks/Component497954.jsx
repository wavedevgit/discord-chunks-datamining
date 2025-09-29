/** Chunk was on 60151 **/
/** chunk id: 497954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194359 = require("./194359.js"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
  let {
    user: t,
    channelId: n,
    reportId: p
  } = e, {
    isIgnored: g,
    isBlocked: f
  } = (0, l.cj)([d.Z], () => ({
    isIgnored: d.Z.isIgnored(t.id),
    isBlocked: d.Z.isBlocked(t.id)
  }), [t]), b = (0, l.e7)([c.Z], () => c.Z.getChannel(n), [n]), h = i.useMemo(() => u.ZP.getName(null == b ? true : b.guild_id, null == b ? true : b.id, t), [b, t]), x = i.useCallback(() => {
    o.ZP.trackWithMetadata(_.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: p
    }), a.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n)
  }, [t, p, n]), v = i.useMemo(() => g || f, [g, f]);
  return (0, r.jsx)(s.JZ, {
    title: m.intl.formatToPlainString(m.t.U3yyFh, {
      username: h
    }),
    description: m.intl.string(m.t.naWE6e),
    buttonText: v ? m.intl.string(m.t.nDdxOD) : m.intl.string(m.t.ICYEfX),
    buttonDisabled: v,
    onButtonPress: x
  })
}