/** Chunk was on 34740 **/
/** chunk id: 561472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
let _ = function(e) {
  let {
    className: t,
    style: n,
    channel: _,
    draftType: O
  } = e, [x, j] = r.useState(true), E = (0, l.e7)([d.Z], () => d.Z.hasLayers()), S = (0, l.e7)([p.Z], () => null != _ && p.Z.can(C.Plq.ATTACH_FILES, _), [_]), P = null != (0, l.e7)([o.Z], () => o.Z.getActiveCommand(_.id)), I = _.getGuildId(), Z = O === c.d.FirstThreadMessage, T = (0, a.$5)(_), N = r.useMemo(() => !E && (_.isPrivate() && !_.isManaged() || null != I && !T && S && u.Z.canChatInGuild(I)), [S, T, _, I, E]), A = Z ? C.TPd.GUILD_THREADS_ONLY.has(_.type) ? v.intl.string(v.t.RBBLhL) : v.intl.string(v.t.gUx4eu) : x ? v.intl.format(v.t.dYP2Fc, {
    destination: (0, s.F6)(_, f.default, h.Z, true)
  }) : v.intl.string(v.t.h76ulG);
  return P || !N ? null : (0, i.jsx)(b.Z, {
    className: t,
    style: n,
    title: A,
    description: Z ? v.intl.string(v.t.lpgkzq) : v.intl.string(v.t.usQh4J),
    icons: y.J6,
    onDrop: e => {
      if (P) returnfalse;
      N && null != _ && ((0, g.d)(e, _, O, {
        requireConfirm: x,
        showLargeMessageDialog: false,
        origin: "drag_drop"
      }), m.S.dispatchToLastSubscribed(C.CkL.TEXTAREA_FOCUS))
    },
    onDragClear: () => j(true),
    onDragOver: e => {
      if (P) returnfalse;
      Z || e.shiftKey !== x || j(!e.shiftKey)
    }
  })
}