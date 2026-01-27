/** Chunk was on 12970 **/
/** chunk id: 103629, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk845625 = require("./845625.js"),
  Chunk785823 = require("./785823.js"),
  Chunk137207 = require("./137207.js"),
  Chunk734057 = require("./734057.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t) {
  let n = (0, l.bG)([d.A], () => null != e && d.A.canWithPartialContext(A.xBc.MANAGE_MESSAGES, {
      channelId: e
    }), [e]),
    b = (0, l.bG)([c.A], () => c.A.getChannel(e), [e]),
    E = (0, l.bG)([s.A], () => null != e && null != t ? s.A.getMessage(e, t) : null),
    g = (0, o.kZ)(null != E ? E : null);
  if (null == b || null == E) return null;
  let y = null != g && g.actions.hasOwnProperty(a.G.SET_COMPLETED) ? a.G.UNSET_COMPLETED : a.G.SET_COMPLETED,
    f = y === a.G.SET_COMPLETED ? O.intl.string(O.t.VWNyUu) : O.intl.string(O.t.l9GqxI);
  return n && null != t ? (0, r.jsx)(i.Drp, {
    id: "mark-automod-alert-completed",
    label: f,
    action: () => {
      (0, u.E5)(t, b, y)
    }
  }, "mark-automod-alert-completed") : null
}