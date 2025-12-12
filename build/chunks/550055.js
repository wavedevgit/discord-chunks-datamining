/** Chunk was on 50751 **/
/** chunk id: 550055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk768581 = require("./768581.js"),
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  if (r.Z.isNotificationDisabled(a.n0.ActivityUserJoin)) return null;
  let n = e.username,
    c = s.intl.format(s.t["Yk+uYG"], {
      username: ""
    }),
    u = (0, i.ov)(e),
    d = s.intl.string(s.t.WRj1Wn),
    {
      trackView: f,
      trackClick: h
    } = (0, l.Rg)(a.n0.ActivityUserJoin, {
      notif_type: a.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: o.mFx.JOIN,
      activity_name: t.name
    });
  return {
    icon: u,
    title: n,
    body: c,
    hint: d,
    onNotificationShow: () => {
      f()
    },
    onDismissClick: () => {
      h("dismiss")
    }
  }
}