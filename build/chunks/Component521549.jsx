/** Chunk was on 34526 **/
/** chunk id: 521549, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk956793 = require("./956793.js"),
  Chunk496092 = require("./496092.js"),
  Chunk508654 = require("./508654.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: a
  } = e, o = (0, c.Qs)(t.id);
  if (null == o) return null;
  let d = () => {
    i.default.selectVoiceChannel(null), a()
  };
  return (0, l.jsx)(r.Modal, {
    transitionState: n,
    title: s.intl.string(s.t["4Ao8LC"]),
    subtitle: s.intl.string(s.t["0I0B8f"]),
    onClose: a,
    actions: [{
      onClick: d,
      variant: "secondary",
      text: s.intl.string(s.t.P60OAX)
    }, {
      onClick: () => {
        u.A.endEvent(o.id, o.guild_id), d()
      },
      variant: "critical-primary",
      text: s.intl.string(s.t.mjB9pd)
    }]
  })
}