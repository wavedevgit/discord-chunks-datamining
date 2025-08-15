/** Chunk was on 16120 **/
/** chunk id: 567711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313889 = require("./313889.js"),
  Chunk825829 = require("./825829.js"),
  Chunk36459 = require("./36459.js"),
  Chunk592125 = require("./592125.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t) {
  let n = (0, l.e7)([d.Z], () => null != e && d.Z.canWithPartialContext(f.Plq.MANAGE_MESSAGES, {
      channelId: e
    }), [e]),
    E = (0, l.e7)([c.Z], () => c.Z.getChannel(e), [e]),
    g = (0, l.e7)([s.Z], () => null != e && null != t ? s.Z.getMessage(e, t) : null),
    b = (0, o.NK)(null != g ? g : null);
  if (null == E || null == g) return null;
  let y = null != b && b.actions.hasOwnProperty(a.d.SET_COMPLETED) ? a.d.UNSET_COMPLETED : a.d.SET_COMPLETED,
    _ = y === a.d.SET_COMPLETED ? O.intl.string(O.t.VWNyUl) : O.intl.string(O.t.l9GqxM);
  return n && null != t ? (0, r.jsx)(i.sNh, {
    id: "mark-automod-alert-completed",
    label: _,
    action: () => {
      (0, u.Xx)(t, E, y)
    }
  }, "mark-automod-alert-completed") : null
}