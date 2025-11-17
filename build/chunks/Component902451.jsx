/** Chunk was on web.js **/
/** chunk id: 902451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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

function _() {
  let e = Chunk695346.tU.useSetting(),
    {
      enableViewerClipping: t
    } = Chunk441167.Z.useExperiment({
      location: "Clips Settings"
    }, {
      autoTrackExposure: false
    }),
    {
      viewerClipsEnabled: n
    } = (0, Chunk442837.cj)([Chunk435064.Z], () => Chunk435064.Z.getSettings()),
    _ = (0, Chunk779618.Z)(Chunk131951.Z);
  return (0, Chunk54381.jsxs)(Chunk481060.l09, {
    children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.AGDDkH),
      description: Chunk388032.intl.string(Chunk388032.t["wW9/zQ"]),
      checked: module,
      onChange: e => d.yg({
        allowVoiceRecording: e
      })
    }), exports && _ && (0, Chunk54381.jsx)(Chunk481060.rsf, {
      label: Chunk388032.intl.string(Chunk388032.t.NWw7kY),
      description: Chunk388032.intl.string(Chunk388032.t["0vjy8N"]),
      checked: require,
      onChange: e => d.yl({
        enabled: e,
        trackAnalytics: true
      })
    })]
  })
}