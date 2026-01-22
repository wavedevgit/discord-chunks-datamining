/** Chunk was on web.js **/
/** chunk id: 332921, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  let e = o.Q$.useSetting(),
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
    p = (0, u.A)(l.A);
  return (0, r.jsxs)(a.lVW, {
    children: [(0, r.jsx)(a.dOG, {
      label: f.intl.string(f.t.AGDDkH),
      description: f.intl.string(f.t["wW9/zQ"]),
      checked: e,
      onChange: e => d.eQ({
        allowVoiceRecording: e
      })
    }), t && p && (0, r.jsx)(a.dOG, {
      label: f.intl.string(f.t.NWw7kY),
      description: f.intl.string(f.t["0vjy8N"]),
      checked: n,
      onChange: e => d.Wn({
        enabled: e,
        trackAnalytics: true
      })
    })]
  })
}