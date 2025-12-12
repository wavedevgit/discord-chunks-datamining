/** Chunk was on 63141 **/
/** chunk id: 175553, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk593481 = require("./593481.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk312839 = require("./312839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  let n = e.username,
    c = l.intl.format(l.t["Yk+uYG"], {
      username: ""
    }),
    d = (0, r.ov)(e),
    {
      trackView: u,
      trackClick: f
    } = (0, a.R)(o.n0.ActivityUserJoin, {
      notif_type: o.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: s.mFx.JOIN,
      activity_name: t.name
    });
  return {
    icon: d,
    title: n,
    body: c,
    hint: e => (0, i.Yj)(e, l.intl.string(l.t.WRj1Wn)),
    onNotificationShow: () => {
      u()
    },
    onDismissClick: () => {
      f("dismiss")
    }
  }
}