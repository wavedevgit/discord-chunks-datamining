/** Chunk was on web.js **/
/** chunk id: 822556, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk549879 = require("./549879.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    analyticsLocations: t
  } = (0, s.ZP)();
  return (0, r.jsx)(i.sNh, {
    id: "voice-settings",
    label: c.intl.string(c.t.NiTd0d),
    action: () => {
      o.Z.open(l.oAB.VOICE, null, {
        analyticsLocations: t,
        appContext: e
      }), (0, a.i)(e)
    },
    icon: i.ewm
  })
}