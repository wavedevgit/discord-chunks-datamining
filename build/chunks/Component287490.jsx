/** Chunk was on web.js **/
/** chunk id: 287490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./953529.js"), require("./49124.js"), require("./539854.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk887580 = require("./887580.jsx"),
  Chunk492435 = require("./492435.js"),
  Chunk389494 = require("./389494.jsx"),
  Chunk353926 = require("./353926.js"),
  Chunk667344 = require("./667344.js"),
  Chunk453032 = require("./453032.js"),
  Chunk493075 = require("./493075.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk572004 = require("./572004.js"),
  Chunk878209 = require("./878209.js"),
  Chunk987338 = require("./987338.js"),
  Chunk758746 = require("./758746.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, Chunk667344.Q)(), {
    experiments: n,
    overridesInfo: a
  } = (0, Chunk493075.s)(), o = Chunk647438.useMemo(() => T({}, require, module), [require, module]), s = Chunk647438.useMemo(() => T({}, Chunk392711, exports), [Chunk392711, exports]), [l, u] = Chunk647438.useState(""), d = (0, Chunk878209.Ro)((0, Chunk878209.Tc)((0, Chunk878209.Cg)(o), Chunk442837), Chunk755721);
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: "Experiments",
    children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
      query: Chunk755721,
      onChange: Chunk887580,
      onClear: () => Chunk887580("")
    }), Chunk492435.length > 0 ? Chunk492435.map(e => {
      let t = "guild" === e.experiment.kind ? C : A;
      return (0, r.jsx)(t, {
        experiment: e.experiment,
        experimentId: e.id,
        overrideInfo: s[e.id],
        defaultOpen: null != s[e.id]
      }, e.id)
    }) : (0, Chunk951288.jsx)("div", {
      className: Chunk758746.emptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function A(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: a,
    defaultOpen: p
  } = e, [m, E] = i.useState(p), [y, I] = i.useState(false), T = i.useCallback(() => {
    E(e => !e)
  }, []), S = (0, s.e7)([g.default], () => g.default.getId()), A = (0, h.q)(t, S), C = (0, h.a)(t, S), N = (0, s.Wu)([_.Z], () => o().sortBy(_.Z.getRecentExposures(O.xY.USER, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), R = i.useCallback(e => {
    (0, b.JG)((0, u.sZ)(n), () => {
      (0, c.showToast)({
        id: "experiment-link-copied",
        message: "Copied experiment link",
        type: c.ToastType.SUCCESS
      }), e.preventDefault(), e.stopPropagation()
    })
  }, [n]), P = (0, r.jsx)(c.kL8, {
    "aria-label": "Toggle visibility",
    onClick: T,
    children: (0, r.jsxs)(c.vwX, {
      tag: c.RB0.H3,
      className: v.title,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)(c.Kqy, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          children: [t.title, " ", b.wS && (0, r.jsx)(c.P3F, {
            onClick: R,
            children: (0, r.jsx)(c.xPt, {
              size: "xs"
            })
          })]
        }), (0, r.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: v.experimentDate,
        children: "User"
      })]
    })
  });
  if (!m) return (0, r.jsx)("div", {
    className: v.group,
    children: (0, r.jsx)(c.hjN, {
      children: P
    })
  });
  let w = "";
  return w = t.system === d.I.LEGACY ? "Currently assigned to bucket ".concat(null != A ? A : O.NZ.NOT_ELIGIBLE) : null != A ? "Currently assigned to variant ".concat(A) : "Currently unassigned", (0, r.jsxs)("div", {
    className: v.group,
    children: [(0, r.jsxs)(c.hjN, {
      children: [P, (0, r.jsx)("div", {
        children: (0, r.jsx)(c.xJW, {
          title: t.system === d.I.LEGACY ? "Bucket Override" : "Variant Override",
          children: (0, r.jsx)(f.y, {
            experiment: t,
            experimentId: n,
            overrideInfo: a
          })
        })
      }), (0, r.jsxs)("div", {
        className: v.description,
        children: [(0, r.jsx)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: w
        }), null == C ? (0, r.jsx)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), y ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.vwX, {
          tag: "h5",
          className: v.debugTitle,
          children: "Server Descriptor"
        }), (0, r.jsx)(c.Text, {
          variant: "code",
          className: v.pre,
          children: null == C ? "None" : JSON.stringify(C, true, 2)
        }), (0, r.jsx)(c.vwX, {
          tag: "h5",
          className: v.debugTitle,
          children: "Override Descriptor"
        }), (0, r.jsx)(c.Text, {
          variant: "code",
          className: v.pre,
          children: (null == a ? true : a.originalDescriptor) == null ? "None" : JSON.stringify(a.originalDescriptor, true, 2)
        }), (0, r.jsx)(c.vwX, {
          tag: "h5",
          className: v.debugTitle,
          children: "Recent Exposures"
        }), (0, r.jsx)(c.Text, {
          variant: "code",
          className: v.pre,
          children: 0 === N.length ? "None" : N.join("\n")
        })]
      }) : (0, r.jsx)(l.zx, {
        className: v.debugButton,
        size: l.zx.Sizes.SMALL,
        look: l.zx.Looks.BLANK,
        onClick: () => I(true),
        children: "More Details \xbb"
      })]
    }), (0, r.jsx)(c.$i$, {
      className: v.divider
    })]
  })
}

function C(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: a
  } = e, [u, d] = i.useState(null != a), [p, h] = i.useState(false), m = i.useCallback(() => {
    d(e => !e)
  }, []), g = (0, s.e7)([_.Z], () => _.Z.getLoadedGuildExperiment(n)), b = (0, s.Wu)([_.Z], () => o().sortBy(_.Z.getRecentExposures(O.xY.GUILD, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), [y, I] = (0, s.Wu)([E.Z, _.Z], () => {
    let e = o().sortBy(E.Z.getGuildsArray(), e => e.name.toLowerCase()),
      t = {},
      r = [];
    for (let a of e) {
      var i;
      let e = _.Z.getGuildExperimentDescriptor(n, a.id),
        o = null != (i = null == e ? true : e.bucket) ? i : O.NZ.NOT_ELIGIBLE;
      o in t || (t[o] = 0), t[o]++, r.push("".concat(a.name, ": ").concat(o))
    }
    let a = o()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [r.join("\n"), a]
  }), T = (0, r.jsx)(c.P3F, {
    onClick: m,
    children: (0, r.jsxs)(c.vwX, {
      tag: c.RB0.H3,
      className: v.title,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          children: t.title
        }), (0, r.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: v.experimentDate,
        children: "Guild"
      })]
    })
  });
  return u ? (0, r.jsxs)("div", {
    className: v.group,
    children: [(0, r.jsxs)(c.hjN, {
      children: [T, (0, r.jsx)("div", {
        children: (0, r.jsx)(c.xJW, {
          title: "Bucket Override",
          children: (0, r.jsx)(f.y, {
            experiment: t,
            experimentId: n,
            overrideInfo: a
          })
        })
      }), (0, r.jsxs)("div", {
        className: v.description,
        children: [(0, r.jsxs)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: ["Current Assignments: ", I]
        }), null == g ? (0, r.jsx)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), p ? (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.vwX, {
          tag: "h5",
          className: v.debugTitle,
          children: "Guild Assignments"
        }), (0, r.jsx)(c.Text, {
          variant: "code",
          className: v.pre,
          children: y
        }), (0, r.jsx)(c.vwX, {
          tag: "h5",
          className: v.debugTitle,
          children: "Server Descriptor"
        }), (0, r.jsx)(c.Text, {
          variant: "code",
          className: v.pre,
          children: null == g ? "None" : JSON.stringify(g, true, 2)
        }), (0, r.jsx)(c.vwX, {
          tag: "h5",
          className: v.debugTitle,
          children: "Override Descriptor"
        }), (0, r.jsx)(c.Text, {
          variant: "code",
          className: v.pre,
          children: (null == a ? true : a.originalDescriptor) == null ? "None" : JSON.stringify(a.originalDescriptor, true, 2)
        }), (0, r.jsx)(c.vwX, {
          tag: "h5",
          className: v.debugTitle,
          children: "Recent Exposures"
        }), (0, r.jsx)(c.Text, {
          variant: "code",
          className: v.pre,
          children: 0 === b.length ? "None" : b.join("\n")
        })]
      }) : (0, r.jsx)(l.zx, {
        className: v.debugButton,
        size: l.zx.Sizes.SMALL,
        look: l.zx.Looks.BLANK,
        onClick: () => h(true),
        children: "More Details \xbb"
      })]
    }), (0, r.jsx)(c.$i$, {
      className: v.divider
    })]
  }) : (0, r.jsx)("div", {
    className: v.group,
    children: (0, r.jsx)(c.hjN, {
      children: T
    })
  })
}