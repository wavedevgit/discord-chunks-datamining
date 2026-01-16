/** Chunk was on 27278 **/
/** chunk id: 870745, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, n, t) {
  let d = (0, o.e7)([c.Z], () => c.Z.getChannel(n)),
    u = null == d ? true : d.getGuildId();
  return (0, a.jsx)(i.sNh, {
    id: "report-app",
    color: "danger",
    label: l.intl.string(l.t.NgA5vp),
    action: () => (0, r.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != u ? u : true,
      contextualChannelId: null == d ? true : d.id,
      appContext: t
    }),
    icon: i.U65
  })
}