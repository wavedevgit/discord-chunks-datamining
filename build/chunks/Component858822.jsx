/** Chunk was on 64636 **/
/** chunk id: 858822, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function g(e, t) {
  let n = null == e ? true : e.id,
    {
      muted: c,
      muteConfig: g
    } = (0, l.cj)([f.ZP], () => ({
      muted: null != n ? f.ZP.isMuted(n) : true,
      muteConfig: null != n ? f.ZP.getMuteConfig(n) : true
    }), [n]),
    h = (0, s.U)(g);
  return null == n ? null : c ? (0, i.jsx)(o.sNh, {
    id: "unmute-guild",
    label: b.intl.string(b.t.De0BTC),
    subtext: h,
    action: () => r.Z.updateGuildNotificationSettings(n, {
      muted: false
    }, u.ZB.Unmuted)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-guild",
    label: b.intl.string(b.t.vRzp7P),
    action: () => r.Z.updateGuildNotificationSettings(n, {
      muted: true
    }, u.ZB.Muted),
    children: (0, d.k)().map(e => {
      let {
        value: c,
        label: l
      } = e;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(c),
        label: l,
        action: () => (function(e) {
          if (null == n) return;
          let i = e > 0 ? a()().add(e, "second").toISOString() : null;
          r.Z.updateGuildNotificationSettings(n, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, u.ZB.Muted, t)
        })(c)
      }, c)
    })
  })
}