/** Chunk was on web.js **/
/** chunk id: 621628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk675478 = require("./675478.js"),
  Chunk883904 = require("./883904.js"),
  Chunk68985 = require("./68985.js"),
  Chunk211644 = require("./211644.js"),
  Chunk98460 = require("./98460.js"),
  Chunk699867 = require("./699867.jsx"),
  Chunk227157 = require("./227157.jsx"),
  Chunk775195 = require("./775195.jsx"),
  Chunk10198 = require("./10198.js");

function g() {
  let e = (0, Chunk211644.ZP)(e => e.recentlyShown),
    {
      dailyCapReached: t,
      dailyCapOverridden: n,
      newUserMinAgeRequiredOverridden: g
    } = (0, Chunk442837.cj)([Chunk68985.Z], () => ({
      dailyCapReached: Chunk68985.Z.hasUserHitDCCap(),
      dailyCapOverridden: Chunk68985.Z.dailyCapOverridden,
      newUserMinAgeRequiredOverridden: Chunk68985.Z.newUserMinAgeRequiredOverridden
    })),
    [E, b] = Chunk647438.useState(""),
    [y, O] = (0, Chunk98460.Z)(),
    v = module.map(e => o.z[e]),
    I = Object.keys(Chunk704215.z).filter(e => !v.includes(e)).filter(e => !y.includes(e)).filter(e => e.toLowerCase().includes(E.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Dismissible Content Fatigue",
      tag: Chunk481060.RB0.H1,
      className: Chunk10198.marginBottom60,
      children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
        children: (0, Chunk951288.jsxs)(Chunk481060.R94, {
          className: Chunk10198.marginBottom4,
          children: ["Daily Cap Reached: ", exports ? "Yes" : "No"]
        })
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: Chunk883904.Nj,
        children: "Override Dismissible Content Daily Cap"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: g,
        onChange: Chunk883904.KC,
        children: "Override Minimum User Account Age Requirement"
      }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Reset DismissibleContentFrameworkStore",
          onClick: () => (0, Chunk883904.EG)()
        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk10198.marginTop4,
          children: "This will reset the daily cap and content seen during session"
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
      title: "Dismissible Contents",
      tag: Chunk481060.RB0.H1,
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: E,
          onChange: b,
          onClear: () => b("")
        }), (0, Chunk951288.jsxs)(Chunk481060.hE2, {
          children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "critical-primary",
            text: "Clear All Dismissed Contents",
            onClick: Chunk675478.sr
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "secondary",
            text: "Check All Dismissed Contents",
            onClick: Chunk675478.bE
          })]
        }), (0, Chunk951288.jsx)(Chunk775195.Z, {
          searchQuery: E
        }), (0, Chunk951288.jsx)(Chunk227157.Z, {
          searchQuery: E
        }), (0, Chunk951288.jsxs)("div", {
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            tag: Chunk481060.RB0.H2,
            children: "Available Dismissible Contents"
          }), (0, Chunk951288.jsx)(Chunk699867.Z, {
            items: I
          })]
        })]
      })
    })]
  })
}