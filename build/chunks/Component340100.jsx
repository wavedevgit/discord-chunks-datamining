/** Chunk was on 35129 **/
/** chunk id: 340100, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk968843 = require("./968843.js"),
  Chunk141707 = require("./141707.jsx"),
  Chunk905889 = require("./905889.js");
let d = function(e) {
  let {
    className: t,
    color: n = i.Z.colors.WHITE,
    quest: r,
    isInventory: d
  } = e, E = (0, a.qb)(e.quest), {
    percentComplete: m,
    completedRatioDisplay: p
  } = (0, a.I)(r);
  return !d && E.length > 0 ? (0, l.jsx)(u.Z, {
    children: E.at(0)
  }) : (0, l.jsxs)("div", {
    className: s()(c.wrapper, t),
    style: {
      color: n.css
    },
    children: [(0, l.jsxs)("div", {
      className: c.percentCompleteWrapper,
      children: [(0, l.jsx)(o.Text, {
        variant: "text-xs/semibold",
        className: c.percentCompleteLabel,
        color: "none",
        children: p
      }), (0, l.jsx)("div", {
        className: c.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - m, "%")
        }
      })]
    }), (0, l.jsx)("div", {
      className: c.progressBar,
      role: "progressbar",
      "aria-valuenow": m,
      children: (0, l.jsx)("div", {
        className: c.progressBarFill,
        style: {
          width: "".concat(m, "%")
        }
      })
    }), E.length > 0 && (0, l.jsx)(u.Z, {
      isInventory: d,
      children: E.at(0)
    })]
  })
}