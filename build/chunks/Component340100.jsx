/** Chunk was on 43778 **/
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
    quest: l,
    isInventory: d
  } = e, m = (0, o.qb)(e.quest), {
    percentComplete: f,
    completedRatioDisplay: E
  } = (0, o.I)(l);
  return !d && m.length > 0 ? (0, r.jsx)(u.Z, {
    children: m.at(0)
  }) : (0, r.jsxs)("div", {
    className: s()(c.wrapper, t),
    style: {
      color: n.css
    },
    children: [(0, r.jsxs)("div", {
      className: c.percentCompleteWrapper,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        className: c.percentCompleteLabel,
        color: "none",
        children: E
      }), (0, r.jsx)("div", {
        className: c.percentCompleteLabelOffset,
        style: {
          width: "".concat(100 - f, "%")
        }
      })]
    }), (0, r.jsx)("div", {
      className: c.progressBar,
      role: "progressbar",
      "aria-valuenow": f,
      children: (0, r.jsx)("div", {
        className: c.progressBarFill,
        style: {
          width: "".concat(f, "%")
        }
      })
    }), m.length > 0 && (0, r.jsx)(u.Z, {
      isInventory: d,
      children: m.at(0)
    })]
  })
}