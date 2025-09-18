/** Chunk was on 85991 **/
/** chunk id: 582344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk883904 = require("./883904.js"),
  Chunk68985 = require("./68985.js"),
  Chunk699867 = require("./699867.jsx"),
  Chunk227157 = require("./227157.jsx"),
  Chunk775195 = require("./775195.jsx"),
  Chunk455698 = require("./455698.js");

function p() {
  let {
    dailyCapReached: e,
    dailyCapOverridden: t,
    newUserMinAgeRequiredOverridden: n
  } = (0, Chunk442837.cj)([Chunk68985.Z], () => ({
    dailyCapReached: Chunk68985.Z.hasUserHitDCCap(),
    dailyCapOverridden: Chunk68985.Z.dailyCapOverridden,
    newUserMinAgeRequiredOverridden: Chunk68985.Z.newUserMinAgeRequiredOverridden
  })), [p, x] = Chunk647438.useState(""), b = Object.keys(Chunk704215.z).filter(e => e.toLowerCase().includes(p.toLowerCase())).reverse();
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk455698.panelContainer,
      children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
        title: "Dismissible Content Overrides",
        tag: "h1",
        children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
          title: "Daily Cap Reached: ".concat(module ? "Yes" : "No"),
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Reset Daily Cap",
            onClick: () => (0, Chunk883904.EG)()
          })
        }), (0, Chunk951288.jsx)(Chunk481060.$i$, {
          className: Chunk455698.divider
        }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: exports,
          onChange: Chunk883904.Nj,
          children: "Override Dismissible Content Daily Cap"
        }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
          value: require,
          onChange: Chunk883904.KC,
          children: "Override Minimum User Account Age Requirement"
        })]
      }), (0, Chunk951288.jsx)(Chunk775195.Z, {}), (0, Chunk951288.jsx)(Chunk227157.Z, {}), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        title: "All Dismissible Contents",
        tag: "h1",
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk455698.searchBarContainer,
          children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
            query: p,
            onChange: x,
            onClear: () => x("")
          })
        }), (0, Chunk951288.jsx)(Chunk699867.Z, {
          items: b
        })]
      })]
    })
  })
}