/** Chunk was on 1272 **/
/** chunk id: 300986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = new Set(["ko", "ja"]);

function m(e) {
  let {
    className: t,
    focusSectionProps: n
  } = e, m = (0, i.e7)([o.default], () => o.default.getCurrentUser()), _ = (0, i.e7)([s.default], () => s.default.locale), b = (0, d.EO)(m);
  return (0, r.jsx)(a.Anchor, {
    href: u.w,
    target: "_blank",
    tabIndex: false,
    children: (0, r.jsx)(p.JO, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      color: b ? l.Z.unsafe_rawColors.GREEN_360.css : "currentColor",
      className: t,
      onClick: () => c.default.track(f.rMx.HELP_CLICKED, {
        highlighted: b
      }),
      icon: a.idN,
      tooltipPosition: g.has(_) ? "left" : true,
      tooltip: h.intl.string(h.t["cqEoj/"])
    }, n))
  })
}