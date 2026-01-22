/** Chunk was on 71447 **/
/** chunk id: 428731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk486020 = require("./486020.js"),
  Chunk592598 = require("./592598.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  if (r.A.isNotificationDisabled(a.KS.ActivityUserJoin)) return null;
  let n = e.username,
    c = s.intl.format(s.t["Yk+uYG"], {
      username: ""
    }),
    u = (0, i.ku)(e),
    d = s.intl.string(s.t.WRj1Wn),
    {
      trackView: p,
      trackClick: h
    } = (0, l.Y9)(a.KS.ActivityUserJoin, {
      notif_type: a.KS.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: o.xL.JOIN,
      activity_name: t.name
    });
  return {
    icon: u,
    title: n,
    body: c,
    hint: d,
    onNotificationShow: () => {
      p()
    },
    onDismissClick: () => {
      h("dismiss")
    }
  }
}