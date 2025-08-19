/** Chunk was on 66181 **/
/** chunk id: 287647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => x
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
  Chunk693450 = require("./693450.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374104 = require("./374104.js");
let b = new Chunk710845.Z("DisplayNameStylesCoachmark");

function x(e) {
  let {
    markAsDismissed: t,
    targetElementRef: n,
    children: c
  } = e, {
    analyticsLocations: x
  } = (0, o.ZP)(), _ = (0, r.useRef)(null), j = (0, s.e7)([d.Z], () => d.Z.isFocused()), E = (0, r.useCallback)(() => {
    t(p.L.TAKE_ACTION), l.Z.open(m.oAB.PROFILE_CUSTOMIZATION, null, {
      analyticsLocations: x
    }), (0, u.I)({
      analyticsLocations: x
    })
  }, [t, x]), C = (0, r.useCallback)(() => {
    t(p.L.USER_DISMISS)
  }, [t]);
  return (0, r.useEffect)(() => {
    var e, t, n;
    j && (null == (e = _.current) ? true : e.paused) ? null == (t = _.current) || t.play().catch(b.error) : j || null == (n = _.current) || n.pause()
  }, [j]), (0, i.jsxs)(i.Fragment, {
    children: [c, (0, i.jsx)(a.J, {
      targetElementRef: n,
      shouldShow: true,
      onRequestClose: C,
      align: "right",
      position: "top",
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      gradientColor: "nitro-pink",
      graphic: {
        type: "video",
        ref: _,
        src: f.Z,
        aspectRatio: "21/9",
        loop: true
      },
      size: "lg",
      badge: {
        type: "beta",
        variant: "expressive"
      },
      title: h.intl.string(g.default["1AE46+"]),
      body: [h.intl.string(g.default.cNc1g4), h.intl.string(h.t["4JNXHB"])],
      actions: [{
        text: h.intl.string(h.t.uw9zIy),
        variant: "primary",
        onClick: E
      }]
    })]
  })
}