/** Chunk was on web.js **/
/** chunk id: 985629, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk110259 = require("./110259.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk359549 = require("./359549.js"),
  Chunk139286 = require("./139286.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    application: t,
    analyticsLocations: n,
    onAction: p,
    onClose: _
  } = e, {
    themeType: h
  } = (0, c.E)(), m = (0, o.A)({
    application: t,
    analyticsLocations: n
  });
  return ((0, l.A)({
    name: i.ImpressionNames.CLOUD_PLAY_CTA,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: n
    }
  }, {
    disableTrack: null == m
  }, [m]), null == m) ? null : (0, r.jsx)(a.m_, {
    text: f.intl.string(f.t.JVwWva),
    position: "top",
    children: (0, r.jsx)(u.FD, {
      icon: s.hpF,
      text: f.intl.string(f.t["jaYS/h"]),
      size: "sm",
      onClick: e => {
        e.stopPropagation(), null == p || p({
          action: "PRESS_CLOUD_PLAY_BUTTON"
        }), m(), null == _ || _()
      },
      fullWidth: h !== d.d.MODAL_V2
    })
  })
}