/** Chunk was on 30372 **/
/** chunk id: 582344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h() {
  let {
    dailyCapReached: e,
    dailyCapOverridden: t,
    newUserMinAgeRequiredOverridden: n
  } = (0, Chunk442837.cj)([Chunk68985.Z], () => ({
    dailyCapReached: Chunk68985.Z.hasUserHitDCCap(),
    dailyCapOverridden: Chunk68985.Z.dailyCapOverridden,
    newUserMinAgeRequiredOverridden: Chunk68985.Z.newUserMinAgeRequiredOverridden
  })), [h, x] = Chunk647438.useState(""), [g, f] = Chunk647438.useState(20), b = Chunk647438.useMemo(() => Object.keys(Chunk704215.z).filter(e => e.toLowerCase().includes(h.toLowerCase())).reverse(), [h]), v = Chunk647438.useCallback(e => {
    let t = e.currentTarget;
    t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && g < b.length && f(e => e + 100)
  }, [g, b.length]);
  return (0, Chunk951288.jsx)(Chunk481060.h21, {
    onScroll: v,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk455698.panelContainer,
      children: [(0, Chunk951288.jsxs)(Chunk481060.C3N, {
        label: "Dismissible Content Overrides",
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 4,
          children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Reset Daily Cap",
            onClick: () => (0, Chunk883904.EG)()
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: "Daily Cap Reached: ".concat(module ? "Yes" : "No")
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.izJ, {
          gap: 24
        }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Override Dismissible Content Daily Cap",
          checked: exports,
          onChange: Chunk883904.Nj
        }), (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: "Override Minimum User Account Age Requirement",
          checked: require,
          onChange: Chunk883904.KC
        })]
      }), (0, Chunk951288.jsx)(Chunk775195.Z, {}), (0, Chunk951288.jsx)(Chunk227157.Z, {}), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
        label: "All Dismissible Contents",
        children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: h,
          onChange: x,
          onClear: () => x("")
        }), (0, Chunk951288.jsx)(Chunk699867.Z, {
          items: b.slice(0, g)
        })]
      })]
    })
  })
}