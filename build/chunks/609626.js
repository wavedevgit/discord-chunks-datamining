/** Chunk was on 50751 **/
/** chunk id: 609626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk768581 = require("./768581.js"),
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  if (r.Z.isNotificationDisabled(a.n0.ActivityUserJoin)) return null;
  let n = e.username,
    u = s.intl.format(s.t["Yk+uYG"], {
      username: ""
    }),
    c = (0, i.ov)(e),
    d = s.intl.string(s.t.WRj1Wn),
    {
      trackView: h,
      trackClick: p
    } = (0, l.Rg)(a.n0.ActivityUserJoin, {
      notif_type: a.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: o.mFx.JOIN,
      activity_name: t.name
    });
  return {
    icon: c,
    title: n,
    body: u,
    hint: d,
    onNotificationShow: () => {
      h()
    },
    onDismissClick: () => {
      p("dismiss")
    }
  }
}