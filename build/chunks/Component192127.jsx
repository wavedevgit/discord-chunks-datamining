/** Chunk was on 89250 **/
/** chunk id: 192127, original params: t,n,e (module,exports,require) **/
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
  let n = (0, l.e7)([o.Z], () => o.Z.isInProgress());
  return (0, r.o)() && t.isThread() ? (0, i.jsx)(a.sNh, {
    id: "summarize-thread",
    label: n ? d.intl.string(d.t.oKECxB) : d.intl.string(d.t.EXfguE),
    disabled: n,
    icon: n ? (0, i.jsx)(a.$jN, {
      type: a.RAz.PULSING_ELLIPSIS
    }) : null,
    action: () => s.Z.summarizeThread(t),
    children: n ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.sNh, {
        id: "summarize_thread_for_everyone",
        label: d.intl.string(d.t.eCzSdd),
        action: () => s.Z.summarizeThread(t, false),
        icon: (0, i.jsx)(a.BFJ, {
          size: "sm"
        })
      }), (0, i.jsx)(a.sNh, {
        id: "summarize_thread_for_me",
        label: d.intl.string(d.t["HOe+Hq"]),
        action: () => s.Z.summarizeThread(t),
        icon: (0, i.jsx)(a.tBG, {
          size: "sm"
        })
      })]
    })
  }) : null
}