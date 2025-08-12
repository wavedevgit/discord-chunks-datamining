/** Chunk was on 47495 **/
/** chunk id: 579346, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk522942 = require("./522942.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797967 = require("./797967.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk660662 = require("./660662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975234 = require("./975234.js"),
  Chunk179786 = require("./179786.js");

function h(e) {
  var t;
  let {
    selectedColors: n,
    setSelectedColors: h,
    defaultColor: b,
    selectedEffectId: x,
    className: j
  } = e, _ = x === l.m.GRADIENT, S = (0, o.useCallback)(e => {
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
    children: [(0, r.jsxs)(i.X6, {
      variant: "heading-md/semibold",
      className: g.selectorHeading,
      children: [f.intl.string(p.default["JOpi7+"]), (0, r.jsx)(a.SrA, {
        size: "xs",
        color: a.TVs.colors.TEXT_DEFAULT
      })]
    }), (0, r.jsx)(s.default, {
      className: m.colorPicker,
      colorContainerClassName: m.colorPickerContainer,
      defaultColor: b,
      colors: _ ? d.vK : d.gD,
      value: n[0],
      secondaryValue: null != (t = n[1]) ? t : true,
      onChange: S,
      onChangeGradientColors: C,
      isGradient: _,
      gradientButtonClassName: m.gradientPicker,
      gradientDegrees: 90,
      allowBlackCustomColor: true
    })]
  })
}