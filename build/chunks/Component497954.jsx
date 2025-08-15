/** Chunk was on 59727 **/
/** chunk id: 497954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194359 = require("./194359.js"),
  Chunk367907 = require("./367907.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = e => {
  let {
    user: t,
    channelId: n,
    reportId: _
  } = e, {
    isIgnored: g,
    isBlocked: b
  } = (0, i.cj)([d.Z], () => ({
    isIgnored: d.Z.isIgnored(t.id),
    isBlocked: d.Z.isBlocked(t.id)
  }), [t]), h = (0, i.e7)([c.Z], () => c.Z.getChannel(n), [n]), x = a.useMemo(() => u.ZP.getName(null == h ? true : h.guild_id, null == h ? true : h.id, t), [h, t]), f = a.useCallback(() => {
    o.ZP.trackWithMetadata(m.rMx.IAR_IGNORE_USER_BUTTON_CLICKED, {
      other_user_id: t.id,
      report_id: _
    }), l.Z.ignoreUser(t.id, "web_iar_ignore_user_element", n)
  }, [t, _, n]), v = a.useMemo(() => g || b, [g, b]);
  return (0, r.jsx)(s.JZ, {
    title: p.intl.formatToPlainString(p.t.U3yyFh, {
      username: x
    }),
    description: p.intl.string(p.t.naWE6e),
    buttonText: v ? p.intl.string(p.t.nDdxOD) : p.intl.string(p.t.ICYEfX),
    buttonDisabled: v,
    onButtonPress: f
  })
}