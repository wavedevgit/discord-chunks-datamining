/** Chunk was on 89298 **/
/** chunk id: 609626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk768581 = require("./768581.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t) {
  let n = e.username,
    s = a.intl.format(a.t["Yk+uYG"], {
      username: ""
    }),
    c = (0, i.ov)(e),
    u = a.intl.string(a.t.WRj1Wl),
    {
      trackView: d,
      trackClick: p
    } = (0, r.R)(o.n0.ActivityUserJoin, {
      notif_type: o.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: l.mFx.JOIN,
      activity_name: t.name
    });
  return {
    icon: c,
    title: n,
    body: s,
    hint: u,
    onNotificationShow: () => {
      d()
    },
    onDismissClick: () => {
      p("dismiss")
    }
  }
}