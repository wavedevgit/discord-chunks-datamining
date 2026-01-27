/** Chunk was on web.js **/
/** chunk id: 566021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk359549 = require("./359549.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    application: t,
    analyticsLocation: n
  } = e, {
    analyticsLocations: u
  } = (0, o.Ay)(n), d = (0, l.A)({
    application: t,
    analyticsLocations: u
  });
  (0, s.A)({
    name: i.ImpressionNames.CLOUD_PLAY_CTA,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: u
    }
  });
  let f = () => {
    null == d || d()
  };
  return (0, r.jsx)(a.Button, {
    variant: "primary",
    size: "md",
    icon: a.hpF,
    text: c.intl.string(c.t["jaYS/h"]),
    onClick: f,
    fullWidth: true
  }, "cloud-play")
}