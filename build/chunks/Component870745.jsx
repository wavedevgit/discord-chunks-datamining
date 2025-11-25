/** Chunk was on 27278 **/
/** chunk id: 870745, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, n, t) {
  let _ = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
    u = null == _ ? true : _.getGuildId();
  return (0, o.jsx)(a.sNh, {
    id: "report-app",
    color: "danger",
    label: l.intl.string(l.t.NgA5vp),
    action: () => (0, i.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != u ? u : true,
      contextualChannelId: null == _ ? true : _.id,
      appContext: t
    }),
    icon: a.U65
  })
}