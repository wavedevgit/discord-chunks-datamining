/** Chunk was on 21395 **/
/** chunk id: 312757, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk287734 = require("./287734.js"),
  Chunk482241 = require("./482241.js"),
  Chunk554747 = require("./554747.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: o
  } = e, s = (0, c.qY)(t.id);
  if (null == s) return null;
  let d = () => {
    i.default.selectVoiceChannel(null), o()
  };
  return (0, l.jsx)(r.Modal, {
    transitionState: n,
    title: a.intl.string(a.t["4Ao8LC"]),
    subtitle: a.intl.string(a.t["0I0B8f"]),
    onClose: o,
    actions: [{
      onClick: d,
      variant: "secondary",
      text: a.intl.string(a.t.P60OAX)
    }, {
      onClick: () => {
        u.Z.endEvent(s.id, s.guild_id), d()
      },
      variant: "critical-primary",
      text: a.intl.string(a.t.mjB9pd)
    }]
  })
}