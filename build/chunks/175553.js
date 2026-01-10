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
    c = a.intl.format(a.t["Yk+uYG"], {
      username: ""
    }),
    d = (0, r.ov)(e),
    {
      trackView: u,
      trackClick: h
    } = (0, s.R)(l.n0.ActivityUserJoin, {
      notif_type: l.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: o.mFx.JOIN,
      activity_name: t.name
    });
  return {
    icon: d,
    title: n,
    body: c,
    hint: e => (0, i.Yj)(e, a.intl.string(a.t.WRj1Wn)),
    onNotificationShow: () => {
      u()
    },
    onDismissClick: () => {
      h("dismiss")
    }
  }
}