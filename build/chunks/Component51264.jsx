/** Chunk was on 21738 **/
/** chunk id: 51264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk521502 = require("./521502.js"),
  Chunk380610 = require("./380610.js"),
  Chunk828184 = require("./828184.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk908874 = require("./908874.js");
let g = "isHideDevBanner",
  m = () => {
    var e;
    let [t, n] = (0, i.useState)((null == (e = o.w.get(g, "false")) ? true : e.toString()) === "true"), l = (0, s.bG)([u.A], () => {
      var e;
      return (0, d.kK)() ? null == (e = u.A.getCurrentBuildOverride().overrides) ? true : e.discord_web : null
    });
    if (t) return null;
    let m = () => {
        o.w.set(g, true), n(true)
      },
      A = () => (0, r.jsx)(c.DUT, {
        onClick: m,
        className: f.b,
        "aria-label": h.intl.string(h.t.WAI6xu),
        children: (0, r.jsx)(c.PGe, {
          size: "md",
          color: "currentColor",
          className: f.ut
        })
      });
    return null != l ? (0, r.jsxs)("div", {
      className: a()(f.Wz, f.DM),
      children: [(0, r.jsx)(p.A, {
        className: f.Kk
      }), h.intl.string(h.t.Wj3LW4), (0, r.jsx)(A, {})]
    }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, r.jsxs)("div", {
      className: a()(f.Wz, f.mr),
      children: [(0, r.jsx)(p.A, {
        className: f.Kk
      }), h.intl.format(h.t.uyrfYF, {
        buildNumber: "493077"
      }), (0, r.jsx)(A, {})]
    }) : null
  }