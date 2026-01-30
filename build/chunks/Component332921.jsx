/** Chunk was on 78376 **/
/** chunk id: 332921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk670470 = require("./670470.js"),
  Chunk253932 = require("./253932.js"),
  Chunk430452 = require("./430452.js"),
  Chunk274372 = require("./274372.js"),
  Chunk915618 = require("./915618.js"),
  Chunk399925 = require("./399925.js"),
  Chunk985018 = require("./985018.jsx");

function p() {
  let e = a.Q$.useSetting(),
    {
      enableViewerClipping: t
    } = s.A.useExperiment({
      location: "Clips Settings"
    }, {
      autoTrackExposure: false
    }),
    {
      viewerClipsEnabled: n
    } = (0, i.cf)([c.A], () => c.A.getSettings()),
    p = (0, d.A)(o.A);
  return (0, r.jsxs)(l.lVW, {
    children: [(0, r.jsx)(l.dOG, {
      label: _.intl.string(_.t.AGDDkH),
      description: _.intl.string(_.t["wW9/zQ"]),
      checked: e,
      onChange: e => u.eQ({
        allowVoiceRecording: e
      })
    }), t && p && (0, r.jsx)(l.dOG, {
      label: _.intl.string(_.t.NWw7kY),
      description: _.intl.string(_.t["0vjy8N"]),
      checked: n,
      onChange: e => u.Wn({
        enabled: e,
        trackAnalytics: true
      })
    })]
  })
}