/** Chunk was on 1272 **/
/** chunk id: 6809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
let h = function() {
  let {
    analyticsLocations: e
  } = (0, c.ZP)(), t = (0, l.e7)([d.Z], () => d.Z.theme), n = i.useRef(null);
  i.useEffect(() => {
    null == n.current && (n.current = t)
  }, [t]);
  let h = (0, o.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.LIGHT),
    m = (0, o.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.DARKER),
    b = (0, o.dQu)(a.Z.colors.BACKGROUND_BASE_LOW, p.BRd.MIDNIGHT),
    E = i.useMemo(() => [{
      theme: p.BRd.LIGHT,
      label: f.t.K2sFfo,
      color: h.hex()
    }, {
      theme: p.BRd.DARKER,
      label: f.t.b8Cei3,
      color: m.hex()
    }, {
      theme: p.BRd.MIDNIGHT,
      label: f.t.Do4ZJx,
      color: b.hex()
    }], [h, m, b]),
    _ = i.useCallback(t => {
      (0, u.Yk)({
        isPersisted: true,
        analyticsLocations: e,
        themeName: "default ".concat(t)
      }), (0, s.ZI)({
        theme: t
      })
    }, [e]),
    O = i.useCallback(() => {
      null != n.current && _(n.current)
    }, [_]);
  return (0, r.jsx)("div", {
    className: g.themeSection,
    children: (0, r.jsxs)("div", {
      className: g.themeSelector,
      children: [E.map(e => (0, r.jsxs)("button", {
        type: "button",
        className: g.themeOption,
        onClick: () => _(e.theme),
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
      }, e.theme)), (0, r.jsx)(o.hU, {
        onClick: O,
        "aria-label": f.intl.string(f.t.yBZMsQ),
        icon: o.DuK,
        variant: "secondary"
      })]
    })
  })
}