/** Chunk was on web.js **/
/** chunk id: 994102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk990547 = require("./990547.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk213609 = require("./213609.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    application: t,
    analyticsLocations: n,
    onAction: p,
    onClose: _
  } = e, {
    themeType: h
  } = (0, c.z)(), m = (0, s.Z)({
    application: t,
    analyticsLocations: n
  });
  return ((0, l.Z)({
    name: i.ImpressionNames.CLOUD_PLAY_CTA,
    type: i.ImpressionTypes.VIEW,
    properties: {
      location_stack: n
    }
  }, {
    disableTrack: null == m
  }, [m]), null == m) ? null : (0, r.jsx)(a.u, {
    text: f.intl.string(f.t.JVwWva),
    position: "top",
    children: (0, r.jsx)(u.i6, {
      icon: o.v3n,
      text: f.intl.string(f.t["jaYS/h"]),
      size: "sm",
      onClick: e => {
        e.stopPropagation(), null == p || p({
          action: "PRESS_CLOUD_PLAY_BUTTON"
        }), m(), null == _ || _()
      },
      fullWidth: h !== d.l.MODAL_V2
    })
  })
}