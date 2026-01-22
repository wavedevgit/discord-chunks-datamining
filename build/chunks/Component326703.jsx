/** Chunk was on 94743 **/
/** chunk id: 326703, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk71393 = require("./71393.js"),
  Chunk66604 = require("./66604.js"),
  Chunk985018 = require("./985018.jsx");
let d = t => {
  let {
    onClose: e,
    guildId: i
  } = t, d = r.intl.format(r.t.ZqkXsC, {
    helpdeskArticle: a.V
  }), c = n.A.getGuild(i);
  return null != c && (d = r.intl.format(r.t.jn0Xyx, {
    guildName: c.name,
    helpdeskArticle: a.V
  })), (0, s.jsx)(l.Modal, {
    transitionState: t.transitionState,
    onClose: e,
    title: r.intl.string(r.t.kJwpBW),
    subtitle: d,
    actions: [{
      text: r.intl.string(r.t.BddRzS),
      onClick: e
    }]
  })
}