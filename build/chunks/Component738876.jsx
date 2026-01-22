/** Chunk was on 97492 **/
/** chunk id: 738876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk323073 = require("./323073.js"),
  Chunk861382 = require("./861382.js"),
  Chunk47167 = require("./47167.js"),
  Chunk31717 = require("./31717.js"),
  Chunk834942 = require("./834942.js"),
  Chunk186111 = require("./186111.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk203982 = require("./203982.js"),
  Chunk518960 = require("./518960.js"),
  Chunk65593 = require("./65593.jsx"),
  Chunk698638 = require("./698638.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let j = function(e) {
  let {
    className: t,
    style: n,
    channel: j,
    draftType: v
  } = e, [x, E] = l.useState(true), _ = (0, i.bG)([d.A], () => d.A.hasLayers()), C = (0, i.bG)([f.A], () => null != j && f.A.can(y.xBc.ATTACH_FILES, j), [j]), S = null != (0, i.bG)([s.A], () => s.A.getActiveCommand(j.id)), I = j.getGuildId(), N = v === c.C.FirstThreadMessage, T = (0, a.vL)(j), P = l.useMemo(() => !_ && (j.isPrivate() && !j.isManaged() || null != I && !T && C && u.A.canChatInGuild(I)), [C, T, j, I, _]), w = N ? y.kvI.GUILD_THREADS_ONLY.has(j.type) ? O.intl.string(O.t.RBBLhL) : O.intl.string(O.t.gUx4eu) : x ? O.intl.format(O.t.dYP2Fc, {
    destination: (0, o.m1)(j, h.default, p.A, true)
  }) : O.intl.string(O.t.h76ulG);
  return S || !P ? null : (0, r.jsx)(m.A, {
    className: t,
    style: n,
    title: w,
    description: N ? O.intl.string(O.t.lpgkzq) : O.intl.string(O.t.usQh4J),
    icons: A.ir,
    onDrop: e => {
      if (S) returnfalse;
      P && null != j && ((0, g.R)(e, j, v, {
        requireConfirm: x,
        origin: "drag_drop"
      }), b._.dispatchToLastSubscribed(y.jej.TEXTAREA_FOCUS))
    },
    onDragClear: () => E(true),
    onDragOver: e => {
      if (S) returnfalse;
      N || e.shiftKey !== x || E(!e.shiftKey)
    }
  })
}