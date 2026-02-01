/** Chunk was on 78441 **/
/** chunk id: 57907, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk392567 = require("./392567.jsx"),
  Chunk152007 = require("./152007.js"),
  Chunk867455 = require("./867455.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk985018 = require("./985018.jsx");

function f(t) {
  let [e, n, r] = (0, a.yK)([d.A], () => [d.A.isMuted(t.id), d.A.getMuteConfig(t.id), d.A.hasJoined(t.id)]), f = (0, s.M)(n);

  function g(e) {
    u.A.setNotificationSettings(t, {
      muted: e
    })
  }
  return r ? e ? (0, i.jsx)(o.Drp, {
    id: "unmute-channel",
    label: t.isForumPost() ? A.intl.string(A.t["0JQfsP"]) : A.intl.string(A.t["Cq/TzF"]),
    subtext: f,
    action: () => g(false)
  }) : (0, i.jsx)(o.Drp, {
    id: "mute-channel",
    label: t.isForumPost() ? A.intl.string(A.t["nP+Ykd"]) : A.intl.string(A.t.bUUd8q),
    action: () => g(true),
    children: (0, c.gv)().map(e => {
      let {
        value: n,
        label: r
      } = e;
      return (0, i.jsx)(o.Drp, {
        id: "".concat(n),
        label: r,
        action: () => {
          let e;
          return e = n > 0 ? l()().add(n, "second").toISOString() : null, void u.A.setNotificationSettings(t, {
            muted: true,
            mute_config: {
              selected_time_window: n,
              end_time: e
            }
          })
        }
      }, n)
    })
  }) : (0, i.jsx)(o.Drp, {
    id: "mute-disabled",
    label: t.isForumPost() ? A.intl.string(A.t["nP+Ykd"]) : A.intl.string(A.t.bUUd8q),
    disabled: true
  })
}