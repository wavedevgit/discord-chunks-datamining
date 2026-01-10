/** Chunk was on 81985 **/
/** chunk id: 858822, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e, t) {
  let n = null == e ? true : e.id,
    {
      muted: i,
      muteConfig: h
    } = (0, a.cj)([d.ZP], () => ({
      muted: null != n ? d.ZP.isMuted(n) : true,
      muteConfig: null != n ? d.ZP.getMuteConfig(n) : true
    }), [n]),
    g = (0, u.U)(h);
  return null == n ? null : i ? (0, r.jsx)(o.sNh, {
    id: "unmute-guild",
    label: f.intl.string(f.t.De0BTC),
    subtext: g,
    action: () => s.Z.updateGuildNotificationSettings(n, {
      muted: false
    }, p.ZB.Unmuted)
  }) : (0, r.jsx)(o.sNh, {
    id: "mute-guild",
    label: f.intl.string(f.t.vRzp7P),
    action: () => s.Z.updateGuildNotificationSettings(n, {
      muted: true
    }, p.ZB.Muted),
    children: (0, c.k)().map(e => {
      let {
        value: i,
        label: a
      } = e;
      return (0, r.jsx)(o.sNh, {
        id: "".concat(i),
        label: a,
        action: () => (function(e) {
          if (null == n) return;
          let r = e > 0 ? l()().add(e, "second").toISOString() : null;
          s.Z.updateGuildNotificationSettings(n, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: r
            }
          }, p.ZB.Muted, t)
        })(i)
      }, i)
    })
  })
}