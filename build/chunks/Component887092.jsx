/** Chunk was on 33648 **/
/** chunk id: 887092, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928658 = require("./928658.js"),
  Chunk734057 = require("./734057.js"),
  Chunk985018 = require("./985018.jsx");

function r(t, n, i) {
  let r = (0, o.bG)([d.A], () => d.A.getChannel(n)),
    u = null == r ? true : r.getGuildId();
  return (0, l.jsx)(a.Drp, {
    id: "report-app",
    color: "danger",
    label: p.intl.string(p.t.NgA5vp),
    action: () => (0, e.r3)({
      application: t,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != u ? u : true,
      contextualChannelId: null == r ? true : r.id,
      appContext: i
    }),
    icon: a.iFK
  })
}