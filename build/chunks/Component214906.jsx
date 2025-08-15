/** Chunk was on 86357 **/
/** chunk id: 214906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  let [t, n, i] = (0, a.Wu)([c.Z], () => [c.Z.isMuted(e.id), c.Z.getMuteConfig(e.id), c.Z.hasJoined(e.id)]), h = (0, s.U)(n);

  function f(t) {
    u.Z.setNotificationSettings(e, {
      muted: t
    })
  }
  return i ? t ? (0, r.jsx)(o.sNh, {
    id: "unmute-channel",
    label: e.isForumPost() ? p.intl.string(p.t["0JQfsL"]) : p.intl.string(p.t["Cq/TzM"]),
    subtext: h,
    action: () => f(false)
  }) : (0, r.jsx)(o.sNh, {
    id: "mute-channel",
    label: e.isForumPost() ? p.intl.string(p.t["nP+YkZ"]) : p.intl.string(p.t.bUUd8v),
    action: () => f(true),
    children: (0, d.k)().map(t => {
      let {
        value: n,
        label: i
      } = t;
      return (0, r.jsx)(o.sNh, {
        id: "".concat(n),
        label: i,
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
  }) : (0, r.jsx)(o.sNh, {
    id: "mute-disabled",
    label: e.isForumPost() ? p.intl.string(p.t["nP+YkZ"]) : p.intl.string(p.t.bUUd8v),
    disabled: true
  })
}