/** Chunk was on 30202 **/
/** chunk id: 621628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v,
  u: () => C
}), require("./388685.js"), require("./539854.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./290780.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk471345 = require("./471345.js"),
  Chunk197571 = require("./197571.js");

function E(e) {
  let {
    content: t
  } = e, n = (0, l.e7)([p.Z], () => {
    var e, n;
    return null == (n = p.Z.settings.userContent) || null == (e = n.recurringDismissibleContentStates) ? true : e[t]
  });
  if (null == n) return null;
  let r = [],
    {
      lastDismissedVersion: s,
      lastDismissedAtMs: a,
      lastDismissedObjectId: o
    } = n;
  if (true !== s && 0 !== s && r.push("last_dismissed_version: ".concat(s)), true !== a) {
    let e = Number(a),
      t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
    r.push("last_dismissed_at: ".concat(t))
  }
  return (true !== o && "0" !== o && r.push("last_dismissed_object_id: ".concat(o)), 0 === r.length) ? null : (0, i.jsx)(d.Text, {
    variant: "text-xs/normal",
    className: j.marginTop4,
    children: r.join(", ")
  })
}

function C(e) {
  let {
    className: t,
    contents: n,
    content: r,
    onChange: s
  } = e, a = o.z[r], {
    isDismissed: l,
    handleToggleDismissState: c
  } = (0, x.Z)(a, n);
  return (0, i.jsxs)(d.j7V, {
    value: l,
    onChange: () => {
      s(r), c()
    },
    className: t,
    children: [(0, i.jsx)(d.Text, {
      variant: "text-md/normal",
      className: j.marginTop4,
      children: "".concat(r.toLowerCase(), " (").concat(o.z[r], ")")
    }), (0, b.qh)(a) && (0, i.jsx)(E, {
      content: a
    })]
  })
}

function O(e) {
  let {
    items: t,
    dismissedContents: n,
    handleChange: r
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.filter(e => isNaN(Number(e))).map(e => (0, i.jsx)(C, {
      contents: n,
      content: e,
      onChange: r
    }, e))
  })
}

function v() {
  var e;
  let t = (0, Chunk211644.ZP)(e => e.recentlyShown),
    {
      dailyCapReached: n,
      dailyCapOverridden: s,
      newUserMinAgeRequiredOverridden: b
    } = (0, Chunk442837.cj)([Chunk68985.Z], () => ({
      dailyCapReached: Chunk68985.Z.hasUserHitDCCap(),
      dailyCapOverridden: Chunk68985.Z.dailyCapOverridden,
      newUserMinAgeRequiredOverridden: Chunk68985.Z.newUserMinAgeRequiredOverridden
    })),
    [x, E] = Chunk73800.useState(""),
    C = null != (e = (0, Chunk442837.e7)([Chunk581883.Z], () => {
      var e;
      return null == (e = Chunk581883.Z.settings.userContent) ? true : module.dismissedContents
    })) ? module : new Uint8Array,
    [v, S] = function(e, t) {
      let [n, i] = r.useState(() => {
        let n = c.K.get(e);
        return null != n ? n : t
      });
      return r.useEffect(() => {
        c.K.set(e, n)
      }, [e, n]), [n, i]
    }("RecentDismissibleOverrides", []),
    T = e => {
      S(t => {
        let n = new Set(t);
        n.delete(e);
        let i = Array.from(n).slice(0, 4);
        return i.unshift(e), i
      })
    },
    I = exports.map(e => o.z[e]),
    N = v.filter(e => e.toLowerCase().includes(x.toLowerCase())).filter(e => !I.includes(e)),
    y = Object.keys(Chunk704215.z).filter(e => !I.includes(e)).filter(e => !v.includes(e)).filter(e => e.toLowerCase().includes(x.toLowerCase())).sort((e, t) => e.localeCompare(t));
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)(Chunk481060.hjN, {
      title: "Dismissible Content Fatigue",
      tag: Chunk481060.RB0.H1,
      className: Chunk197571.marginBottom60,
      children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
        children: (0, Chunk255367.jsxs)(Chunk481060.R94, {
          className: Chunk197571.marginBottom4,
          children: ["Daily Cap Reached: ", require ? "Yes" : "No"]
        })
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: Chunk120356,
        onChange: Chunk883904.Nj,
        children: "Override Dismissible Content Daily Cap"
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: Chunk428967,
        onChange: Chunk883904.KC,
        children: "Override Minimum User Account Age Requirement"
      }), (0, Chunk255367.jsxs)(Chunk481060.xJW, {
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Reset DismissibleContentFrameworkStore",
          onClick: () => (0, Chunk883904.EG)()
        }), (0, Chunk255367.jsx)(Chunk481060.R94, {
          className: Chunk197571.marginTop4,
          children: "This will reset the daily cap and content seen during session"
        })]
      })]
    }), (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      title: "Dismissible Contents",
      tag: Chunk481060.RB0.H1,
      children: [(0, Chunk255367.jsx)(Chunk481060.E1j, {
        className: Chunk197571.marginBottom20,
        query: Chunk972118,
        onChange: E,
        onClear: () => E("")
      }), (0, Chunk255367.jsxs)(Chunk481060.xJW, {
        className: Chunk471345.buttonsContainer,
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Clear All Dismissed Contents",
          onClick: Chunk675478.sr
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Check All Dismissed Contents",
          onClick: Chunk675478.bE
        })]
      }), exports.length > 0 ? (0, Chunk255367.jsxs)("div", {
        className: Chunk197571.marginBottom20,
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk197571.marginBottom20,
          children: (0, Chunk255367.jsx)(Chunk481060.vwX, {
            children: "Recently Shown"
          })
        }), (0, Chunk255367.jsx)(O, {
          items: I,
          dismissedContents: C,
          handleChange: T
        })]
      }) : null, N.length > 0 ? (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk197571.marginBottom20,
          children: (0, Chunk255367.jsx)(Chunk481060.vwX, {
            children: "Recent Overrides"
          })
        }), (0, Chunk255367.jsx)(O, {
          items: N,
          dismissedContents: C,
          handleChange: T
        })]
      }) : null, (0, Chunk255367.jsx)(Chunk600164.Z, {
        className: a()(Chunk197571.marginBottom20, Chunk197571.marginTop20),
        children: (0, Chunk255367.jsx)(Chunk481060.vwX, {
          children: "Available Dismissible Contents"
        })
      }), (0, Chunk255367.jsx)(O, {
        items: y,
        dismissedContents: C,
        handleChange: T
      })]
    })]
  })
}