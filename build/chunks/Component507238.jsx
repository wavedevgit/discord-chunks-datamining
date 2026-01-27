/** Chunk was on 59461 **/
/** chunk id: 507238, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  r = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk392567 = require("./392567.jsx"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk985018 = require("./985018.jsx");

function E(e, n) {
  let t = null == e ? true : e.id,
    {
      muted: l,
      muteConfig: E
    } = (0, u.cf)([_.Ay], () => ({
      muted: null != t ? _.Ay.isMuted(t) : true,
      muteConfig: null != t ? _.Ay.getMuteConfig(t) : true
    }), [t]),
    g = (0, c.M)(E);
  return null == t ? null : l ? (0, i.jsx)(a.Drp, {
    id: "unmute-guild",
    label: S.intl.string(S.t.De0BTC),
    subtext: g,
    action: () => o.A.updateGuildNotificationSettings(t, {
      muted: false
    }, d.fd.Unmuted)
  }) : (0, i.jsx)(a.Drp, {
    id: "mute-guild",
    label: S.intl.string(S.t.vRzp7P),
    action: () => o.A.updateGuildNotificationSettings(t, {
      muted: true
    }, d.fd.Muted),
    children: (0, s.gv)().map(e => {
      let {
        value: l,
        label: u
      } = e;
      return (0, i.jsx)(a.Drp, {
        id: "".concat(l),
        label: u,
        action: () => (function(e) {
          if (null == t) return;
          let i = e > 0 ? r()().add(e, "second").toISOString() : null;
          o.A.updateGuildNotificationSettings(t, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, d.fd.Muted, n)
        })(l)
      }, l)
    })
  })
}