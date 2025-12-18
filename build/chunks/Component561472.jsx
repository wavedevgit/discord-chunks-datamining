/** Chunk was on 40184 **/
/** chunk id: 561472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
let x = function(e) {
  let {
    className: t,
    style: n,
    channel: x,
    draftType: O
  } = e, [E, j] = r.useState(true), S = (0, l.e7)([d.Z], () => d.Z.hasLayers()), _ = (0, l.e7)([p.Z], () => null != x && p.Z.can(C.Plq.ATTACH_FILES, x), [x]), P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(x.id)), I = x.getGuildId(), Z = O === c.d.FirstThreadMessage, T = (0, a.$5)(x), N = r.useMemo(() => !S && (x.isPrivate() && !x.isManaged() || null != I && !T && _ && u.Z.canChatInGuild(I)), [_, T, x, I, S]), A = Z ? C.TPd.GUILD_THREADS_ONLY.has(x.type) ? v.intl.string(v.t.RBBLhL) : v.intl.string(v.t.gUx4eu) : E ? v.intl.format(v.t.dYP2Fc, {
    destination: (0, s.F6)(x, h.default, f.Z, true)
  }) : v.intl.string(v.t.h76ulG);
  return P || !N ? null : (0, i.jsx)(b.Z, {
    className: t,
    style: n,
    title: A,
    description: Z ? v.intl.string(v.t.lpgkzq) : v.intl.string(v.t.usQh4J),
    icons: y.J6,
    onDrop: e => {
      if (P) returnfalse;
      N && null != x && ((0, g.d)(e, x, O, {
        requireConfirm: E,
        showLargeMessageDialog: false,
        origin: "drag_drop"
      }), m.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS))
    },
    onDragClear: () => j(true),
    onDragOver: e => {
      if (P) returnfalse;
      Z || e.shiftKey !== E || j(!e.shiftKey)
    }
  })
}