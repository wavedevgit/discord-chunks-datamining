/** Chunk was on 21738 **/
/** chunk id: 898642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let A = new Set(["ko", "ja"]);

function g(e) {
  let {
    className: t,
    focusSectionProps: n
  } = e, g = (0, i.bG)([o.default], () => o.default.getCurrentUser()), m = (0, i.bG)([s.default], () => s.default.locale), b = (0, d.mv)(g);
  return (0, r.jsx)(a.MzZ, {
    href: u.C,
    target: "_blank",
    tabIndex: false,
    children: (0, r.jsx)(p.In, function(e) {
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
      color: b ? l.A.unsafe_rawColors.GREEN_360.css : "currentColor",
      className: t,
      onClick: () => c.default.track(f.HAw.HELP_CLICKED, {
        highlighted: b
      }),
      icon: a.cBN,
      tooltipPosition: A.has(m) ? "left" : true,
      tooltip: h.intl.string(h.t["cqEoj/"])
    }, n))
  })
}