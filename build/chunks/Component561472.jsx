/** Chunk was on 62987 **/
/** chunk id: 561472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk622822 = require("./622822.js"),
  Chunk998698 = require("./998698.js"),
  Chunk933557 = require("./933557.js"),
  Chunk703558 = require("./703558.js"),
  Chunk607744 = require("./607744.js"),
  Chunk819640 = require("./819640.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk127654 = require("./127654.js"),
  Chunk205822 = require("./205822.jsx"),
  Chunk731994 = require("./731994.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let v = function(e) {
  let {
    className: t,
    style: n,
    channel: v,
    draftType: x
  } = e, [O, j] = i.useState(true), E = (0, l.e7)([d.Z], () => d.Z.hasLayers()), S = (0, l.e7)([p.Z], () => null != v && p.Z.can(_.Plq.ATTACH_FILES, v), [v]), I = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(v.id)), P = v.getGuildId(), Z = x === c.d.FirstThreadMessage, T = (0, a.$5)(v), N = i.useMemo(() => !E && (v.isPrivate() && !v.isManaged() || null != P && !T && S && u.Z.canChatInGuild(P)), [S, T, v, P, E]), A = Z ? _.TPd.GUILD_THREADS_ONLY.has(v.type) ? C.intl.string(C.t.RBBLhI) : C.intl.string(C.t.gUx4en) : O ? C.intl.format(C.t.dYP2FR, {
    destination: (0, s.F6)(v, f.default, h.Z, true)
  }) : C.intl.string(C.t.h76ulJ);
  return I || !N ? null : (0, r.jsx)(b.Z, {
    className: t,
    style: n,
    title: A,
    description: Z ? C.intl.string(C.t.lpgkzs) : C.intl.string(C.t.usQh4O),
    icons: y.J6,
    onDrop: e => {
      if (I) returnfalse;
      N && null != v && ((0, g.d5)(e, v, x, {
        requireConfirm: O,
        showLargeMessageDialog: false,
        origin: "drag_drop"
      }), m.S.dispatchToLastSubscribed(_.CkL.TEXTAREA_FOCUS))
    },
    onDragClear: () => j(true),
    onDragOver: e => {
      if (I) returnfalse;
      Z || e.shiftKey !== O || j(!e.shiftKey)
    }
  })
}