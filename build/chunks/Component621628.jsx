/** Chunk was on web.js **/
/** chunk id: 621628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S,
  u: () => I
}), require("./388685.js"), require("./539854.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./290780.js"), require("./642613.js");
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
  Chunk581883 = require("./581883.js"),
  Chunk883904 = require("./883904.js"),
  Chunk68985 = require("./68985.js"),
  Chunk211644 = require("./211644.js"),
  Chunk428967 = require("./428967.js"),
  Chunk972118 = require("./972118.js"),
  Chunk730326 = require("./730326.js"),
  Chunk10198 = require("./10198.js");

function O(e, t) {
  let [n, r] = i.useState(() => {
    let n = c.K.get(e);
    return null != n ? n : t
  });
  return i.useEffect(() => {
    c.K.set(e, n)
  }, [e, n]), [n, r]
}

function v(e) {
  let {
    content: t
  } = e, n = (0, s.e7)([_.Z], () => {
    var e, n;
    return null == (n = _.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates) ? true : e[t]
  });
  if (null == n) return null;
  let i = [],
    {
      lastDismissedVersion: a,
      lastDismissedAtMs: o,
      lastDismissedObjectId: l
    } = n;
  if (true !== a && 0 !== a && i.push("last_dismissed_version: ".concat(a)), true !== o) {
    let e = Number(o),
      t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
    i.push("last_dismissed_at: ".concat(t))
  }
  return (true !== l && "0" !== l && i.push("last_dismissed_object_id: ".concat(l)), 0 === i.length) ? null : (0, r.jsx)(u.Text, {
    variant: "text-xs/normal",
    className: y.marginTop4,
    children: i.join(", ")
  })
}

function I(e) {
  let {
    className: t,
    contents: n,
    content: i,
    onChange: a
  } = e, o = l.z[i], {
    isDismissed: s,
    handleToggleDismissState: c
  } = (0, E.Z)(o, n), d = () => {
    a(i), c()
  };
  return (0, r.jsxs)(u.j7V, {
    value: s,
    onChange: d,
    className: t,
    children: [(0, r.jsx)(u.Text, {
      variant: "text-md/normal",
      className: y.marginTop4,
      children: "".concat(i.toLowerCase(), " (").concat(l.z[i], ")")
    }), (0, g.qh)(o) && (0, r.jsx)(v, {
      content: o
    })]
  })
}

function T(e) {
  let {
    items: t,
    dismissedContents: n,
    handleChange: i
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.filter(e => isNaN(Number(e))).map(e => (0, r.jsx)(I, {
      contents: n,
      content: e,
      onChange: i
    }, e))
  })
}

function S() {
  var e;
  let t = (0, Chunk211644.ZP)(e => e.recentlyShown),
    {
      dailyCapReached: n,
      dailyCapOverridden: a,
      newUserMinAgeRequiredOverridden: c
    } = (0, Chunk442837.cj)([Chunk68985.Z], () => ({
      dailyCapReached: Chunk68985.Z.hasUserHitDCCap(),
      dailyCapOverridden: Chunk68985.Z.dailyCapOverridden,
      newUserMinAgeRequiredOverridden: Chunk68985.Z.newUserMinAgeRequiredOverridden
    })),
    [g, E] = Chunk647438.useState(""),
    v = null != (e = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e;
      return null == (e = Chunk581883.Z.settings.userContent) ? true : module.dismissedContents
    })) ? module : new Uint8Array,
    [I, S] = O("RecentDismissibleOverrides", []),
    A = e => {
      S(t => {
        let n = new Set(t);
        n.delete(e);
        let r = Array.from(n).slice(0, 4);
        return r.unshift(e), r
      })
    },
    C = exports.map(e => l.z[e]),
    N = I.filter(e => e.toLowerCase().includes(g.toLowerCase())).filter(e => !C.includes(e)),
    R = Object.keys(Chunk704215.z).filter(e => !C.includes(e)).filter(e => !I.includes(e)).filter(e => e.toLowerCase().includes(g.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Dismissible Content Fatigue",
      tag: Chunk481060.RB0.H1,
      className: Chunk10198.marginBottom60,
      children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
        children: (0, Chunk951288.jsxs)(Chunk481060.R94, {
          className: Chunk10198.marginBottom4,
          children: ["Daily Cap Reached: ", require ? "Yes" : "No"]
        })
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk120356,
        onChange: Chunk883904.Nj,
        children: "Override Dismissible Content Daily Cap"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk433517,
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
    }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      title: "Dismissible Contents",
      tag: Chunk481060.RB0.H1,
      children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
        className: Chunk10198.marginBottom20,
        query: Chunk428967,
        onChange: Chunk972118,
        onClear: () => Chunk972118("")
      }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
        className: Chunk730326.buttonsContainer,
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Clear All Dismissed Contents",
          onClick: Chunk675478.sr
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Check All Dismissed Contents",
          onClick: Chunk675478.bE
        })]
      }), exports.length > 0 ? (0, Chunk951288.jsxs)("div", {
        className: Chunk10198.marginBottom20,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk10198.marginBottom20,
          children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Recently Shown"
          })
        }), (0, Chunk951288.jsx)(T, {
          items: C,
          dismissedContents: v,
          handleChange: A
        })]
      }) : null, N.length > 0 ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk10198.marginBottom20,
          children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Recent Overrides"
          })
        }), (0, Chunk951288.jsx)(T, {
          items: N,
          dismissedContents: v,
          handleChange: A
        })]
      }) : null, (0, Chunk951288.jsx)(Chunk600164.Z, {
        className: o()(Chunk10198.marginBottom20, Chunk10198.marginTop20),
        children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Available Dismissible Contents"
        })
      }), (0, Chunk951288.jsx)(T, {
        items: R,
        dismissedContents: v,
        handleChange: A
      })]
    })]
  })
}