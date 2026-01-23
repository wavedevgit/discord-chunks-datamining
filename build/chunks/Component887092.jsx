/** Chunk was on 13492 **/
/** chunk id: 887092, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928658 = require("./928658.js"),
  Chunk734057 = require("./734057.js"),
  Chunk985018 = require("./985018.jsx");

function _(e, n, t) {
  let _ = (0, o.bG)([l.A], () => l.A.getChannel(n)),
    s = null == _ ? true : _.getGuildId();
  return (0, r.jsx)(a.Drp, {
    id: "report-app",
    color: "danger",
    label: c.intl.string(c.t.NgA5vp),
    action: () => (0, i.r3)({
      application: e,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != s ? s : true,
      contextualChannelId: null == _ ? true : _.id,
      appContext: t
    }),
    icon: a.iFK
  })
}