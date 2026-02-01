/** Chunk was on 71447 **/
/** chunk id: 428731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk486020 = require("./486020.js"),
  Chunk592598 = require("./592598.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  if (r.A.isNotificationDisabled(a.KS.ActivityUserJoin)) return null;
  let n = e.username,
    u = o.intl.format(o.t["Yk+uYG"], {
      username: ""
    }),
    c = (0, i.ku)(e),
    d = o.intl.string(o.t.WRj1Wn),
    {
      trackView: h,
      trackClick: p
    } = (0, l.Y9)(a.KS.ActivityUserJoin, {
      notif_type: a.KS.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: s.xL.JOIN,
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