/** Chunk was on 84018 **/
/** chunk id: 175333, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk471024 = require("./471024.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk684748 = require("./684748.js"),
  Chunk652215 = require("./652215.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  let n = e.username,
    c = a.intl.format(a.t["Yk+uYG"], {
      username: ""
    }),
    d = (0, r.ku)(e),
    {
      trackView: u,
      trackClick: p
    } = (0, s.Y)(o.KS.ActivityUserJoin, {
      notif_type: o.KS.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: l.xL.JOIN,
      activity_name: t.name
    });
  return {
    icon: d,
    title: n,
    body: c,
    hint: e => (0, i.de)(e, a.intl.string(a.t.WRj1Wn)),
    onNotificationShow: () => {
      u()
    },
    onDismissClick: () => {
      p("dismiss")
    }
  }
}