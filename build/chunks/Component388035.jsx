/** Chunk was on web.js **/
/** chunk id: 388035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk970731 = require("./970731.jsx"),
  Chunk2818 = require("./2818.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754796 = require("./754796.js"),
  Chunk235810 = require("./235810.js");
let p = Chunk704215.z.FOR_LATER_POPOUT_COACHMARK,
  h = () => (0, Chunk951288.jsx)("div", {
    className: Chunk754796.imageContainer,
    children: (0, Chunk951288.jsx)("img", {
      className: Chunk754796.image,
      src: Chunk235810,
      alt: ""
    })
  }),
  m = e => (0, r.jsx)(l.ZP, {
    className: f.container,
    asset: (0, r.jsx)(h, {}),
    header: d.intl.string(d.t.qPbFKy),
    content: d.intl.string(d.t.URrJq6),
    buttonCTA: d.intl.string(d.t["NX+WJC"]),
    buttonProps: {
      color: a.Tt.WHITE,
      innerClassName: f.primaryButton
    },
    onClick: () => e(u.L.USER_DISMISS),
    markAsDismissed: e,
    caretPosition: l.DF.TOP_RIGHT
  });

function g(e) {
  let {
    location: t,
    children: n,
    targetElementRef: i
  } = e, {
    enabled: a,
    inInbox: l
  } = c.Z.useExperiment({
    location: "ForLaterCoachmarkWeb"
  }, {
    autoTrackExposure: false
  }), u = t === (l ? "inbox-button" : "bookmarks-button"), d = a && u ? [p] : [], [f, _] = (0, s.US)(d, true);
  return f !== p ? n : (0, r.jsx)(o.yRy, {
    targetElementRef: i,
    renderPopout: () => m(_),
    position: "bottom",
    align: "right",
    animation: o.yRy.Animation.TRANSLATE,
    shouldShow: true,
    children: () => n
  })
}