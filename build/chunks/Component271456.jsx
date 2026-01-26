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
  let n = (0, r.bG)([o.A], () => o.A.isInProgress());
  return (0, a.b)() && t.isThread() ? (0, e.jsx)(l.Drp, {
    id: "summarize-thread",
    label: n ? s.intl.string(s.t.oKECxB) : s.intl.string(s.t.EXfguE),
    disabled: n,
    loading: n,
    action: () => d.A.summarizeThread(t),
    children: n ? null : (0, e.jsxs)(e.Fragment, {
      children: [(0, e.jsx)(l.Drp, {
        id: "summarize_thread_for_everyone",
        label: s.intl.string(s.t.eCzSdd),
        action: () => d.A.summarizeThread(t, false),
        icon: l.nFg,
        leadingAccessory: {
          type: "icon",
          icon: l.nFg
        }
      }), (0, e.jsx)(l.Drp, {
        id: "summarize_thread_for_me",
        label: s.intl.string(s.t["HOe+Hq"]),
        action: () => d.A.summarizeThread(t),
        icon: l.nys,
        leadingAccessory: {
          type: "icon",
          icon: l.nys
        }
      })]
    })
  }) : null
}