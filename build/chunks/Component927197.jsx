/** Chunk was on 24843 **/
/** chunk id: 927197, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk610411 = require("./610411.js"),
  Chunk894010 = require("./894010.js"),
  Chunk495756 = require("./495756.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  let n = (0, i.bG)([l.A], () => l.A.getMute(e)),
    s = !n;
  return (0, r.jsx)(c.sLh, {
    id: "mute-game",
    label: u.intl.string(u.t["6EwEwp"]),
    checked: n,
    action: () => {
      (0, o.i1)({
        gameName: t,
        applicationId: e,
        label: s ? o.VD.MUTED : o.VD.UNMUTED,
        source: o.eh.GAME_CONTEXT_MENU
      }), (0, a.b)(e, s)
    }
  })
}