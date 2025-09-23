/** Chunk was on 46154 **/
/** chunk id: 214906, original params: t,n,e (module,exports,require) **/
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

function h(t) {
  let [n, e, a] = (0, r.Wu)([d.Z], () => [d.Z.isMuted(t.id), d.Z.getMuteConfig(t.id), d.Z.hasJoined(t.id)]), h = (0, s.U)(e);

  function v(n) {
    u.Z.setNotificationSettings(t, {
      muted: n
    })
  }
  return a ? n ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: t.isForumPost() ? f.intl.string(f.t["0JQfsL"]) : f.intl.string(f.t["Cq/TzM"]),
    subtext: h,
    action: () => v(false)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    action: () => v(true),
    children: (0, c.k)().map(n => {
      let {
        value: e,
        label: a
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(e),
        label: a,
        action: () => (function(n) {
          let e = n > 0 ? l()().add(n, "second").toISOString() : null;
          u.Z.setNotificationSettings(t, {
            muted: true,
            mute_config: {
              selected_time_window: n,
              end_time: e
            }
          })
        })(e)
      }, e)
    })
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-disabled",
    label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
    disabled: true
  })
}