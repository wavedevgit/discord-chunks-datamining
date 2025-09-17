/** Chunk was on web.js **/
/** chunk id: 287647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk62222 = require("./62222.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk16596 = require("./16596.js");
let E = new Chunk710845.Z("DisplayNameStylesCoachmark");

function b(e) {
  let {
    markAsDismissed: t,
    targetElementRef: n,
    children: l
  } = e, {
    analyticsLocations: b
  } = (0, s.ZP)(), y = (0, i.useRef)(null), O = (0, a.e7)([d.Z], () => d.Z.isFocused()), v = (0, i.useCallback)(() => {
    t(p.L.TAKE_ACTION), (0, u.openUserSettings)(c.n.PROFILE_PANEL, {
      section: _.oAB.PROFILE_CUSTOMIZATION,
      analyticsLocations: b
    }), (0, f.I)({
      analyticsLocations: b
    })
  }, [t, b]), I = (0, i.useCallback)(() => {
    t(p.L.USER_DISMISS)
  }, [t]);
  return (0, i.useEffect)(() => {
    var e, t, n;
    O && (null == (e = y.current) ? true : e.paused) ? null == (t = y.current) || t.play().catch(E.error) : O || null == (n = y.current) || n.pause()
  }, [O]), (0, r.jsxs)(r.Fragment, {
    children: [l, (0, r.jsx)(o.J, {
      targetElementRef: n,
      shouldShow: true,
      onRequestClose: I,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      },
      gradientColor: "nitro-pink",
      graphic: {
        type: "video",
        ref: y,
        src: g.Z,
        aspectRatio: "21/9",
        loop: true
      },
      size: "lg",
      badge: {
        type: "beta",
        variant: "expressive"
      },
      title: m.intl.string(h.default["1AE46+"]),
      body: [m.intl.string(h.default.cNc1g4), m.intl.string(m.t["4JNXHB"])],
      actions: [{
        text: m.intl.string(m.t.uw9zIy),
        variant: "primary",
        onClick: v
      }]
    })]
  })
}