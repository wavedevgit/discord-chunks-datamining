/** Chunk was on 47495 **/
/** chunk id: 579346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk522942 = require("./522942.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797967 = require("./797967.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk660662 = require("./660662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk143525 = require("./143525.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk205178 = require("./205178.js"),
  Chunk238267 = require("./238267.js");

function h(e) {
  var t;
  let {
    selectedColors: n,
    setSelectedColors: h,
    defaultColor: b,
    selectedEffectId: x,
    className: S
  } = e, j = x === r.m.GRADIENT, C = (0, o.useCallback)(e => {
    h([e]), c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: e === b,
      colors: [e]
    })
  }, [h, b]), v = (0, o.useCallback)(e => {
    h(e), c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: false,
      colors: e
    })
  }, [h]);
  return (0, l.jsxs)("div", {
    className: S,
    children: [(0, l.jsxs)(a.X6q, {
      variant: "heading-md/semibold",
      className: g.selectorHeading,
      children: [p.intl.string(f.default.JOpi7z), (0, l.jsx)(i.SrA, {
        size: "xs",
        color: i.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, l.jsx)(s.default, {
      className: m.colorPicker,
      colorContainerClassName: m.colorPickerContainer,
      defaultColor: b,
      colors: j ? d.vK : d.gD,
      value: n[0],
      secondaryValue: null != (t = n[1]) ? t : true,
      onChange: C,
      onChangeGradientColors: v,
      isGradient: j,
      gradientButtonClassName: m.gradientPicker,
      gradientDegrees: 90,
      allowBlackCustomColor: true,
      customPickerPosition: "top"
    })]
  })
}