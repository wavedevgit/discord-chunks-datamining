/** Chunk was on 6043 **/
/** chunk id: 582344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./583741.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk883904 = require("./883904.js"),
  Chunk68985 = require("./68985.js"),
  Chunk699867 = require("./699867.jsx"),
  Chunk227157 = require("./227157.jsx"),
  Chunk775195 = require("./775195.jsx"),
  Chunk117768 = require("./117768.js");

function f() {
  let {
    dailyCapReached: e,
    dailyCapOverridden: t,
    newUserMinAgeRequiredOverridden: n
  } = (0, Chunk442837.cj)([Chunk68985.Z], () => ({
    dailyCapReached: Chunk68985.Z.hasUserHitDCCap(),
    dailyCapOverridden: Chunk68985.Z.dailyCapOverridden,
    newUserMinAgeRequiredOverridden: Chunk68985.Z.newUserMinAgeRequiredOverridden
  })), [f, h] = Chunk473749.useState(""), [x, b] = Chunk473749.useState(20), g = Chunk473749.useMemo(() => Object.keys(Chunk704215.z).filter(e => e.toLowerCase().includes(f.toLowerCase())).reverse(), [f]), v = Chunk473749.useCallback(e => {
    let t = e.currentTarget;
    t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && x < g.length && b(e => e + 100)
  }, [x, g.length]);
  return (0, Chunk54381.jsx)(Chunk481060.h21, {
    onScroll: v,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk117768.panelContainer,
      children: [(0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: "Dismissible Content Overrides",
        children: [(0, Chunk54381.jsxs)(Chunk481060.Kqy, {
          gap: 4,
          children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Reset Daily Cap",
            onClick: () => (0, Chunk883904.EG)()
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: "Daily Cap Reached: ".concat(module ? "Yes" : "No")
          })]
        }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
          gap: 24
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Override Dismissible Content Daily Cap",
          checked: exports,
          onChange: Chunk883904.Nj
        }), (0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: "Override Minimum User Account Age Requirement",
          checked: require,
          onChange: Chunk883904.KC
        })]
      }), (0, Chunk54381.jsx)(Chunk775195.Z, {}), (0, Chunk54381.jsx)(Chunk227157.Z, {}), (0, Chunk54381.jsxs)(Chunk481060.C3N, {
        label: "All Dismissible Contents",
        children: [(0, Chunk54381.jsx)(Chunk481060.E1j, {
          query: f,
          onChange: h,
          onClear: () => h("")
        }), (0, Chunk54381.jsx)(Chunk699867.Z, {
          items: g.slice(0, x)
        })]
      })]
    })
  })
}