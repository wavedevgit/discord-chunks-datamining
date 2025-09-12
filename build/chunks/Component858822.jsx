/** Chunk was on 78728 **/
/** chunk id: 858822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk777861 = require("./777861.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t) {
  let n = null == e ? true : e.id,
    {
      muted: l,
      muteConfig: f
    } = (0, r.cj)([d.ZP], () => ({
      muted: null != n ? d.ZP.isMuted(n) : true,
      muteConfig: null != n ? d.ZP.getMuteConfig(n) : true
    }), [n]),
    b = (0, s.U)(f);
  return null == n ? null : l ? (0, i.jsx)(c.sNh, {
    id: "unmute-guild",
    label: g.intl.string(g.t.De0BTE),
    subtext: b,
    action: () => o.Z.updateGuildNotificationSettings(n, {
      muted: false
    }, _.ZB.Unmuted)
  }) : (0, i.jsx)(c.sNh, {
    id: "mute-guild",
    label: g.intl.string(g.t.vRzp7O),
    action: () => o.Z.updateGuildNotificationSettings(n, {
      muted: true
    }, _.ZB.Muted),
    children: (0, u.k)().map(e => {
      let {
        value: l,
        label: r
      } = e;
      return (0, i.jsx)(c.sNh, {
        id: "".concat(l),
        label: r,
        action: () => (function(e) {
          if (null == n) return;
          let i = e > 0 ? a()().add(e, "second").toISOString() : null;
          o.Z.updateGuildNotificationSettings(n, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, _.ZB.Muted, t)
        })(l)
      }, l)
    })
  })
}