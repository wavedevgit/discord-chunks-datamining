/** Chunk was on 15682 **/
/** chunk id: 18396, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk508425 = require("./508425.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk48736 = require("./48736.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk750656 = require("./750656.js"),
  Chunk652215 = require("./652215.js"),
  Chunk927961 = require("./927961.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk512134 = require("./512134.js"),
  Chunk880203 = require("./880203.js");

function x(e) {
  var t;
  let {
    selectedColors: l,
    setSelectedColors: x,
    defaultColor: g,
    selectedEffectId: j,
    className: h
  } = e, v = j === s.z.GRADIENT, N = (0, a.useCallback)(e => {
    x([e]), c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: e === g,
      colors: [e]
    })
  }, [x, g]), A = (0, a.useCallback)(e => {
    x(e), c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: false,
      colors: e
    })
  }, [x]);
  return (0, n.jsxs)("div", {
    className: h,
    children: [(0, n.jsxs)(r.DZT, {
      variant: "heading-md/semibold",
      className: p.s,
      children: [m.intl.string(f.default.JOpi7z), (0, n.jsx)(i.tvc, {
        size: "xs",
        color: i.LU0.colors.TEXT_DEFAULT
      })]
    }), (0, n.jsx)(o.default, {
      className: b.Ei,
      colorContainerClassName: b.rx,
      defaultColor: g,
      colors: v ? d.Wf : d.Jl,
      value: l[0],
      secondaryValue: null != (t = l[1]) ? t : true,
      onChange: N,
      onChangeGradientColors: A,
      isGradient: v,
      gradientButtonClassName: b.xr,
      gradientDegrees: 90,
      allowBlackCustomColor: true,
      customPickerPosition: "top"
    })]
  })
}