/** Chunk was on 78441 **/
/** chunk id: 271456, original params: t,e,n (module,exports,require) **/
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
  let e = (0, r.bG)([s.A], () => s.A.isInProgress());
  return (0, a.b)() && t.isThread() ? (0, i.jsx)(l.Drp, {
    id: "summarize-thread",
    label: e ? d.intl.string(d.t.oKECxB) : d.intl.string(d.t.EXfguE),
    disabled: e,
    loading: e,
    action: () => o.A.summarizeThread(t),
    children: e ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.Drp, {
        id: "summarize_thread_for_everyone",
        label: d.intl.string(d.t.eCzSdd),
        action: () => o.A.summarizeThread(t, false),
        icon: l.nFg,
        leadingAccessory: {
          type: "icon",
          icon: l.nFg
        }
      }), (0, i.jsx)(l.Drp, {
        id: "summarize_thread_for_me",
        label: d.intl.string(d.t["HOe+Hq"]),
        action: () => o.A.summarizeThread(t),
        icon: l.nys,
        leadingAccessory: {
          type: "icon",
          icon: l.nys
        }
      })]
    })
  }) : null
}