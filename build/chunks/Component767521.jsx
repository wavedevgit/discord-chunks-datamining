/** Chunk was on 21738 **/
/** chunk id: 767521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk692798 = require("./692798.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk882773 = require("./882773.js");
let A = function() {
  let {
    analyticsLocations: e
  } = (0, c.Ay)(), t = (0, l.bG)([d.A], () => d.A.theme), n = i.useRef(null);
  i.useEffect(() => {
    null == n.current && (n.current = t)
  }, [t]);
  let A = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.LIGHT),
    g = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.DARKER),
    m = (0, s.rdh)(a.A.colors.BACKGROUND_BASE_LOW, p.NJ8.MIDNIGHT),
    b = i.useMemo(() => [{
      theme: p.NJ8.LIGHT,
      label: f.t.K2sFfo,
      color: A.hex()
    }, {
      theme: p.NJ8.DARKER,
      label: f.t.b8Cei3,
      color: g.hex()
    }, {
      theme: p.NJ8.MIDNIGHT,
      label: f.t.Do4ZJx,
      color: m.hex()
    }], [A, g, m]),
    _ = i.useCallback(t => {
      (0, u.X8)({
        isPersisted: true,
        analyticsLocations: e,
        themeName: "default ".concat(t)
      }), (0, o.u_)({
        theme: t
      })
    }, [e]),
    E = i.useCallback(() => {
      null != n.current && _(n.current)
    }, [_]);
  return (0, r.jsx)("div", {
    className: h.N,
    children: (0, r.jsxs)("div", {
      className: h.t7,
      children: [b.map(e => (0, r.jsxs)("button", {
        type: "button",
        className: h.Du,
        onClick: () => _(e.theme),
        "aria-label": f.intl.string(e.label),
        children: [(0, r.jsx)("div", {
          className: "".concat(h.WT, " ").concat(t === e.theme ? h.TA : ""),
          style: {
            backgroundColor: e.color
          }
        }), (0, r.jsx)("span", {
          className: h.i,
          children: f.intl.string(e.label)
        })]
      }, e.theme)), (0, r.jsx)(s.K0, {
        onClick: E,
        "aria-label": f.intl.string(f.t.yBZMsQ),
        icon: s.fNY,
        variant: "secondary"
      })]
    })
  })
}