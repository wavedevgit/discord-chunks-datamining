/** Chunk was on web.js **/
/** chunk id: 145843, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk206074 = require("./206074.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    application: t,
    analyticsLocation: n
  } = e, {
    analyticsLocations: u
  } = (0, a.ZP)(n), d = (0, l.Z)({
    application: t,
    analyticsLocations: u
  });
  (0, s.Z)({
    name: i.ImpressionNames.CLOUD_PLAY_CTA,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: u
    }
  });
  let f = () => {
    null == d || d()
  };
  return (0, r.jsx)(o.Button, {
    variant: "primary",
    size: "md",
    icon: o.v3n,
    text: c.intl.string(c.t["jaYS/h"]),
    onClick: f,
    fullWidth: true
  }, "cloud-play")
}