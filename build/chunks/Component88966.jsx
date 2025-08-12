/** Chunk was on 72117 **/
/** chunk id: 88966, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk549879 = require("./549879.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, n, r) {
  let m = (0, l.Aq)();
  return (0, i.e7)([d.default], () => d.default.getId() === e) || n === c.IlC.POPOUT ? null : (0, t.jsx)(s.sNh, {
    id: "message-user",
    label: u.intl.string(u.t.OAJQlJ),
    action: () => {
      (0, a.i)(n, true), o.Z.openPrivateChannel({
        recipientIds: e
      }), m.dispatch(c.CkL.POPOUT_CLOSE), (0, s.pTH)()
    },
    icon: r
  })
}