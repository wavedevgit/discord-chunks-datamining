/** Chunk was on 99904 **/
/** chunk id: 494424, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk198168 = require("./198168.js"),
  Chunk848572 = require("./848572.js"),
  Chunk863504 = require("./863504.js"),
  Chunk787528 = require("./787528.js"),
  Chunk714167 = require("./714167.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
  var t, n;
  let {
    markAsDismissed: p,
    targetElementRef: h,
    children: x
  } = e, g = (0, l.Rw)(), f = null != (t = null == g ? true : g.id) ? t : d.VU.PREMIUM_TENURE_1_MONTH, b = null != (n = null == g ? true : g.nameUnformatted) ? n : d.vK[d.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted, v = (m.intl.string(m.t.lG6a5x) + " " + m.intl.string(b)).toLocaleUpperCase(), j = (0, o.Z)(f), _ = (0, s.J)(f), y = (0, r.useCallback)(() => {
    p(u.L.TAKE_ACTION)
  }, [p]), C = (0, r.useCallback)(() => {
    p(u.L.USER_DISMISS)
  }, [p]), S = m.intl.format(m.t.GSynLW, {
    time: 5
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [x, (0, a.jsx)(c.Z, {
      targetElementRef: h,
      shouldShow: true,
      onRequestClose: C,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      },
      gradientColor: j,
      size: "lg",
      graphic: {
        type: "dynamic",
        component: i.DynamicGraphicComponent.BADGE_IMAGE_WITH_COUNTDOWN_TIMER,
        aspectRatio: "6/4",
        props: {
          src: _,
          alt: v,
          size: "large"
        }
      },
      title: v,
      body: S,
      actions: [{
        text: "Reactivate",
        variant: "expressive",
        onClick: y
      }]
    })]
  })
}