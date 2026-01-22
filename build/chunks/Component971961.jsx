/** Chunk was on 7869 **/
/** chunk id: 971961, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => y
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

function y(t, e) {
  let n = a.Q_.useSetting(),
    {
      tidaWebformEnabled: y
    } = o.A.useExperiment({
      location: "useCopyEventImageLinkItem"
    }, {
      autoTrackExposure: false
    }),
    f = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(t)),
    b = null != f ? (0, d.A)(f) : null,
    p = "event-image" === e.getAttribute("data-type"),
    A = r.useCallback(() => {
      null != b && (0, c.C)(b)
    }, [b]);
  return c.p5 && n && y && null != b && p ? (0, l.jsx)(u.Drp, {
    id: "copy-event-image-link",
    label: g.intl.string(g.t["8xHmxo"]),
    action: A,
    icon: u.qYV
  }) : null
}