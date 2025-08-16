/** Chunk was on 78650 **/
/** chunk id: 214906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk777861 = require("./777861.jsx"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let [t, n, r] = (0, a.Wu)([d.Z], () => [d.Z.isMuted(e.id), d.Z.getMuteConfig(e.id), d.Z.hasJoined(e.id)]), h = (0, s.U)(n);

  function g(t) {
    u.Z.setNotificationSettings(e, {
      muted: t
    })
  }
  return r ? t ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: e.isForumPost() ? f.intl.string(f.t["0JQfsL"]) : f.intl.string(f.t["Cq/TzM"]),
    subtext: h,
    action: () => g(false)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: e.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    action: () => g(true),
    children: (0, c.k)().map(t => {
      let {
        value: n,
        label: r
      } = t;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(n),
        label: r,
        action: () => (function(t) {
          let n = t > 0 ? l()().add(t, "second").toISOString() : null;
          u.Z.setNotificationSettings(e, {
            muted: true,
            mute_config: {
              selected_time_window: t,
              end_time: n
            }
          })
        })(n)
      }, n)
    })
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-disabled",
    label: e.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    disabled: true
  })
}