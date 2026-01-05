/** Chunk was on 1272 **/
/** chunk id: 6809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk705262 = require("./705262.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk969373 = require("./969373.js");
let m = function() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), n = Chunk473749.useRef(null);
  Chunk473749.useEffect(() => {
    null == require.current && (require.current = exports)
  }, [exports]);
  let m = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.LIGHT),
    h = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.DARKER),
    b = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.MIDNIGHT),
    _ = Chunk473749.useMemo(() => [{
      theme: Chunk981631.BRd.LIGHT,
      label: Chunk388032.t.K2sFfo,
      color: m.hex()
    }, {
      theme: Chunk981631.BRd.DARKER,
      label: Chunk388032.t.b8Cei3,
      color: h.hex()
    }, {
      theme: Chunk981631.BRd.MIDNIGHT,
      label: Chunk388032.t.Do4ZJx,
      color: b.hex()
    }], [m, h, b]),
    E = Chunk473749.useCallback(t => {
      (0, u.Yk)({
        isPersisted: true,
        analyticsLocations: e,
        themeName: "default ".concat(t)
      }), (0, s.ZI)({
        theme: t
      })
    }, [module]),
    O = Chunk473749.useCallback(() => {
      null != require.current && E(require.current)
    }, [E]);
  return (0, Chunk54381.jsx)("div", {
    className: Chunk969373.themeSection,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk969373.themeSelector,
      children: [_.map(e => (0, r.jsxs)("button", {
        type: "button",
        className: g.themeOption,
        onClick: () => E(e.theme),
        "aria-label": f.intl.string(e.label),
        children: [(0, r.jsx)("div", {
          className: "".concat(g.themeCircle, " ").concat(t === e.theme ? g.themeCircleSelected : ""),
          style: {
            backgroundColor: e.color
          }
        }), (0, r.jsx)("span", {
          className: g.themeLabel,
          children: f.intl.string(e.label)
        })]
      }, e.theme)), (0, Chunk54381.jsx)(Chunk481060.hU, {
        onClick: O,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.yBZMsQ),
        icon: Chunk481060.DuK,
        variant: "secondary"
      })]
    })
  })
}