/** Chunk was on 40394 **/
/** chunk id: 788408, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk976860 = require("./976860.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(n, t) {
  return (0, l.bG)([c.A], () => c.A.can(o.xBc.CONNECT, n), [n]) && n.isGuildVocal() ? (0, i.jsx)(r.Drp, {
    id: "open-chat",
    label: d.intl.string(d.t.ZXxLQg),
    action: () => {
      a.A.updateChatOpen(n.id, true), (0, s.uh)(t.id, n.id)
    }
  }) : null
}