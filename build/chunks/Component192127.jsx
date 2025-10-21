/** Chunk was on 89250 **/
/** chunk id: 192127, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk466721 = require("./466721.js"),
  Chunk346479 = require("./346479.js"),
  Chunk286934 = require("./286934.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let n = r.C.useExperiment({
      location: "useSummarizeThreadItem"
    }),
    e = (0, a.e7)([o.Z], () => o.Z.isInProgress());
  return (null == n ? true : n.enableAIFeatures) && t.isThread() ? (0, i.jsx)(l.sNh, {
    id: "summarize-thread",
    label: e ? d.intl.string(d.t.oKECxB) : d.intl.string(d.t.EXfguE),
    disabled: e,
    icon: e ? (0, i.jsx)(l.$jN, {
      type: l.RAz.PULSING_ELLIPSIS
    }) : null,
    action: () => s.Z.summarizeThread(t),
    children: e ? null : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.sNh, {
        id: "summarize_thread_for_everyone",
        label: d.intl.string(d.t.eCzSdd),
        action: () => s.Z.summarizeThread(t, false),
        icon: (0, i.jsx)(l.BFJ, {
          size: "sm"
        })
      }), (0, i.jsx)(l.sNh, {
        id: "summarize_thread_for_me",
        label: d.intl.string(d.t["HOe+Hq"]),
        action: () => s.Z.summarizeThread(t),
        icon: (0, i.jsx)(l.tBG, {
          size: "sm"
        })
      })]
    })
  }) : null
}