/** Chunk was on web.js **/
/** chunk id: 287647, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk230711 = require("./230711.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk451478 = require("./451478.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk62222 = require("./62222.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk16596 = require("./16596.js");
let g = new Chunk710845.Z("DisplayNameStylesCoachmark");

function E(e) {
  let {
    markAsDismissed: t,
    targetElementRef: n,
    children: c
  } = e, {
    analyticsLocations: E
  } = (0, l.ZP)(), b = (0, i.useRef)(null), y = (0, a.e7)([u.Z], () => u.Z.isFocused()), O = (0, i.useCallback)(() => {
    t(_.L.TAKE_ACTION), s.Z.open(f.oAB.PROFILE_CUSTOMIZATION, null, {
      analyticsLocations: E
    }), (0, d.I)({
      analyticsLocations: E
    })
  }, [t, E]), v = (0, i.useCallback)(() => {
    t(_.L.USER_DISMISS)
  }, [t]);
  return (0, i.useEffect)(() => {
    var e, t, n;
    y && (null == (e = b.current) ? true : e.paused) ? null == (t = b.current) || t.play().catch(g.error) : y || null == (n = b.current) || n.pause()
  }, [y]), (0, r.jsxs)(r.Fragment, {
    children: [c, (0, r.jsx)(o.J, {
      targetElementRef: n,
      shouldShow: true,
      onRequestClose: v,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      },
      gradientColor: "nitro-pink",
      graphic: {
        type: "video",
        ref: b,
        src: m.Z,
        aspectRatio: "21/9",
        loop: true
      },
      size: "lg",
      badge: {
        type: "beta",
        variant: "expressive"
      },
      title: h.intl.string(p.default["1AE46+"]),
      body: [h.intl.string(p.default.cNc1g4), h.intl.string(h.t["4JNXHB"])],
      actions: [{
        text: h.intl.string(h.t.uw9zIy),
        variant: "primary",
        onClick: O
      }]
    })]
  })
}