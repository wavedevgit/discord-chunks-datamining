/** Chunk was on 15682 **/
/** chunk id: 18396, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  var t;
  let {
    selectedColors: l,
    setSelectedColors: _,
    defaultColor: x,
    selectedEffectId: b,
    className: h
  } = e, j = b === s.z.GRADIENT, v = (0, r.useCallback)(e => {
    _([e]), c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: e === x,
      colors: [e]
    })
  }, [_, x]), N = (0, r.useCallback)(e => {
    _(e), c.default.track(u.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, {
      default: false,
      colors: e
    })
  }, [_]);
  return (0, n.jsxs)("div", {
    className: h,
    children: [(0, n.jsxs)(a.DZT, {
      variant: "heading-md/semibold",
      className: g.s,
      children: [p.intl.string(m.default.JOpi7z), (0, n.jsx)(o.tvc, {
        size: "xs",
        color: o.LU0.colors.TEXT_DEFAULT
      })]
    }), (0, n.jsx)(i.default, {
      className: f.Ei,
      colorContainerClassName: f.rx,
      defaultColor: x,
      colors: j ? d.Wf : d.Jl,
      value: l[0],
      secondaryValue: null != (t = l[1]) ? t : true,
      onChange: v,
      onChangeGradientColors: N,
      isGradient: j,
      gradientButtonClassName: f.xr,
      gradientDegrees: 90,
      allowBlackCustomColor: true,
      customPickerPosition: "top"
    })]
  })
}