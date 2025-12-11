/** Chunk was on 95528 **/
/** chunk id: 88966, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk887413 = require("./887413.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, n, r) {
  let m = (0, a.Aq)();
  return (0, i.e7)([d.default], () => d.default.getId() === e) || n === l.IlC.POPOUT ? null : (0, t.jsx)(o.sNh, {
    id: "message-user",
    label: u.intl.string(u.t.OAJQlP),
    action: () => {
      (0, c.i)(n, true), s.Z.openPrivateChannel({
        recipientIds: e
      }), m.dispatch(l.CkL.POPOUT_CLOSE), (0, o.pTH)()
    },
    icon: r
  })
}