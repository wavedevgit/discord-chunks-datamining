/** Chunk was on 33648 **/
/** chunk id: 887092, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928658 = require("./928658.js"),
  Chunk734057 = require("./734057.js"),
  Chunk985018 = require("./985018.jsx");

function p(t, i, n) {
  let p = (0, e.bG)([d.A], () => d.A.getChannel(i)),
    c = null == p ? true : p.getGuildId();
  return (0, o.jsx)(l.Drp, {
    id: "report-app",
    color: "danger",
    label: r.intl.string(r.t.NgA5vp),
    action: () => (0, a.r3)({
      application: t,
      entrypoint: "activity_ui_popout",
      contextualGuildId: null != c ? c : true,
      contextualChannelId: null == p ? true : p.id,
      appContext: n
    }),
    icon: l.iFK,
    leadingAccessory: {
      type: "icon",
      icon: l.iFK
    }
  })
}