/** Chunk was on web.js **/
/** chunk id: 811423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726521 = require("./726521.js"),
  Chunk592125 = require("./592125.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.getChannel(t)),
    c = null == n ? true : n.getGuildId();
  return null == e ? null : (0, r.jsx)(o.kSQ, {
    children: (0, r.jsx)(o.sNh, {
      id: "report-app",
      color: "danger",
      label: l.intl.string(l.t.NgA5vr),
      action: () => (0, a.uu)({
        application: e,
        entrypoint: "activity_ui_channel_call",
        contextualGuildId: null != c ? c : true,
        contextualChannelId: null == n ? true : n.id
      }),
      icon: o.U65
    })
  })
}