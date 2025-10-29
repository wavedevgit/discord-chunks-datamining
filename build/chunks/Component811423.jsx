/** Chunk was on 73726 **/
/** chunk id: 811423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  let n = (0, i.e7)([o.Z], () => o.Z.getChannel(t)),
    c = null == n ? true : n.getGuildId();
  return null == e ? null : (0, r.jsx)(l.kSQ, {
    children: (0, r.jsx)(l.sNh, {
      id: "report-app",
      color: "danger",
      label: s.intl.string(s.t.NgA5vp),
      action: () => (0, a.uu)({
        application: e,
        entrypoint: "activity_ui_channel_call",
        contextualGuildId: null != c ? c : true,
        contextualChannelId: null == n ? true : n.id
      }),
      icon: l.U65
    })
  })
}