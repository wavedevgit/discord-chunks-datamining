/** Chunk was on 20725 **/
/** chunk id: 251637, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk890687 = require("./890687.js"),
  Chunk191065 = require("./191065.jsx"),
  Chunk753245 = require("./753245.js");
let d = function(e) {
  let {
    className: t,
    color: n = s.A.colors.WHITE,
    quest: l,
    isInventory: d
  } = e, p = (0, o.aC)(e.quest), {
    percentComplete: m,
    completedRatioDisplay: f
  } = (0, o.O9)(l);
  return !d && p.length > 0 ? (0, r.jsx)(u.A, {
    children: p.at(0)
  }) : (0, r.jsxs)("div", {
    className: i()(c.iE, t),
    style: {
      color: n.css
    },
    children: [(0, r.jsxs)("div", {
      className: c.O,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        className: c.Df,
        color: "none",
        children: f
      }), (0, r.jsx)("div", {
        className: c.Cj,
        style: {
          width: "".concat(100 - m, "%")
        }
      })]
    }), (0, r.jsx)("div", {
      className: c.hr,
      role: "progressbar",
      "aria-valuenow": m,
      children: (0, r.jsx)("div", {
        className: c.SX,
        style: {
          width: "".concat(m, "%")
        }
      })
    }), p.length > 0 && (0, r.jsx)(u.A, {
      isInventory: d,
      children: p.at(0)
    })]
  })
}