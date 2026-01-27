/** Chunk was on 7869 **/
/** chunk id: 971961, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk486503 = require("./486503.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk698441 = require("./698441.js"),
  Chunk691012 = require("./691012.js"),
  Chunk985018 = require("./985018.jsx");

function E(e, t) {
  let n = a.Q_.useSetting(),
    {
      tidaWebformEnabled: E
    } = u.A.useExperiment({
      location: "useCopyEventImageLinkItem"
    }, {
      autoTrackExposure: false
    }),
    f = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(e)),
    A = null != f ? (0, d.A)(f) : null,
    y = "event-image" === t.getAttribute("data-type"),
    p = r.useCallback(() => {
      null != A && (0, c.C)(A)
    }, [A]);
  return c.p5 && n && E && null != A && y ? (0, l.jsx)(o.Drp, {
    id: "copy-event-image-link",
    label: g.intl.string(g.t["8xHmxo"]),
    action: p,
    icon: o.qYV
  }) : null
}