/** Chunk was on 47495 **/
/** chunk id: 579346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk522942 = require("./522942.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797967 = require("./797967.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk660662 = require("./660662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk62222 = require("./62222.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk621515 = require("./621515.js"),
  Chunk77426 = require("./77426.js");

function h(e) {
  var t;
  let {
    selectedColors: n,
    setSelectedColors: h,
    defaultColor: x,
    selectedEffectId: _,
    className: b
  } = e, S = _ === r.m.GRADIENT, C = (0, o.useCallback)(e => {
    h([e]), c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: e === x,
      colors: [e]
    })
  }, [h, x]), j = (0, o.useCallback)(e => {
    h(e), c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: false,
      colors: e
    })
  }, [h]);
  return (0, l.jsxs)("div", {
    className: b,
    children: [(0, l.jsxs)(i.X6q, {
      variant: "heading-md/semibold",
      className: g.selectorHeading,
      children: [m.intl.string(p.default["JOpi7+"]), (0, l.jsx)(a.SrA, {
        size: "xs",
        color: a.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, l.jsx)(s.default, {
      className: f.colorPicker,
      colorContainerClassName: f.colorPickerContainer,
      defaultColor: x,
      colors: S ? d.vK : d.gD,
      value: n[0],
      secondaryValue: null != (t = n[1]) ? t : true,
      onChange: C,
      onChangeGradientColors: j,
      isGradient: S,
      gradientButtonClassName: f.gradientPicker,
      gradientDegrees: 90,
      allowBlackCustomColor: true,
      customPickerPosition: "top"
    })]
  })
}