/** Chunk was on 73551 **/
/** chunk id: 561472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let v = function(e) {
  let {
    className: t,
    style: n,
    channel: v,
    draftType: j
  } = e, [O, E] = i.useState(true), S = (0, l.e7)([p.Z], () => p.Z.hasLayers()), P = (0, l.e7)([h.Z], () => null != v && h.Z.can(C.Plq.ATTACH_FILES, v), [v]), I = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(v.id)), Z = v.getGuildId(), T = j === c.d.FirstThreadMessage, N = (0, l.e7)([m.default], () => {
    var e;
    returntrue == !(null == (e = m.default.getCurrentUser()) ? true : e.nsfwAllowed)
  }), A = (0, l.e7)([u.Z], () => u.Z.didAgree(Z)) && !N, w = i.useMemo(() => !S && (v.isPrivate() && !v.isManaged() || null != Z && (!(0, a.aC)(v) || A) && P && d.Z.canChatInGuild(Z)), [P, A, v, Z, S]), R = T ? C.TPd.GUILD_THREADS_ONLY.has(v.type) ? x.intl.string(x.t.RBBLhI) : x.intl.string(x.t.gUx4en) : O ? x.intl.format(x.t.dYP2FR, {
    destination: (0, s.F6)(v, m.default, f.Z, true)
  }) : x.intl.string(x.t.h76ulJ);
  return I || !w ? null : (0, r.jsx)(y.Z, {
    className: t,
    style: n,
    title: R,
    description: T ? x.intl.string(x.t.lpgkzs) : x.intl.string(x.t.usQh4O),
    icons: _.J6,
    onDrop: e => {
      if (I) returnfalse;
      w && null != v && ((0, b.d)(e, v, j, {
        requireConfirm: O,
        showLargeMessageDialog: false,
        origin: "drag_drop"
      }), g.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS))
    },
    onDragClear: () => E(true),
    onDragOver: e => {
      if (I) returnfalse;
      T || e.shiftKey !== O || E(!e.shiftKey)
    }
  })
}