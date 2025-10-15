/** Chunk was on 27278 **/
/** chunk id: 870745, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, n, t) {
  let u = (0, r.e7)([c.Z], () => c.Z.getChannel(n)),
    _ = null == u ? true : u.getGuildId();
  return (0, o.jsx)(a.sNh, {
    id: "report-app",
    color: "danger",
    label: l.intl.string(l.t.NgA5vp),
    action: () => (0, i.uu)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != _ ? _ : true,
      contextualChannelId: null == u ? true : u.id,
      appContext: t
    }),
    icon: a.U65
  })
}