/** Chunk was on 88974 **/
/** chunk id: 271456, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk147087 = require("./147087.js"),
  Chunk867455 = require("./867455.js"),
  Chunk780057 = require("./780057.js"),
  Chunk985018 = require("./985018.jsx");

function u(t) {
  let n = (0, r.bG)([s.A], () => s.A.isInProgress());
  return (0, a.b)() && t.isThread() ? (0, e.jsx)(l.Drp, {
    id: "summarize-thread",
    label: n ? o.intl.string(o.t.oKECxB) : o.intl.string(o.t.EXfguE),
    disabled: n,
    icon: n ? (0, e.jsx)(l.y$y, {
      type: l.tVU.PULSING_ELLIPSIS
    }) : null,
    action: () => d.A.summarizeThread(t),
    children: n ? null : (0, e.jsxs)(e.Fragment, {
      children: [(0, e.jsx)(l.Drp, {
        id: "summarize_thread_for_everyone",
        label: o.intl.string(o.t.eCzSdd),
        action: () => d.A.summarizeThread(t, false),
        icon: (0, e.jsx)(l.nFg, {
          size: "sm"
        })
      }), (0, e.jsx)(l.Drp, {
        id: "summarize_thread_for_me",
        label: o.intl.string(o.t["HOe+Hq"]),
        action: () => d.A.summarizeThread(t),
        icon: (0, e.jsx)(l.nys, {
          size: "sm"
        })
      })]
    })
  }) : null
}