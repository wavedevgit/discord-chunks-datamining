/** Chunk was on 82575 **/
/** chunk id: 640068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./228524.js"), require("./457529.js"), require("./321073.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  r = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk100392 = require("./100392.js"),
  Chunk102609 = require("./102609.js"),
  Chunk271478 = require("./271478.jsx"),
  Chunk49463 = require("./49463.js"),
  Chunk386976 = require("./386976.js"),
  Chunk257433 = require("./257433.js"),
  Chunk32523 = require("./32523.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk957565 = require("./957565.js"),
  Chunk222735 = require("./222735.js"),
  Chunk688151 = require("./688151.js"),
  Chunk612422 = require("./612422.js");

function E(e) {
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

function f() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, h.op)(), {
    experiments: n,
    overridesInfo: l
  } = (0, p.hI)(), r = s.useMemo(() => E({}, n, e), [n, e]), a = s.useMemo(() => E({}, l, t), [l, t]), [c, d] = s.useState(""), u = (0, b.oC)((0, b.R3)((0, b.Fm)(r), a), c);
  return (0, i.jsxs)("div", {
    "data-mtctest-ignore": "true",
    children: [(0, i.jsx)(o.IWV, {
      placeholder: "Search experiments",
      query: c,
      onChange: d,
      onClear: () => d("")
    }), u.length > 0 ? u.map(e => {
      let t = "guild" === e.experiment.kind ? T : v;
      return (0, i.jsx)(t, {
        experiment: e.experiment,
        experimentId: e.id,
        overrideInfo: a[e.id],
        defaultOpen: null != a[e.id]
      }, e.id)
    }) : (0, i.jsx)("div", {
      className: S.p$,
      children: (0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function v(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: l,
    defaultOpen: h
  } = e, [p, m] = s.useState(h), [b, E] = s.useState(false), f = s.useCallback(() => {
    m(e => !e)
  }, []), v = (0, a.bG)([A.default], () => A.default.getId()), T = (0, x.iN)(t, v), C = (0, x.Fm)(t, v), y = (0, a.yK)([g.A], () => r().sortBy(g.A.getRecentExposures(O.Vh.USER, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), N = s.useCallback(e => {
    (0, j.C)((0, c.yA)(n), () => {
      (0, o.showToast)({
        id: "experiment-link-copied",
        message: "Copied experiment link",
        type: o.ToastType.SUCCESS
      }), e.preventDefault(), e.stopPropagation()
    })
  }, [n]), I = (0, i.jsx)(o.sqX, {
    "aria-label": "Toggle visibility",
    onClick: f,
    children: (0, i.jsxs)(o.Text, {
      variant: "text-md/medium",
      className: S.DD,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsxs)(o.BJc, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          children: [t.title, " ", j.p5 && (0, i.jsx)(o.DUT, {
            onClick: N,
            children: (0, i.jsx)(o.qYV, {
              size: "xs"
            })
          })]
        }), (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, i.jsx)("span", {
        className: S.km,
        children: "User"
      })]
    })
  });
  if (!p) return (0, i.jsx)("div", {
    className: S.Os,
    children: I
  });
  let _ = "";
  return _ = t.system === d.l5.LEGACY ? "Currently assigned to bucket ".concat(null != T ? T : O.RE.NOT_ELIGIBLE) : null != T ? "Currently assigned to variant ".concat(T) : "Currently unassigned", (0, i.jsxs)("div", {
    className: S.Os,
    children: [I, (0, i.jsx)("div", {
      children: (0, i.jsx)(u.g, {
        label: t.system === d.l5.LEGACY ? "Bucket Override" : "Variant Override",
        description: _,
        experiment: t,
        experimentId: n,
        overrideInfo: l
      })
    }), (0, i.jsx)("div", {
      className: S.h_,
      children: null == C ? (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), b ? (0, i.jsxs)("div", {
      children: [(0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: S.id,
        children: "Server Descriptor"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: S.AS,
        children: null == C ? "None" : JSON.stringify(C, true, 2)
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: S.id,
        children: "Override Descriptor"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: S.AS,
        children: (null == l ? true : l.originalDescriptor) == null ? "None" : JSON.stringify(l.originalDescriptor, true, 2)
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: S.id,
        children: "Recent Exposures"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: S.AS,
        children: 0 === y.length ? "None" : y.join("\n")
      })]
    }) : (0, i.jsx)("div", {
      className: S.id,
      children: (0, i.jsx)(o.QWc, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => E(true)
      })
    }), (0, i.jsx)(o.cGx, {
      className: S.yF
    })]
  })
}

function T(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: l
  } = e, [c, d] = s.useState(null != l), [h, x] = s.useState(false), p = s.useCallback(() => {
    d(e => !e)
  }, []), A = (0, a.bG)([g.A], () => g.A.getLoadedGuildExperiment(n)), j = (0, a.yK)([g.A], () => r().sortBy(g.A.getRecentExposures(O.Vh.GUILD, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), [b, E] = (0, a.yK)([m.A, g.A], () => {
    let e = r().sortBy(m.A.getGuildsArray(), e => e.name.toLowerCase()),
      t = {},
      i = [];
    for (let l of e) {
      var s;
      let e = g.A.getGuildExperimentDescriptor(n, l.id),
        r = null != (s = null == e ? true : e.bucket) ? s : O.RE.NOT_ELIGIBLE;
      r in t || (t[r] = 0), t[r]++, i.push("".concat(l.name, ": ").concat(r))
    }
    let l = r()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [i.join("\n"), l]
  }), f = (0, i.jsx)(o.DUT, {
    onClick: p,
    children: (0, i.jsxs)(o.Text, {
      variant: "text-md/medium",
      className: S.DD,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)("span", {
          children: t.title
        }), (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, i.jsx)("span", {
        className: S.km,
        children: "Guild"
      })]
    })
  });
  return c ? (0, i.jsxs)("div", {
    className: S.Os,
    children: [f, (0, i.jsx)(u.g, {
      label: "Bucket Override",
      description: "Current Assignments: ".concat(E),
      experiment: t,
      experimentId: n,
      overrideInfo: l
    }), (0, i.jsx)("div", {
      className: S.h_,
      children: null == A ? (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), h ? (0, i.jsxs)("div", {
      children: [(0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: S.id,
        children: "Guild Assignments"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: S.AS,
        children: b
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: S.id,
        children: "Server Descriptor"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: S.AS,
        children: null == A ? "None" : JSON.stringify(A, true, 2)
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: S.id,
        children: "Override Descriptor"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: S.AS,
        children: (null == l ? true : l.originalDescriptor) == null ? "None" : JSON.stringify(l.originalDescriptor, true, 2)
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: S.id,
        children: "Recent Exposures"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: S.AS,
        children: 0 === j.length ? "None" : j.join("\n")
      })]
    }) : (0, i.jsx)("div", {
      className: S.id,
      children: (0, i.jsx)(o.QWc, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => x(true)
      })
    }), (0, i.jsx)(o.cGx, {
      className: S.yF
    })]
  }) : (0, i.jsx)("div", {
    className: S.Os,
    children: f
  })
}