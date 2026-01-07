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
  } = (0, i.cj)([c.Z], () => ({
    dailyCapReached: c.Z.hasUserHitDCCap(),
    dailyCapOverridden: c.Z.dailyCapOverridden,
    newUserMinAgeRequiredOverridden: c.Z.newUserMinAgeRequiredOverridden
  })), [f, h] = r.useState(""), [x, b] = r.useState(20), g = r.useMemo(() => Object.keys(l.z).filter(e => e.toLowerCase().includes(f.toLowerCase())).reverse(), [f]), v = r.useCallback(e => {
    let t = e.currentTarget;
    t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && x < g.length && b(e => e + 100)
  }, [x, g.length]);
  return (0, a.jsx)(s.h21, {
    onScroll: v,
    children: (0, a.jsxs)("div", {
      className: p.panelContainer,
      children: [(0, a.jsxs)(s.C3N, {
        label: "Dismissible Content Overrides",
        children: [(0, a.jsxs)(s.Kqy, {
          gap: 4,
          children: [(0, a.jsx)(s.Button, {
            variant: "primary",
            text: "Reset Daily Cap",
            onClick: () => (0, o.EG)()
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: "Daily Cap Reached: ".concat(e ? "Yes" : "No")
          })]
        }), (0, a.jsx)(s.izJ, {
          gap: 24
        }), (0, a.jsx)(s.rsf, {
          label: "Override Dismissible Content Daily Cap",
          checked: t,
          onChange: o.Nj
        }), (0, a.jsx)(s.rsf, {
          label: "Override Minimum User Account Age Requirement",
          checked: n,
          onChange: o.KC
        })]
      }), (0, a.jsx)(m.Z, {}), (0, a.jsx)(u.Z, {}), (0, a.jsxs)(s.C3N, {
        label: "All Dismissible Contents",
        children: [(0, a.jsx)(s.E1j, {
          query: f,
          onChange: h,
          onClear: () => h("")
        }), (0, a.jsx)(d.Z, {
          items: g.slice(0, x)
        })]
      })]
    })
  })
}