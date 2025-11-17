/** Chunk was on 16120 **/
/** chunk id: 567711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function g(e, t) {
  let n = (0, r.e7)([d.Z], () => null != e && d.Z.canWithPartialContext(f.Plq.MANAGE_MESSAGES, {
      channelId: e
    }), [e]),
    g = (0, r.e7)([c.Z], () => c.Z.getChannel(e), [e]),
    O = (0, r.e7)([s.Z], () => null != e && null != t ? s.Z.getMessage(e, t) : null),
    E = (0, o.NK)(null != O ? O : null);
  if (null == g || null == O) return null;
  let p = null != E && E.actions.hasOwnProperty(a.d.SET_COMPLETED) ? a.d.UNSET_COMPLETED : a.d.SET_COMPLETED,
    y = p === a.d.SET_COMPLETED ? b.intl.string(b.t.VWNyUu) : b.intl.string(b.t.l9GqxI);
  return n && null != t ? (0, l.jsx)(i.sNh, {
    id: "mark-automod-alert-completed",
    label: y,
    action: () => {
      (0, u.Xx)(t, g, p)
    }
  }, "mark-automod-alert-completed") : null
}