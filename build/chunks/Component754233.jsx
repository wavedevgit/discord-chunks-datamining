/** Chunk was on 2045 **/
/** chunk id: 754233, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => r
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk430824 = require("./430824.js"),
  Chunk614812 = require("./614812.js"),
  Chunk388032 = require("./388032.jsx");
let r = t => {
  let {
    onClose: i,
    guildId: e
  } = t, r = c.intl.format(c.t.ZqkXsL, {
    helpdeskArticle: a.z
  }), d = l.Z.getGuild(e);
  return null != d && (r = c.intl.format(c.t.jn0Xy8, {
    guildName: d.name,
    helpdeskArticle: a.z
  })), (0, s.jsx)(n.Modal, {
    transitionState: t.transitionState,
    onClose: i,
    title: c.intl.string(c.t.kJwpBQ),
    subtitle: r,
    actions: [{
      text: c.intl.string(c.t.BddRzc),
      onClick: i
    }]
  })
}