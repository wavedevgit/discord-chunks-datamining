/** Chunk was on web.js **/
/** chunk id: 388035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk2818 = require("./2818.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk235810 = require("./235810.js");
let d = Chunk704215.z.FOR_LATER_POPOUT_COACHMARK;

function f(e) {
  let {
    location: t,
    targetElementRef: n
  } = e, {
    enabled: i,
    inInbox: f
  } = s.Z.useExperiment({
    location: "ForLaterCoachmarkWeb"
  }, {
    autoTrackExposure: false
  }), p = t === (f ? "inbox-button" : "bookmarks-button"), _ = i && p ? [d] : [], [m, h] = (0, o.US)(_, true);
  return m !== d ? null : (0, r.jsx)(a.J2, {
    targetElementRef: n,
    gradientColor: "purple",
    position: "bottom",
    align: "right",
    shouldShow: true,
    caretConfig: {
      align: "end"
    },
    onRequestClose: () => h(l.L.USER_DISMISS),
    title: c.intl.string(c.t.qPbFK2),
    body: c.intl.string(c.t.URrJq1),
    actions: [{
      text: c.intl.string(c.t["NX+WJN"]),
      onClick: () => h(l.L.USER_DISMISS)
    }],
    graphic: {
      type: "image",
      src: u
    }
  })
}