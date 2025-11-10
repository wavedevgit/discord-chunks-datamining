/** Chunk was on 70675 **/
/** chunk id: 88966, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk887413 = require("./887413.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, n, t) {
  let g = (0, u.Aq)();
  return (0, i.e7)([s.default], () => s.default.getId() === e) || n === d.IlC.POPOUT ? null : (0, l.jsx)(r.sNh, {
    id: "message-user",
    label: c.intl.string(c.t.OAJQlP),
    action: () => {
      (0, o.i)(n, true), a.Z.openPrivateChannel({
        recipientIds: e
      }), g.dispatch(d.CkL.POPOUT_CLOSE), (0, r.pTH)()
    },
    icon: t
  })
}