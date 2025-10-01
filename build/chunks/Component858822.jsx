/** Chunk was on 66697 **/
/** chunk id: 858822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk777861 = require("./777861.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t) {
  let n = null == e ? true : e.id,
    {
      muted: a,
      muteConfig: b
    } = (0, o.cj)([u.ZP], () => ({
      muted: null != n ? u.ZP.isMuted(n) : true,
      muteConfig: null != n ? u.ZP.getMuteConfig(n) : true
    }), [n]),
    g = (0, d.U)(b);
  return null == n ? null : a ? (0, i.jsx)(c.sNh, {
    id: "unmute-guild",
    label: h.intl.string(h.t.De0BTE),
    subtext: g,
    action: () => r.Z.updateGuildNotificationSettings(n, {
      muted: false
    }, _.ZB.Unmuted)
  }) : (0, i.jsx)(c.sNh, {
    id: "mute-guild",
    label: h.intl.string(h.t.vRzp7O),
    action: () => r.Z.updateGuildNotificationSettings(n, {
      muted: true
    }, _.ZB.Muted),
    children: (0, s.k)().map(e => {
      let {
        value: a,
        label: o
      } = e;
      return (0, i.jsx)(c.sNh, {
        id: "".concat(a),
        label: o,
        action: () => (function(e) {
          if (null == n) return;
          let i = e > 0 ? l()().add(e, "second").toISOString() : null;
          r.Z.updateGuildNotificationSettings(n, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, _.ZB.Muted, t)
        })(a)
      }, a)
    })
  })
}