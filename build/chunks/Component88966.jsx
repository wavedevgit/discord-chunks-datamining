/** Chunk was on 78086 **/
/** chunk id: 88966, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk549879 = require("./549879.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, n, t) {
  let f = (0, a.Aq)();
  return (0, i.e7)([s.default], () => s.default.getId() === e) || n === u.IlC.POPOUT ? null : (0, r.jsx)(l.sNh, {
    id: "message-user",
    label: d.intl.string(d.t.OAJQlJ),
    action: () => {
      (0, c.i)(n, true), o.Z.openPrivateChannel({
        recipientIds: e
      }), f.dispatch(u.CkL.POPOUT_CLOSE), (0, l.pTH)()
    },
    icon: t
  })
}