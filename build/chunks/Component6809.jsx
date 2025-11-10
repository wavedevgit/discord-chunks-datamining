/** Chunk was on 1272 **/
/** chunk id: 6809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk705262 = require("./705262.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932720 = require("./932720.js");
let g = function() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), n = Chunk647438.useRef(null);
  Chunk647438.useEffect(() => {
    null == require.current && (require.current = exports)
  }, [exports]);
  let g = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.LIGHT),
    m = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.DARKER),
    _ = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.MIDNIGHT),
    b = Chunk647438.useMemo(() => [{
      theme: Chunk981631.BRd.LIGHT,
      label: Chunk388032.t.K2sFfo,
      color: g.hex()
    }, {
      theme: Chunk981631.BRd.DARKER,
      label: Chunk388032.t.b8Cei3,
      color: m.hex()
    }, {
      theme: Chunk981631.BRd.MIDNIGHT,
      label: Chunk388032.t.Do4ZJx,
      color: _.hex()
    }], [g, m, _]),
    E = Chunk647438.useCallback(t => {
      (0, u.Yk)({
        isPersisted: true,
        analyticsLocations: e,
        themeName: "default ".concat(t)
      }), (0, o.ZI)({
        theme: t
      })
    }, [module]),
    O = Chunk647438.useCallback(() => {
      null != require.current && E(require.current)
    }, [E]);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk932720.themeSection,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk932720.themeSelector,
      children: [b.map(e => (0, r.jsxs)("button", {
        type: "button",
        className: h.themeOption,
        onClick: () => E(e.theme),
        "aria-label": f.intl.string(e.label),
        children: [(0, r.jsx)("div", {
          className: "".concat(h.themeCircle, " ").concat(t === e.theme ? h.themeCircleSelected : ""),
          style: {
            backgroundColor: e.color
          }
        }), (0, r.jsx)("span", {
          className: h.themeLabel,
          children: f.intl.string(e.label)
        })]
      }, e.theme)), (0, Chunk951288.jsx)(Chunk481060.hU, {
        onClick: O,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.yBZMsQ),
        icon: Chunk481060.DuK,
        variant: "secondary"
      })]
    })
  })
}