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
    defaultColor: b,
    selectedEffectId: x,
    className: j
  } = e, S = x === l.m.GRADIENT, _ = (0, o.useCallback)(e => {
    h([e]), c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: e === b,
      colors: [e]
    })
  }, [h, b]), C = (0, o.useCallback)(e => {
    h(e), c.default.track(u.rMx.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: false,
      colors: e
    })
  }, [h]);
  return (0, r.jsxs)("div", {
    className: j,
    children: [(0, r.jsxs)(a.X6q, {
      variant: "heading-md/semibold",
      className: g.selectorHeading,
      children: [f.intl.string(p.default["JOpi7+"]), (0, r.jsx)(i.SrA, {
        size: "xs",
        color: i.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, r.jsx)(s.default, {
      className: m.colorPicker,
      colorContainerClassName: m.colorPickerContainer,
      defaultColor: b,
      colors: S ? d.vK : d.gD,
      value: n[0],
      secondaryValue: null != (t = n[1]) ? t : true,
      onChange: _,
      onChangeGradientColors: C,
      isGradient: S,
      gradientButtonClassName: m.gradientPicker,
      gradientDegrees: 90,
      allowBlackCustomColor: true,
      customPickerPosition: "top"
    })]
  })
}