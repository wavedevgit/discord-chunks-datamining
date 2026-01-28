/** Chunk was on 60449 **/
/** chunk id: 640068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function S(e) {
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
  } = (0, h.op)(), {
    experiments: n,
    overridesInfo: l
  } = (0, A.hI)(), r = s.useMemo(() => S({}, n, e), [n, e]), a = s.useMemo(() => S({}, l, t), [l, t]), [c, d] = s.useState(""), u = (0, O.oC)((0, O.R3)((0, O.Fm)(r), a), c);
  return (0, i.jsxs)("div", {
    "data-mtctest-ignore": "true",
    children: [(0, i.jsx)(o.IWV, {
      placeholder: "Search experiments",
      query: c,
      onChange: d,
      onClear: () => d("")
    }), u.length > 0 ? u.map(e => {
      let t = "guild" === e.experiment.kind ? f : C;
      return (0, i.jsx)(t, {
        experiment: e.experiment,
        experimentId: e.id,
        overrideInfo: a[e.id],
        defaultOpen: null != a[e.id]
      }, e.id)
    }) : (0, i.jsx)("div", {
      className: b.p$,
      children: (0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function C(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: l,
    defaultOpen: h
  } = e, [A, m] = s.useState(h), [O, S] = s.useState(false), v = s.useCallback(() => {
    m(e => !e)
  }, []), C = (0, a.bG)([p.default], () => p.default.getId()), f = (0, x.iN)(t, C), T = (0, x.Fm)(t, C), N = (0, a.yK)([g.A], () => r().sortBy(g.A.getRecentExposures(E.Vh.USER, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), _ = s.useCallback(e => {
    (0, j.C)((0, c.yA)(n), () => {
      (0, o.showToast)({
        id: "experiment-link-copied",
        message: "Copied experiment link",
        type: o.ToastType.SUCCESS
      }), e.preventDefault(), e.stopPropagation()
    })
  }, [n]), I = (0, i.jsx)(o.sqX, {
    "aria-label": "Toggle visibility",
    onClick: v,
    children: (0, i.jsxs)(o.Text, {
      variant: "text-md/medium",
      className: b.DD,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsxs)(o.BJc, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          children: [t.title, " ", j.p5 && (0, i.jsx)(o.DUT, {
            onClick: _,
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
        className: b.km,
        children: "User"
      })]
    })
  });
  if (!A) return (0, i.jsx)("div", {
    className: b.Os,
    children: I
  });
  let y = "";
  return y = t.system === d.l5.LEGACY ? "Currently assigned to bucket ".concat(null != f ? f : E.RE.NOT_ELIGIBLE) : null != f ? "Currently assigned to variant ".concat(f) : "Currently unassigned", (0, i.jsxs)("div", {
    className: b.Os,
    children: [I, (0, i.jsx)("div", {
      children: (0, i.jsx)(u.g, {
        label: t.system === d.l5.LEGACY ? "Bucket Override" : "Variant Override",
        description: y,
        experiment: t,
        experimentId: n,
        overrideInfo: l
      })
    }), (0, i.jsx)("div", {
      className: b.h_,
      children: null == T ? (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), O ? (0, i.jsxs)("div", {
      children: [(0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: b.id,
        children: "Server Descriptor"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: b.AS,
        children: null == T ? "None" : JSON.stringify(T, true, 2)
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: b.id,
        children: "Override Descriptor"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: b.AS,
        children: (null == l ? true : l.originalDescriptor) == null ? "None" : JSON.stringify(l.originalDescriptor, true, 2)
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: b.id,
        children: "Recent Exposures"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: b.AS,
        children: 0 === N.length ? "None" : N.join("\n")
      })]
    }) : (0, i.jsx)("div", {
      className: b.id,
      children: (0, i.jsx)(o.QWc, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => S(true)
      })
    }), (0, i.jsx)(o.cGx, {
      className: b.yF
    })]
  })
}

function f(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: l
  } = e, [c, d] = s.useState(null != l), [h, x] = s.useState(false), A = s.useCallback(() => {
    d(e => !e)
  }, []), p = (0, a.bG)([g.A], () => g.A.getLoadedGuildExperiment(n)), j = (0, a.yK)([g.A], () => r().sortBy(g.A.getRecentExposures(E.Vh.GUILD, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), [O, S] = (0, a.yK)([m.A, g.A], () => {
    let e = r().sortBy(m.A.getGuildsArray(), e => e.name.toLowerCase()),
      t = {},
      i = [];
    for (let l of e) {
      var s;
      let e = g.A.getGuildExperimentDescriptor(n, l.id),
        r = null != (s = null == e ? true : e.bucket) ? s : E.RE.NOT_ELIGIBLE;
      r in t || (t[r] = 0), t[r]++, i.push("".concat(l.name, ": ").concat(r))
    }
    let l = r()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [i.join("\n"), l]
  }), v = (0, i.jsx)(o.DUT, {
    onClick: A,
    children: (0, i.jsxs)(o.Text, {
      variant: "text-md/medium",
      className: b.DD,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)("span", {
          children: t.title
        }), (0, i.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, i.jsx)("span", {
        className: b.km,
        children: "Guild"
      })]
    })
  });
  return c ? (0, i.jsxs)("div", {
    className: b.Os,
    children: [v, (0, i.jsx)(u.g, {
      label: "Bucket Override",
      description: "Current Assignments: ".concat(S),
      experiment: t,
      experimentId: n,
      overrideInfo: l
    }), (0, i.jsx)("div", {
      className: b.h_,
      children: null == p ? (0, i.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), h ? (0, i.jsxs)("div", {
      children: [(0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: b.id,
        children: "Guild Assignments"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: b.AS,
        children: O
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: b.id,
        children: "Server Descriptor"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: b.AS,
        children: null == p ? "None" : JSON.stringify(p, true, 2)
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: b.id,
        children: "Override Descriptor"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: b.AS,
        children: (null == l ? true : l.originalDescriptor) == null ? "None" : JSON.stringify(l.originalDescriptor, true, 2)
      }), (0, i.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: b.id,
        children: "Recent Exposures"
      }), (0, i.jsx)(o.Text, {
        variant: "code",
        className: b.AS,
        children: 0 === j.length ? "None" : j.join("\n")
      })]
    }) : (0, i.jsx)("div", {
      className: b.id,
      children: (0, i.jsx)(o.QWc, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => x(true)
      })
    }), (0, i.jsx)(o.cGx, {
      className: b.yF
    })]
  }) : (0, i.jsx)("div", {
    className: b.Os,
    children: v
  })
}