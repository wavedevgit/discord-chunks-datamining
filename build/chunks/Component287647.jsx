/** Chunk was on 29725 **/
/** chunk id: 287647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk143525 = require("./143525.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk16596 = require("./16596.js");
let g = new Chunk710845.Z("DisplayNameStylesCoachmark");

function v(e) {
  let {
    markAsDismissed: t,
    targetElementRef: n,
    children: o
  } = e, {
    analyticsLocations: v
  } = (0, s.ZP)(), j = (0, r.useRef)(null), y = (0, l.e7)([u.Z], () => u.Z.isFocused()), C = (0, r.useCallback)(() => {
    t(h.L.TAKE_ACTION), (0, d.openUserSettings)(c.n.PROFILE_PANEL, {
      section: p.oAB.PROFILE_CUSTOMIZATION,
      analyticsLocations: v
    }, () => {
      (0, m.I)({
        analyticsLocations: v
      })
    })
  }, [t, v]), _ = (0, r.useCallback)(() => {
    t(h.L.USER_DISMISS)
  }, [t]);
  return (0, r.useEffect)(() => {
    var e, t, n;
    y && (null == (e = j.current) ? true : e.paused) ? null == (t = j.current) || t.play().catch(g.error) : y || null == (n = j.current) || n.pause()
  }, [y]), (0, a.jsxs)(a.Fragment, {
    children: [o, (0, a.jsx)(i.J, {
      targetElementRef: n,
      shouldShow: true,
      onRequestClose: _,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      },
      gradientColor: "nitro-pink",
      graphic: {
        type: "video",
        ref: j,
        src: b.Z,
        aspectRatio: "21/9",
        loop: true
      },
      size: "lg",
      title: x.intl.string(f.default["1AE464"]),
      body: [x.intl.string(f.default.cNc1g9), x.intl.string(x.t["4JNXHG"])],
      actions: [{
        text: x.intl.string(x.t.uw9zI7),
        variant: "primary",
        onClick: C
      }]
    })]
  })
}