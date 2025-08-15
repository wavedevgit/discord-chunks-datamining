/** Chunk was on 30202 **/
/** chunk id: 287490, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./953529.js"), require("./49124.js"), require("./539854.js"), require("./642613.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function v() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, Chunk667344.Q)(), {
    experiments: n,
    overridesInfo: s
  } = (0, Chunk493075.s)(), a = Chunk73800.useMemo(() => O({}, require, module), [require, module]), l = Chunk73800.useMemo(() => O({}, Chunk392711, exports), [Chunk392711, exports]), [o, d] = Chunk73800.useState(""), u = (0, Chunk878209.Ro)((0, Chunk878209.Tc)((0, Chunk878209.Cg)(a), Chunk442837), Chunk755721);
  return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
    tag: Chunk481060.RB0.H1,
    title: "Experiments",
    children: [(0, Chunk255367.jsx)(Chunk481060.E1j, {
      query: Chunk755721,
      onChange: Chunk887580,
      onClear: () => Chunk887580("")
    }), Chunk492435.length > 0 ? Chunk492435.map(e => {
      let t = "guild" === e.experiment.kind ? T : S;
      return (0, i.jsx)(t, {
        experiment: e.experiment,
        experimentId: e.id,
        overrideInfo: l[e.id],
        defaultOpen: null != l[e.id]
      }, e.id)
    }) : (0, Chunk255367.jsx)("div", {
      className: Chunk758746.emptyState,
      children: (0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function S(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: s,
    defaultOpen: g
  } = e, [f, x] = r.useState(g), [j, O] = r.useState(false), v = r.useCallback(() => {
    x(e => !e)
  }, []), S = (0, l.e7)([b.default], () => b.default.getId()), T = (0, h.q)(t, S), N = (0, h.a)(t, S), I = (0, l.Wu)([p.Z], () => a().sortBy(p.Z.getRecentExposures(E.xY.USER, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), y = r.useCallback(e => {
    (0, _.JG)((0, d.sZ)(n), () => {
      (0, c.showToast)({
        id: "experiment-link-copied",
        message: "Copied experiment link",
        type: c.ToastType.SUCCESS
      }), e.preventDefault(), e.stopPropagation()
    })
  }, [n]), A = (0, i.jsx)(c.kL8, {
    "aria-label": "Toggle visibility",
    onClick: v,
    children: (0, i.jsxs)(c.vwX, {
      tag: c.RB0.H3,
      className: C.title,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsxs)(c.Kqy, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          children: [t.title, " ", _.wS && (0, i.jsx)(c.P3F, {
            onClick: y,
            children: (0, i.jsx)(c.xPt, {
              size: "xs"
            })
          })]
        }), (0, i.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, i.jsx)("span", {
        className: C.experimentDate,
        children: "User"
      })]
    })
  });
  if (!f) return (0, i.jsx)("div", {
    className: C.group,
    children: (0, i.jsx)(c.hjN, {
      children: A
    })
  });
  let P = "";
  return P = t.system === u.I.LEGACY ? "Currently assigned to bucket ".concat(null != T ? T : E.NZ.NOT_ELIGIBLE) : null != T ? "Currently assigned to variant ".concat(T) : "Currently unassigned", (0, i.jsxs)("div", {
    className: C.group,
    children: [(0, i.jsxs)(c.hjN, {
      children: [A, (0, i.jsx)("div", {
        children: (0, i.jsx)(c.xJW, {
          title: t.system === u.I.LEGACY ? "Bucket Override" : "Variant Override",
          children: (0, i.jsx)(m.y, {
            experiment: t,
            experimentId: n,
            overrideInfo: s
          })
        })
      }), (0, i.jsxs)("div", {
        className: C.description,
        children: [(0, i.jsx)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: P
        }), null == N ? (0, i.jsx)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), j ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(c.vwX, {
          tag: "h5",
          className: C.debugTitle,
          children: "Server Descriptor"
        }), (0, i.jsx)(c.Text, {
          variant: "code",
          className: C.pre,
          children: null == N ? "None" : JSON.stringify(N, true, 2)
        }), (0, i.jsx)(c.vwX, {
          tag: "h5",
          className: C.debugTitle,
          children: "Override Descriptor"
        }), (0, i.jsx)(c.Text, {
          variant: "code",
          className: C.pre,
          children: (null == s ? true : s.originalDescriptor) == null ? "None" : JSON.stringify(s.originalDescriptor, true, 2)
        }), (0, i.jsx)(c.vwX, {
          tag: "h5",
          className: C.debugTitle,
          children: "Recent Exposures"
        }), (0, i.jsx)(c.Text, {
          variant: "code",
          className: C.pre,
          children: 0 === I.length ? "None" : I.join("\n")
        })]
      }) : (0, i.jsx)(o.zx, {
        className: C.debugButton,
        size: o.zx.Sizes.SMALL,
        look: o.zx.Looks.BLANK,
        onClick: () => O(true),
        children: "More Details \xbb"
      })]
    }), (0, i.jsx)(c.$i$, {
      className: C.divider
    })]
  })
}

function T(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: s
  } = e, [d, u] = r.useState(null != s), [g, h] = r.useState(false), f = r.useCallback(() => {
    u(e => !e)
  }, []), b = (0, l.e7)([p.Z], () => p.Z.getLoadedGuildExperiment(n)), _ = (0, l.Wu)([p.Z], () => a().sortBy(p.Z.getRecentExposures(E.xY.GUILD, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), [j, O] = (0, l.Wu)([x.Z, p.Z], () => {
    let e = a().sortBy(x.Z.getGuildsArray(), e => e.name.toLowerCase()),
      t = {},
      i = [];
    for (let s of e) {
      var r;
      let e = p.Z.getGuildExperimentDescriptor(n, s.id),
        a = null != (r = null == e ? true : e.bucket) ? r : E.NZ.NOT_ELIGIBLE;
      a in t || (t[a] = 0), t[a]++, i.push("".concat(s.name, ": ").concat(a))
    }
    let s = a()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [i.join("\n"), s]
  }), v = (0, i.jsx)(c.P3F, {
    onClick: f,
    children: (0, i.jsxs)(c.vwX, {
      tag: c.RB0.H3,
      className: C.title,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)("span", {
          children: t.title
        }), (0, i.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, i.jsx)("span", {
        className: C.experimentDate,
        children: "Guild"
      })]
    })
  });
  return d ? (0, i.jsxs)("div", {
    className: C.group,
    children: [(0, i.jsxs)(c.hjN, {
      children: [v, (0, i.jsx)("div", {
        children: (0, i.jsx)(c.xJW, {
          title: "Bucket Override",
          children: (0, i.jsx)(m.y, {
            experiment: t,
            experimentId: n,
            overrideInfo: s
          })
        })
      }), (0, i.jsxs)("div", {
        className: C.description,
        children: [(0, i.jsxs)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: ["Current Assignments: ", O]
        }), null == b ? (0, i.jsx)(c.R94, {
          type: c.geA.DESCRIPTION,
          children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
        }) : null]
      }), g ? (0, i.jsxs)("div", {
        children: [(0, i.jsx)(c.vwX, {
          tag: "h5",
          className: C.debugTitle,
          children: "Guild Assignments"
        }), (0, i.jsx)(c.Text, {
          variant: "code",
          className: C.pre,
          children: j
        }), (0, i.jsx)(c.vwX, {
          tag: "h5",
          className: C.debugTitle,
          children: "Server Descriptor"
        }), (0, i.jsx)(c.Text, {
          variant: "code",
          className: C.pre,
          children: null == b ? "None" : JSON.stringify(b, true, 2)
        }), (0, i.jsx)(c.vwX, {
          tag: "h5",
          className: C.debugTitle,
          children: "Override Descriptor"
        }), (0, i.jsx)(c.Text, {
          variant: "code",
          className: C.pre,
          children: (null == s ? true : s.originalDescriptor) == null ? "None" : JSON.stringify(s.originalDescriptor, true, 2)
        }), (0, i.jsx)(c.vwX, {
          tag: "h5",
          className: C.debugTitle,
          children: "Recent Exposures"
        }), (0, i.jsx)(c.Text, {
          variant: "code",
          className: C.pre,
          children: 0 === _.length ? "None" : _.join("\n")
        })]
      }) : (0, i.jsx)(o.zx, {
        className: C.debugButton,
        size: o.zx.Sizes.SMALL,
        look: o.zx.Looks.BLANK,
        onClick: () => h(true),
        children: "More Details \xbb"
      })]
    }), (0, i.jsx)(c.$i$, {
      className: C.divider
    })]
  }) : (0, i.jsx)("div", {
    className: C.group,
    children: (0, i.jsx)(c.hjN, {
      children: v
    })
  })
}