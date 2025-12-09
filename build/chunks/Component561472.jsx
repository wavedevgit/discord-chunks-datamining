/** Chunk was on 73755 **/
/** chunk id: 561472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
let v = function(e) {
  let {
    className: t,
    style: n,
    channel: v,
    draftType: O
  } = e, [x, E] = r.useState(true), j = (0, l.e7)([d.Z], () => d.Z.hasLayers()), S = (0, l.e7)([p.Z], () => null != v && p.Z.can(y.Plq.ATTACH_FILES, v), [v]), P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(v.id)), I = v.getGuildId(), Z = O === c.d.FirstThreadMessage, T = (0, a.$5)(v), N = r.useMemo(() => !j && (v.isPrivate() && !v.isManaged() || null != I && !T && S && u.Z.canChatInGuild(I)), [S, T, v, I, j]), A = Z ? y.TPd.GUILD_THREADS_ONLY.has(v.type) ? _.intl.string(_.t.RBBLhL) : _.intl.string(_.t.gUx4eu) : x ? _.intl.format(_.t.dYP2Fc, {
    destination: (0, s.F6)(v, f.default, h.Z, true)
  }) : _.intl.string(_.t.h76ulG);
  return P || !N ? null : (0, i.jsx)(b.Z, {
    className: t,
    style: n,
    title: A,
    description: Z ? _.intl.string(_.t.lpgkzq) : _.intl.string(_.t.usQh4J),
    icons: C.J6,
    onDrop: e => {
      if (P) returnfalse;
      N && null != v && ((0, g.d)(e, v, O, {
        requireConfirm: x,
        showLargeMessageDialog: false,
        origin: "drag_drop"
      }), m.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS))
    },
    onDragClear: () => E(true),
    onDragOver: e => {
      if (P) returnfalse;
      Z || e.shiftKey !== x || E(!e.shiftKey)
    }
  })
}