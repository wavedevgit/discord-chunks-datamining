/** Chunk was on 40394 **/
/** chunk id: 304694, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk928658 = require("./928658.js"),
  Chunk446600 = require("./446600.js"),
  Chunk985018 = require("./985018.jsx");

function c(n) {
  let t = a.A.isLive(n.id);
  return n.isGuildStageVoice() && t ? (0, i.jsx)(l.Drp, {
    id: "report-stage",
    label: s.intl.string(s.t.JGj6Ci),
    action: () => (0, r.pb)(n),
    icon: l.iFK,
    color: "danger"
  }) : null
}