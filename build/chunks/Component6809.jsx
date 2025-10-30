/** Chunk was on 1272 **/
/** chunk id: 6809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk839104 = require("./839104.js");
let h = function() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme), n = Chunk647438.useRef(null);
  Chunk647438.useEffect(() => {
    null == require.current && (require.current = exports)
  }, [exports]);
  let h = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.LIGHT),
    g = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.DARKER),
    _ = (0, Chunk481060.dQu)(Chunk692547.Z.colors.BACKGROUND_BASE_LOW, Chunk981631.BRd.MIDNIGHT),
    b = Chunk647438.useMemo(() => [{
      theme: Chunk981631.BRd.LIGHT,
      label: Chunk388032.t.K2sFfo,
      color: h.hex()
    }, {
      theme: Chunk981631.BRd.DARKER,
      label: Chunk388032.t.b8Cei3,
      color: g.hex()
    }, {
      theme: Chunk981631.BRd.MIDNIGHT,
      label: Chunk388032.t.Do4ZJx,
      color: _.hex()
    }], [h, g, _]),
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
    className: Chunk839104.themeSection,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk839104.themeSelector,
      children: [b.map(e => (0, r.jsxs)("button", {
        type: "button",
        className: m.themeOption,
        onClick: () => E(e.theme),
        "aria-label": f.intl.string(e.label),
        children: [(0, r.jsx)("div", {
          className: "".concat(m.themeCircle, " ").concat(t === e.theme ? m.themeCircleSelected : ""),
          style: {
            backgroundColor: e.color
          }
        }), (0, r.jsx)("span", {
          className: m.themeLabel,
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