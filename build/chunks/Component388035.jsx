/** Chunk was on 54157 **/
/** chunk id: 388035, original params: e,t,n (module,exports,require) **/
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
  Chunk684642 = require("./684642.js"),
  Chunk235810 = require("./235810.js");
let f = Chunk704215.z.FOR_LATER_POPOUT_COACHMARK,
  _ = () => (0, Chunk951288.jsx)("div", {
    className: Chunk684642.imageContainer,
    children: (0, Chunk951288.jsx)("img", {
      className: Chunk684642.image,
      src: Chunk235810,
      alt: ""
    })
  });

function g(e) {
  let {
    location: t,
    children: n,
    targetElementRef: s
  } = e, {
    enabled: p,
    inInbox: g
  } = c.Z.useExperiment({
    location: "ForLaterCoachmarkWeb"
  }, {
    autoTrackExposure: false
  }), [S, m] = (0, i.US)(p && t === (g ? "inbox-button" : "bookmarks-button") ? [f] : [], true);
  return S !== f ? n : (0, r.jsx)(a.yRy, {
    targetElementRef: s,
    renderPopout: () => (0, r.jsx)(o.ZP, {
      className: h.container,
      asset: (0, r.jsx)(_, {}),
      header: d.intl.string(d.t.qPbFKy),
      content: d.intl.string(d.t.URrJq6),
      buttonCTA: d.intl.string(d.t["NX+WJC"]),
      buttonProps: {
        color: l.Tt.WHITE,
        innerClassName: h.primaryButton
      },
      onClick: () => m(u.L.USER_DISMISS),
      markAsDismissed: m,
      caretPosition: o.DF.TOP_RIGHT
    }),
    position: "bottom",
    align: "right",
    animation: a.yRy.Animation.TRANSLATE,
    shouldShow: true,
    children: () => n
  })
}