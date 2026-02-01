/** Chunk was on 71020 **/
/** chunk id: 507238, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk392567 = require("./392567.jsx"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk985018 = require("./985018.jsx");

function g(e, t) {
  let n = null == e ? true : e.id,
    {
      muted: r,
      muteConfig: g
    } = (0, a.cf)([u.Ay], () => ({
      muted: null != n ? u.Ay.isMuted(n) : true,
      muteConfig: null != n ? u.Ay.getMuteConfig(n) : true
    }), [n]),
    m = (0, _.M)(g);
  return null == n ? null : r ? (0, i.jsx)(o.Drp, {
    id: "unmute-guild",
    label: b.intl.string(b.t.De0BTC),
    subtext: m,
    action: () => s.A.updateGuildNotificationSettings(n, {
      muted: false
    }, d.fd.Unmuted)
  }) : (0, i.jsx)(o.Drp, {
    id: "mute-guild",
    label: b.intl.string(b.t.vRzp7P),
    action: () => s.A.updateGuildNotificationSettings(n, {
      muted: true
    }, d.fd.Muted),
    children: (0, c.gv)().map(e => {
      let {
        value: r,
        label: a
      } = e;
      return (0, i.jsx)(o.Drp, {
        id: "".concat(r),
        label: a,
        action: () => (function(e) {
          if (null == n) return;
          let i = e > 0 ? l()().add(e, "second").toISOString() : null;
          s.A.updateGuildNotificationSettings(n, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, d.fd.Muted, t)
        })(r)
      }, r)
    })
  })
}