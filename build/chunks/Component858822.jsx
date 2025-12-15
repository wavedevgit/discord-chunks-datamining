/** Chunk was on 88039 **/
/** chunk id: 858822, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function b(e, n) {
  let t = null == e ? true : e.id,
    {
      muted: c,
      muteConfig: b
    } = (0, a.cj)([d.ZP], () => ({
      muted: null != t ? d.ZP.isMuted(t) : true,
      muteConfig: null != t ? d.ZP.getMuteConfig(t) : true
    }), [t]),
    g = (0, u.U)(b);
  return null == t ? null : c ? (0, i.jsx)(r.sNh, {
    id: "unmute-guild",
    label: _.intl.string(_.t.De0BTC),
    subtext: g,
    action: () => o.Z.updateGuildNotificationSettings(t, {
      muted: false
    }, f.ZB.Unmuted)
  }) : (0, i.jsx)(r.sNh, {
    id: "mute-guild",
    label: _.intl.string(_.t.vRzp7P),
    action: () => o.Z.updateGuildNotificationSettings(t, {
      muted: true
    }, f.ZB.Muted),
    children: (0, s.k)().map(e => {
      let {
        value: c,
        label: a
      } = e;
      return (0, i.jsx)(r.sNh, {
        id: "".concat(c),
        label: a,
        action: () => (function(e) {
          if (null == t) return;
          let i = e > 0 ? l()().add(e, "second").toISOString() : null;
          o.Z.updateGuildNotificationSettings(t, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, f.ZB.Muted, n)
        })(c)
      }, c)
    })
  })
}