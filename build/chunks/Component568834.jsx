/** Chunk was on 36054 **/
/** chunk id: 568834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk541689 = require("./541689.js"),
  Chunk199773 = require("./199773.js"),
  Chunk963763 = require("./963763.jsx"),
  Chunk64343 = require("./64343.jsx"),
  Chunk821052 = require("./821052.jsx"),
  Chunk594061 = require("./594061.js"),
  Chunk304932 = require("./304932.js");

function x() {
  let {
    dailyCapReached: e,
    dailyCapOverridden: t,
    newUserMinAgeRequiredOverridden: n
  } = (0, r.cf)([c.A], () => ({
    dailyCapReached: c.A.hasUserHitDCCap(),
    dailyCapOverridden: c.A.dailyCapOverridden,
    newUserMinAgeRequiredOverridden: c.A.newUserMinAgeRequiredOverridden
  })), [x, g] = l.useState(""), [f, b] = l.useState(20), v = l.useMemo(() => Object.keys(i.M).filter(e => e.toLowerCase().includes(x.toLowerCase())).reverse(), [x]), j = l.useCallback(e => {
    let t = e.currentTarget;
    t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && f < v.length && b(e => e + 100)
  }, [f, v.length]);
  return (0, a.jsx)(s.ChK, {
    onScroll: j,
    children: (0, a.jsxs)("div", {
      className: h.KE,
      children: [(0, a.jsxs)(s.nVY, {
        label: "Dismissible Content Overrides",
        children: [(0, a.jsxs)(s.BJc, {
          gap: 4,
          children: [(0, a.jsxs)(s.BJc, {
            gap: 4,
            direction: "horizontal",
            children: [(0, a.jsx)(s.Button, {
              variant: "primary",
              text: "Reset Daily Cap",
              onClick: () => (0, o.Ab)()
            }), (0, a.jsx)(s.Button, {
              variant: "primary",
              text: "Clear All",
              onClick: () => (0, p.nT)()
            }), (0, a.jsx)(s.Button, {
              variant: "primary",
              text: "Check All",
              onClick: () => (0, p.D1)()
            })]
          }), (0, a.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: "Daily Cap Reached: ".concat(e ? "Yes" : "No")
          })]
        }), (0, a.jsx)(s.dOG, {
          label: "Override Dismissible Content Daily Cap",
          checked: t,
          onChange: o.SE
        }), (0, a.jsx)(s.dOG, {
          label: "Override Minimum User Account Age Requirement",
          checked: n,
          onChange: o.U$
        })]
      }), (0, a.jsx)(m.A, {}), (0, a.jsx)(u.A, {}), (0, a.jsxs)(s.nVY, {
        label: "All Dismissible Contents",
        children: [(0, a.jsx)(s.IWV, {
          query: x,
          onChange: g,
          onClear: () => g("")
        }), (0, a.jsx)(d.A, {
          items: v.slice(0, f)
        })]
      })]
    })
  })
}