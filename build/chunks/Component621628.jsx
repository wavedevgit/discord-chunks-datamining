/** Chunk was on web.js **/
/** chunk id: 621628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./290780.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk675478 = require("./675478.js"),
  Chunk883904 = require("./883904.js"),
  Chunk68985 = require("./68985.js"),
  Chunk211644 = require("./211644.js"),
  Chunk87454 = require("./87454.jsx"),
  Chunk197571 = require("./197571.js");

function E(e, t) {
  let [n, r] = i.useState(() => {
    let n = c.K.get(e);
    return null != n ? n : t
  });
  return i.useEffect(() => {
    c.K.set(e, n)
  }, [e, n]), [n, r]
}

function b(e) {
  let {
    items: t,
    handleChange: n
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.filter(e => isNaN(Number(e))).map(e => (0, r.jsx)(m.Z, {
      content: e,
      onChange: n
    }, e))
  })
}

function y() {
  let e = (0, Chunk211644.ZP)(e => e.recentlyShown),
    {
      dailyCapReached: t,
      dailyCapOverridden: n,
      newUserMinAgeRequiredOverridden: a
    } = (0, Chunk442837.cj)([Chunk68985.Z], () => ({
      dailyCapReached: Chunk68985.Z.hasUserHitDCCap(),
      dailyCapOverridden: Chunk68985.Z.dailyCapOverridden,
      newUserMinAgeRequiredOverridden: Chunk68985.Z.newUserMinAgeRequiredOverridden
    })),
    [c, m] = Chunk647438.useState(""),
    [y, O] = E("RecentDismissibleOverrides", []),
    v = Chunk647438.useCallback(e => {
      O(t => {
        let n = new Set(t);
        n.delete(e);
        let r = Array.from(n).slice(0, 4);
        return r.unshift(e), r
      })
    }, [O]),
    I = module.map(e => l.z[e]),
    T = y.filter(e => e.toLowerCase().includes(c.toLowerCase())).filter(e => !I.includes(e)),
    S = Object.keys(Chunk704215.z).filter(e => !I.includes(e)).filter(e => !y.includes(e)).filter(e => e.toLowerCase().includes(c.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Dismissible Content Fatigue",
      tag: Chunk481060.RB0.H1,
      className: Chunk197571.marginBottom60,
      children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
        children: (0, Chunk951288.jsxs)(Chunk481060.R94, {
          className: Chunk197571.marginBottom4,
          children: ["Daily Cap Reached: ", exports ? "Yes" : "No"]
        })
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        onChange: Chunk883904.Nj,
        children: "Override Dismissible Content Daily Cap"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk120356,
        onChange: Chunk883904.KC,
        children: "Override Minimum User Account Age Requirement"
      }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Reset DismissibleContentFrameworkStore",
          onClick: () => (0, Chunk883904.EG)()
        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk197571.marginTop4,
          children: "This will reset the daily cap and content seen during session"
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.hjN, {
      title: "Dismissible Contents",
      tag: Chunk481060.RB0.H1,
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: Chunk433517,
          onChange: Chunk87454,
          onClear: () => Chunk87454("")
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
        }), module.length > 0 ? (0, Chunk951288.jsxs)("div", {
          className: Chunk197571.marginBottom20,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk197571.marginBottom20,
            children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
              children: "Recently Shown"
            })
          }), (0, Chunk951288.jsx)(b, {
            items: I,
            handleChange: v
          })]
        }) : null, T.length > 0 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk197571.marginBottom20,
            children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
              children: "Recent Overrides"
            })
          }), (0, Chunk951288.jsx)(b, {
            items: T,
            handleChange: v
          })]
        }) : null, (0, Chunk951288.jsx)(Chunk600164.Z, {
          className: o()(Chunk197571.marginBottom20, Chunk197571.marginTop20),
          children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Available Dismissible Contents"
          })
        }), (0, Chunk951288.jsx)(b, {
          items: S,
          handleChange: v
        })]
      })
    })]
  })
}