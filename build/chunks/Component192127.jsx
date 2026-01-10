/** Chunk was on 92091 **/
/** chunk id: 192127, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk39952 = require("./39952.js"),
  Chunk346479 = require("./346479.js"),
  Chunk286934 = require("./286934.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let n = (0, l.e7)([d.Z], () => d.Z.isInProgress());
  return (0, a.o)() && t.isThread() ? (0, e.jsx)(r.sNh, {
    id: "summarize-thread",
    label: n ? o.intl.string(o.t.oKECxB) : o.intl.string(o.t.EXfguE),
    disabled: n,
    icon: n ? (0, e.jsx)(r.$jN, {
      type: r.RAz.PULSING_ELLIPSIS
    }) : null,
    action: () => s.Z.summarizeThread(t),
    children: n ? null : (0, e.jsxs)(e.Fragment, {
      children: [(0, e.jsx)(r.sNh, {
        id: "summarize_thread_for_everyone",
        label: o.intl.string(o.t.eCzSdd),
        action: () => s.Z.summarizeThread(t, false),
        icon: (0, e.jsx)(r.BFJ, {
          size: "sm"
        })
      }), (0, e.jsx)(r.sNh, {
        id: "summarize_thread_for_me",
        label: o.intl.string(o.t["HOe+Hq"]),
        action: () => s.Z.summarizeThread(t),
        icon: (0, e.jsx)(r.tBG, {
          size: "sm"
        })
      })]
    })
  }) : null
}