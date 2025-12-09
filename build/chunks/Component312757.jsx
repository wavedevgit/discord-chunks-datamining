/** Chunk was on 21395 **/
/** chunk id: 312757, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk287734 = require("./287734.js"),
  Chunk482241 = require("./482241.js"),
  Chunk554747 = require("./554747.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: a
  } = e, s = (0, c.qY)(t.id);
  if (null == s) return null;
  let d = () => {
    i.default.selectVoiceChannel(null), a()
  };
  return (0, l.jsx)(r.Modal, {
    transitionState: n,
    title: o.intl.string(o.t["4Ao8LC"]),
    subtitle: o.intl.string(o.t["0I0B8f"]),
    onClose: a,
    actions: [{
      onClick: d,
      variant: "secondary",
      text: o.intl.string(o.t.P60OAX)
    }, {
      onClick: () => {
        u.Z.endEvent(s.id, s.guild_id), d()
      },
      variant: "critical-primary",
      text: o.intl.string(o.t.mjB9pd)
    }]
  })
}