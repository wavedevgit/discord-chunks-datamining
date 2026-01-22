/** Chunk was on 13492 **/
/** chunk id: 887092, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928658 = require("./928658.js"),
  Chunk734057 = require("./734057.js"),
  Chunk985018 = require("./985018.jsx");

function i(e, t, a) {
  let i = (0, n.bG)([r.A], () => r.A.getChannel(t)),
    f = null == i ? true : i.getGuildId();
  return (0, c.jsx)(l.Drp, {
    id: "report-app",
    color: "danger",
    label: o.intl.string(o.t.NgA5vp),
    action: () => (0, d.r3)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != f ? f : true,
      contextualChannelId: null == i ? true : i.id,
      appContext: a
    }),
    icon: l.iFK
  })
}