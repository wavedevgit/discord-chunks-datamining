/** Chunk was on 22569 **/
/** chunk id: 312757, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk287734 = require("./287734.js"),
  Chunk482241 = require("./482241.js"),
  Chunk554747 = require("./554747.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  let {
    channel: n,
    transitionState: i,
    onClose: s
  } = t, p = (0, r.qY)(n.id);
  if (null == p) return null;
  let I = () => {
    l.default.selectVoiceChannel(null), s()
  };
  return (0, e.jsx)(d.Modal, {
    transitionState: i,
    title: _.intl.string(_.t["4Ao8LC"]),
    subtitle: _.intl.string(_.t["0I0B8f"]),
    onClose: s,
    actions: [{
      onClick: I,
      variant: "secondary",
      text: _.intl.string(_.t.P60OAQ)
    }, {
      onClick: () => {
        a.Z.endEvent(p.id, p.guild_id), I()
      },
      variant: "critical-primary",
      text: _.intl.string(_.t.mjB9pa)
    }]
  })
}