/** Chunk was on 2045 **/
/** chunk id: 754233, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk430824 = require("./430824.js"),
  Chunk614812 = require("./614812.js"),
  Chunk388032 = require("./388032.jsx");
let c = t => {
  let {
    onClose: i,
    guildId: e
  } = t, c = r.intl.format(r.t.ZqkXsC, {
    helpdeskArticle: a.z
  }), d = l.Z.getGuild(e);
  return null != d && (c = r.intl.format(r.t.jn0Xyx, {
    guildName: d.name,
    helpdeskArticle: a.z
  })), (0, s.jsx)(n.Modal, {
    transitionState: t.transitionState,
    onClose: i,
    title: r.intl.string(r.t.kJwpBW),
    subtitle: c,
    actions: [{
      text: r.intl.string(r.t.BddRzS),
      onClick: i
    }]
  })
}