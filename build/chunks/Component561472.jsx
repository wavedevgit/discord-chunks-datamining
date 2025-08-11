/** Chunk was on web.js **/
/** chunk id: 561472, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    draftType: I
  } = e, [T, S] = i.useState(true), A = (0, o.e7)([f.Z], () => f.Z.hasLayers()), N = (0, o.e7)([_.Z], () => null != v && _.Z.can(y.Plq.ATTACH_FILES, v), [v]), C = null != (0, o.e7)([s.Z], () => s.Z.getActiveCommand(v.id)), R = v.getGuildId(), P = I === c.d.FirstThreadMessage, w = (0, o.e7)([h.default], () => {
    var e;
    returntrue == !(null == (e = h.default.getCurrentUser()) ? true : e.nsfwAllowed)
  }), D = (0, o.e7)([u.Z], () => u.Z.didAgree(R)) && !w, L = i.useMemo(() => !A && (v.isPrivate() && !v.isManaged() || null != R && (!(0, a.aC)(v) || D) && N && d.Z.canChatInGuild(R)), [N, D, v, R, A]), x = e => {
    if (C) returnfalse;
    L && null != v && ((0, g.d)(e, v, I, {
      requireConfirm: T,
      showLargeMessageDialog: false,
      origin: "drag_drop"
    }), m.S.dispatchToLastSubscribed(y.CkL.TEXTAREA_FOCUS))
  }, M = () => S(true), k = e => {
    if (C) returnfalse;
    P || e.shiftKey !== T || S(!e.shiftKey)
  }, j = P ? y.TPd.GUILD_THREADS_ONLY.has(v.type) ? O.intl.string(O.t.RBBLhI) : O.intl.string(O.t.gUx4en) : T ? O.intl.format(O.t.dYP2FR, {
    destination: (0, l.F6)(v, h.default, p.Z, true)
  }) : O.intl.string(O.t.h76ulJ);
  return C || !L ? null : (0, r.jsx)(E.Z, {
    className: t,
    style: n,
    title: j,
    description: P ? O.intl.string(O.t.lpgkzs) : O.intl.string(O.t.usQh4O),
    icons: b.J6,
    onDrop: x,
    onDragClear: M,
    onDragOver: k
  })
}