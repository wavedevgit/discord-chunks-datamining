/** Chunk was on 41727 **/
/** chunk id: 738876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
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
let O = function(e) {
  let {
    className: t,
    style: n,
    channel: O,
    draftType: j
  } = e, [v, x] = l.useState(true), E = (0, i.bG)([d.A], () => d.A.hasLayers()), C = (0, i.bG)([p.A], () => null != O && p.A.can(y.xBc.ATTACH_FILES, O), [O]), S = null != (0, i.bG)([a.A], () => a.A.getActiveCommand(O.id)), I = O.getGuildId(), N = j === c.C.FirstThreadMessage, T = (0, s.vL)(O), P = l.useMemo(() => !E && (O.isPrivate() && !O.isManaged() || null != I && !T && C && u.A.canChatInGuild(I)), [C, T, O, I, E]), w = N ? y.kvI.GUILD_THREADS_ONLY.has(O.type) ? _.intl.string(_.t.RBBLhL) : _.intl.string(_.t.gUx4eu) : v ? _.intl.format(_.t.dYP2Fc, {
    destination: (0, o.m1)(O, f.default, h.A, true)
  }) : _.intl.string(_.t.h76ulG);
  return S || !P ? null : (0, r.jsx)(b.A, {
    className: t,
    style: n,
    title: w,
    description: N ? _.intl.string(_.t.lpgkzq) : _.intl.string(_.t.usQh4J),
    icons: A.ir,
    onDrop: e => {
      if (S) returnfalse;
      P && null != O && ((0, m.R)(e, O, j, {
        requireConfirm: v,
        origin: "drag_drop"
      }), g._.dispatchToLastSubscribed(y.jej.TEXTAREA_FOCUS))
    },
    onDragClear: () => x(true),
    onDragOver: e => {
      if (S) returnfalse;
      N || e.shiftKey !== v || x(!e.shiftKey)
    }
  })
}