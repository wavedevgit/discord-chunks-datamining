/** Chunk was on 97887 **/
/** chunk id: 451556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk928658 = require("./928658.js"),
  Chunk734057 = require("./734057.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  let n = (0, l.bG)([a.A], () => a.A.getChannel(t)),
    c = null == n ? true : n.getGuildId();
  return null == e ? null : (0, r.jsx)(i.rXV, {
    children: (0, r.jsx)(i.Drp, {
      id: "report-app",
      color: "danger",
      label: o.intl.string(o.t.NgA5vp),
      action: () => (0, s.r3)({
        application: e,
        entrypoint: "activity_ui_channel_call",
        contextualGuildId: null != c ? c : true,
        contextualChannelId: null == n ? true : n.id
      }),
      icon: i.iFK
    })
  })
}