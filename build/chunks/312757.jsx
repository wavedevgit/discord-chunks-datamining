/** Chunk was on 21395 **/
/** chunk id: 312757, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk82659 = require("./82659.jsx"),
  Chunk287734 = require("./287734.js"),
  Chunk482241 = require("./482241.js"),
  Chunk554747 = require("./554747.js"),
  Chunk388032 = require("./388032.js");

function u(t) {
  let {
    channel: i,
    transitionState: n,
    onClose: u
  } = t, d = (0, s.qY)(i.id);
  if (null == d) return null;
  let o = () => {
    a.default.selectVoiceChannel(null), u()
  };
  return <e.Modal transitionState={n} title={c.intl.string(c.t["4Ao8LC"])} subtitle={c.intl.string(c.t["0I0B8f"])} onClose={u} actions={[{
      onClick: o,
      variant: "secondary",
      text: c.intl.string(c.t.P60OAQ)
    }, {
      onClick: () => {
        r.Z.endEvent(d.id, d.guild_id), o()
      },
      variant: "critical-primary",
      text: c.intl.string(c.t.mjB9pa)
    }]} />
}