/** Chunk was on 97826 **/
/** chunk id: 88966, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e, n, r) {
  let m = (0, l.Aq)();
  return (0, i.e7)([d.default], () => d.default.getId() === e) || n === c.IlC.POPOUT ? null : (0, t.jsx)(s.sNh, {
    id: "message-user",
    label: u.intl.string(u.t.OAJQlP),
    action: () => {
      (0, a.i)(n, true), o.Z.openPrivateChannel({
        recipientIds: e
      }), m.dispatch(c.CkL.POPOUT_CLOSE), (0, s.pTH)()
    },
    icon: r
  })
}