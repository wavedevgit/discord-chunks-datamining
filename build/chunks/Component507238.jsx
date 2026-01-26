/** Chunk was on 81579 **/
/** chunk id: 507238, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
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

function g(e, n) {
  let t = null == e ? true : e.id,
    {
      muted: l,
      muteConfig: g
    } = (0, a.cf)([_.Ay], () => ({
      muted: null != t ? _.Ay.isMuted(t) : true,
      muteConfig: null != t ? _.Ay.getMuteConfig(t) : true
    }), [t]),
    E = (0, c.M)(g);
  return null == t ? null : l ? (0, i.jsx)(s.Drp, {
    id: "unmute-guild",
    label: S.intl.string(S.t.De0BTC),
    subtext: E,
    action: () => u.A.updateGuildNotificationSettings(t, {
      muted: false
    }, d.fd.Unmuted)
  }) : (0, i.jsx)(s.Drp, {
    id: "mute-guild",
    label: S.intl.string(S.t.vRzp7P),
    action: () => u.A.updateGuildNotificationSettings(t, {
      muted: true
    }, d.fd.Muted),
    children: (0, o.gv)().map(e => {
      let {
        value: l,
        label: a
      } = e;
      return (0, i.jsx)(s.Drp, {
        id: "".concat(l),
        label: a,
        action: () => (function(e) {
          if (null == t) return;
          let i = e > 0 ? r()().add(e, "second").toISOString() : null;
          u.A.updateGuildNotificationSettings(t, {
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