/** Chunk was on web.js **/
/** chunk id: 902451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk441167 = require("./441167.js"),
  Chunk695346 = require("./695346.js"),
  Chunk131951 = require("./131951.js"),
  Chunk435064 = require("./435064.js"),
  Chunk779618 = require("./779618.js"),
  Chunk39604 = require("./39604.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let e = s.tU.useSetting(),
    {
      enableViewerClipping: t
    } = o.Z.useExperiment({
      location: "Clips Settings"
    }, {
      autoTrackExposure: false
    }),
    {
      viewerClipsEnabled: n
    } = (0, i.cj)([c.Z], () => c.Z.getSettings()),
    p = (0, u.Z)(l.Z);
  return (0, r.jsxs)(a.l09, {
    children: [(0, r.jsx)(a.rsf, {
      label: f.intl.string(f.t.AGDDkH),
      description: f.intl.string(f.t["wW9/zQ"]),
      checked: e,
      onChange: e => d.yg({
        allowVoiceRecording: e
      })
    }), t && p && (0, r.jsx)(a.rsf, {
      label: f.intl.string(f.t.NWw7kY),
      description: f.intl.string(f.t["0vjy8N"]),
      checked: n,
      onChange: e => d.yl({
        enabled: e,
        trackAnalytics: true
      })
    })]
  })
}