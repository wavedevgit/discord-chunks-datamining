/** Chunk was on 68197 **/
/** chunk id: 561472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk622822 = require("./622822.js"),
  Chunk998698 = require("./998698.js"),
  Chunk933557 = require("./933557.js"),
  Chunk703558 = require("./703558.js"),
  Chunk731290 = require("./731290.js"),
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
let x = function(e) {
  let {
    className: t,
    style: n,
    channel: x,
    draftType: O
  } = e, [j, E] = i.useState(true), S = (0, l.e7)([p.Z], () => p.Z.hasLayers()), I = (0, l.e7)([h.Z], () => null != x && h.Z.can(C.Plq.ATTACH_FILES, x), [x]), P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(x.id)), Z = x.getGuildId(), T = O === c.d.FirstThreadMessage, N = (0, l.e7)([m.default], () => {
    var e;
    returntrue == !(null == (e = m.default.getCurrentUser()) ? true : e.nsfwAllowed)
  }), A = (0, l.e7)([u.Z], () => u.Z.didAgree(Z)) && !N, w = i.useMemo(() => !S && (x.isPrivate() && !x.isManaged() || null != Z && (!(0, a.aC)(x) || A) && I && d.Z.canChatInGuild(Z)), [I, A, x, Z, S]), R = T ? C.TPd.GUILD_THREADS_ONLY.has(x.type) ? v.intl.string(v.t.RBBLhI) : v.intl.string(v.t.gUx4en) : j ? v.intl.format(v.t.dYP2FR, {
    destination: (0, s.F6)(x, m.default, f.Z, true)
  }) : v.intl.string(v.t.h76ulJ);
  return P || !w ? null : (0, r.jsx)(y.Z, {
    className: t,
    style: n,
    title: R,
    description: T ? v.intl.string(v.t.lpgkzs) : v.intl.string(v.t.usQh4O),
    icons: _.J6,
    onDrop: e => {
      if (P) returnfalse;
      w && null != x && ((0, b.d5)(e, x, O, {
        requireConfirm: j,
        showLargeMessageDialog: false,
        origin: "drag_drop"
      }), g.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS))
    },
    onDragClear: () => E(true),
    onDragOver: e => {
      if (P) returnfalse;
      T || e.shiftKey !== j || E(!e.shiftKey)
    }
  })
}