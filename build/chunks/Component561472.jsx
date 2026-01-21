/** Chunk was on 82124 **/
/** chunk id: 561472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let j = function(e) {
  let {
    className: t,
    style: n,
    channel: j,
    draftType: x
  } = e, [C, E] = i.useState(true), S = (0, l.e7)([d.Z], () => d.Z.hasLayers()), _ = (0, l.e7)([p.Z], () => null != j && p.Z.can(v.Plq.ATTACH_FILES, j), [j]), I = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(j.id)), P = j.getGuildId(), Z = x === c.d.FirstThreadMessage, N = (0, a.$5)(j), T = i.useMemo(() => !S && (j.isPrivate() && !j.isManaged() || null != P && !N && _ && u.Z.canChatInGuild(P)), [_, N, j, P, S]), A = Z ? v.TPd.GUILD_THREADS_ONLY.has(j.type) ? O.intl.string(O.t.RBBLhL) : O.intl.string(O.t.gUx4eu) : C ? O.intl.format(O.t.dYP2Fc, {
    destination: (0, s.F6)(j, h.default, f.Z, true)
  }) : O.intl.string(O.t.h76ulG);
  return I || !T ? null : (0, r.jsx)(b.Z, {
    className: t,
    style: n,
    title: A,
    description: Z ? O.intl.string(O.t.lpgkzq) : O.intl.string(O.t.usQh4J),
    icons: y.J6,
    onDrop: e => {
      if (I) returnfalse;
      T && null != j && ((0, m.d)(e, j, x, {
        requireConfirm: C,
        origin: "drag_drop"
      }), g.S.dispatchToLastSubscribed(v.CkL.TEXTAREA_FOCUS))
    },
    onDragClear: () => E(true),
    onDragOver: e => {
      if (I) returnfalse;
      Z || e.shiftKey !== C || E(!e.shiftKey)
    }
  })
}