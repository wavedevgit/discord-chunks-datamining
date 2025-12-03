/** Chunk was on web.js **/
/** chunk id: 287490, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./953529.js"), require("./49124.js"), require("./539854.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk922699 = require("./922699.js"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, Chunk667344.Qb)(), {
    experiments: n,
    overridesInfo: a
  } = (0, Chunk493075.sI)(), o = Chunk473749.useMemo(() => S({}, require, module), [require, module]), s = Chunk473749.useMemo(() => S({}, Chunk392711, exports), [Chunk392711, exports]), [c, u] = Chunk473749.useState(""), d = (0, Chunk878209.Ro)((0, Chunk878209.Tc)((0, Chunk878209.Cg)(o), Chunk442837), Chunk922699);
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsx)(Chunk481060.E1j, {
      placeholder: "Search experiments",
      query: Chunk922699,
      onChange: Chunk492435,
      onClear: () => Chunk492435("")
    }), Chunk389494.length > 0 ? Chunk389494.map(e => {
      let t = "guild" === e.experiment.kind ? A : T;
      return (0, r.jsx)(t, {
        experiment: e.experiment,
        experimentId: e.id,
        overrideInfo: s[e.id],
        defaultOpen: null != s[e.id]
      }, e.id)
    }) : (0, Chunk54381.jsx)("div", {
      className: Chunk758746.emptyState,
      children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function T(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: a,
    defaultOpen: p
  } = e, [m, g] = i.useState(p), [b, v] = i.useState(false), S = i.useCallback(() => {
    g(e => !e)
  }, []), I = (0, s.e7)([h.default], () => h.default.getId()), T = (0, _.qD)(t, I), A = (0, _.aN)(t, I), C = (0, s.Wu)([f.Z], () => o().sortBy(f.Z.getRecentExposures(y.xY.USER, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), N = i.useCallback(e => {
    (0, E.JG)((0, c.sZ)(n), () => {
      (0, l.showToast)({
        id: "experiment-link-copied",
        message: "Copied experiment link",
        type: l.ToastType.SUCCESS
      }), e.preventDefault(), e.stopPropagation()
    })
  }, [n]), P = (0, r.jsx)(l.kL8, {
    "aria-label": "Toggle visibility",
    onClick: S,
    children: (0, r.jsxs)(l.Text, {
      variant: "text-md/medium",
      className: O.title,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)(l.Kqy, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          children: [t.title, " ", E.wS && (0, r.jsx)(l.P3F, {
            onClick: N,
            children: (0, r.jsx)(l.xPt, {
              size: "xs"
            })
          })]
        }), (0, r.jsx)(l.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: O.experimentDate,
        children: "User"
      })]
    })
  });
  if (!m) return (0, r.jsx)("div", {
    className: O.group,
    children: P
  });
  let R = "";
  return R = t.system === u.I.LEGACY ? "Currently assigned to bucket ".concat(null != T ? T : y.NZ.NOT_ELIGIBLE) : null != T ? "Currently assigned to variant ".concat(T) : "Currently unassigned", (0, r.jsxs)("div", {
    className: O.group,
    children: [P, (0, r.jsx)("div", {
      children: (0, r.jsx)(d.y, {
        label: t.system === u.I.LEGACY ? "Bucket Override" : "Variant Override",
        description: R,
        experiment: t,
        experimentId: n,
        overrideInfo: a
      })
    }), (0, r.jsx)("div", {
      className: O.description,
      children: null == A ? (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), b ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.debugTitle,
        children: "Server Descriptor"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.pre,
        children: null == A ? "None" : JSON.stringify(A, true, 2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.debugTitle,
        children: "Override Descriptor"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.pre,
        children: (null == a ? true : a.originalDescriptor) == null ? "None" : JSON.stringify(a.originalDescriptor, true, 2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.debugTitle,
        children: "Recent Exposures"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.pre,
        children: 0 === C.length ? "None" : C.join("\n")
      })]
    }) : (0, r.jsx)("div", {
      className: O.debugTitle,
      children: (0, r.jsx)(l.Avr, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => v(true)
      })
    }), (0, r.jsx)(l.izJ, {
      className: O.divider
    })]
  })
}

function A(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: a
  } = e, [c, u] = i.useState(null != a), [p, _] = i.useState(false), m = i.useCallback(() => {
    u(e => !e)
  }, []), h = (0, s.e7)([f.Z], () => f.Z.getLoadedGuildExperiment(n)), E = (0, s.Wu)([f.Z], () => o().sortBy(f.Z.getRecentExposures(y.xY.GUILD, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), [b, v] = (0, s.Wu)([g.Z, f.Z], () => {
    let e = o().sortBy(g.Z.getGuildsArray(), e => e.name.toLowerCase()),
      t = {},
      r = [];
    for (let a of e) {
      var i;
      let e = f.Z.getGuildExperimentDescriptor(n, a.id),
        o = null != (i = null == e ? true : e.bucket) ? i : y.NZ.NOT_ELIGIBLE;
      o in t || (t[o] = 0), t[o]++, r.push("".concat(a.name, ": ").concat(o))
    }
    let a = o()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [r.join("\n"), a]
  }), S = (0, r.jsx)(l.P3F, {
    onClick: m,
    children: (0, r.jsxs)(l.Text, {
      variant: "text-md/medium",
      className: O.title,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          children: t.title
        }), (0, r.jsx)(l.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: O.experimentDate,
        children: "Guild"
      })]
    })
  });
  return c ? (0, r.jsxs)("div", {
    className: O.group,
    children: [S, (0, r.jsx)(d.y, {
      label: "Bucket Override",
      description: "Current Assignments: ".concat(v),
      experiment: t,
      experimentId: n,
      overrideInfo: a
    }), (0, r.jsx)("div", {
      className: O.description,
      children: null == h ? (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), p ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.debugTitle,
        children: "Guild Assignments"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.pre,
        children: b
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.debugTitle,
        children: "Server Descriptor"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.pre,
        children: null == h ? "None" : JSON.stringify(h, true, 2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.debugTitle,
        children: "Override Descriptor"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.pre,
        children: (null == a ? true : a.originalDescriptor) == null ? "None" : JSON.stringify(a.originalDescriptor, true, 2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.debugTitle,
        children: "Recent Exposures"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.pre,
        children: 0 === E.length ? "None" : E.join("\n")
      })]
    }) : (0, r.jsx)("div", {
      className: O.debugTitle,
      children: (0, r.jsx)(l.Avr, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => _(true)
      })
    }), (0, r.jsx)(l.izJ, {
      className: O.divider
    })]
  }) : (0, r.jsx)("div", {
    className: O.group,
    children: S
  })
}