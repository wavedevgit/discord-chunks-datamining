/** Chunk was on 78528 **/
/** chunk id: 507238, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk392567 = require("./392567.jsx"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t) {
  let n = null == e ? true : e.id,
    {
      muted: l,
      muteConfig: f
    } = (0, s.cf)([d.Ay], () => ({
      muted: null != n ? d.Ay.isMuted(n) : true,
      muteConfig: null != n ? d.Ay.getMuteConfig(n) : true
    }), [n]),
    g = (0, u.M)(f);
  return null == n ? null : l ? (0, r.jsx)(a.Drp, {
    id: "unmute-guild",
    label: h.intl.string(h.t.De0BTC),
    subtext: g,
    action: () => o.A.updateGuildNotificationSettings(n, {
      muted: false
    }, p.fd.Unmuted)
  }) : (0, r.jsx)(a.Drp, {
    id: "mute-guild",
    label: h.intl.string(h.t.vRzp7P),
    action: () => o.A.updateGuildNotificationSettings(n, {
      muted: true
    }, p.fd.Muted),
    children: (0, c.gv)().map(e => {
      let {
        value: l,
        label: s
      } = e;
      return (0, r.jsx)(a.Drp, {
        id: "".concat(l),
        label: s,
        action: () => (function(e) {
          if (null == n) return;
          let r = e > 0 ? i()().add(e, "second").toISOString() : null;
          o.A.updateGuildNotificationSettings(n, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: r
            }
          }, p.fd.Muted, t)
        })(l)
      }, l)
    })
  })
}