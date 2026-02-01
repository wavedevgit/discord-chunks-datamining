/** Chunk was on 42402 **/
/** chunk id: 640068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js"), require("./228524.js"), require("./457529.js"), require("./321073.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
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

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function _() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, h.op)(), {
    experiments: n,
    overridesInfo: i
  } = (0, f.hI)(), s = l.useMemo(() => x({}, n, e), [n, e]), a = l.useMemo(() => x({}, i, t), [i, t]), [c, u] = l.useState(""), d = (0, y.oC)((0, y.R3)((0, y.Fm)(s), a), c);
  return (0, r.jsxs)("div", {
    "data-mtctest-ignore": "true",
    children: [(0, r.jsx)(o.IWV, {
      placeholder: "Search experiments",
      query: c,
      onChange: u,
      onClear: () => u("")
    }), d.length > 0 ? d.map(e => {
      let t = "guild" === e.experiment.kind ? E : v;
      return (0, r.jsx)(t, {
        experiment: e.experiment,
        experimentId: e.id,
        overrideInfo: a[e.id],
        defaultOpen: null != a[e.id]
      }, e.id)
    }) : (0, r.jsx)("div", {
      className: j.p$,
      children: (0, r.jsx)(o.Heading, {
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
    overrideInfo: i,
    defaultOpen: h
  } = e, [f, b] = l.useState(h), [y, x] = l.useState(false), _ = l.useCallback(() => {
    b(e => !e)
  }, []), v = (0, a.bG)([m.default], () => m.default.getId()), E = (0, g.iN)(t, v), C = (0, g.Fm)(t, v), S = (0, a.yK)([p.A], () => s().sortBy(p.A.getRecentExposures(O.Vh.USER, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), I = l.useCallback(e => {
    (0, A.C)((0, c.yA)(n), () => {
      (0, o.showToast)({
        id: "experiment-link-copied",
        message: "Copied experiment link",
        type: o.ToastType.SUCCESS
      }), e.preventDefault(), e.stopPropagation()
    })
  }, [n]), N = (0, r.jsx)(o.sqX, {
    "aria-label": "Toggle visibility",
    onClick: _,
    children: (0, r.jsxs)(o.Text, {
      variant: "text-md/medium",
      className: j.DD,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)(o.BJc, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          children: [t.title, " ", A.p5 && (0, r.jsx)(o.DUT, {
            onClick: I,
            children: (0, r.jsx)(o.qYV, {
              size: "xs"
            })
          })]
        }), (0, r.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: j.km,
        children: "User"
      })]
    })
  });
  if (!f) return (0, r.jsx)("div", {
    className: j.Os,
    children: N
  });
  let T = "";
  return T = t.system === u.l5.LEGACY ? "Currently assigned to bucket ".concat(null != E ? E : O.RE.NOT_ELIGIBLE) : null != E ? "Currently assigned to variant ".concat(E) : "Currently unassigned", (0, r.jsxs)("div", {
    className: j.Os,
    children: [N, (0, r.jsx)("div", {
      children: (0, r.jsx)(d.g, {
        label: t.system === u.l5.LEGACY ? "Bucket Override" : "Variant Override",
        description: T,
        experiment: t,
        experimentId: n,
        overrideInfo: i
      })
    }), (0, r.jsx)("div", {
      className: j.h_,
      children: null == C ? (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), y ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: j.id,
        children: "Server Descriptor"
      }), (0, r.jsx)(o.Text, {
        variant: "code",
        className: j.AS,
        children: null == C ? "None" : JSON.stringify(C, true, 2)
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: j.id,
        children: "Override Descriptor"
      }), (0, r.jsx)(o.Text, {
        variant: "code",
        className: j.AS,
        children: (null == i ? true : i.originalDescriptor) == null ? "None" : JSON.stringify(i.originalDescriptor, true, 2)
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: j.id,
        children: "Recent Exposures"
      }), (0, r.jsx)(o.Text, {
        variant: "code",
        className: j.AS,
        children: 0 === S.length ? "None" : S.join("\n")
      })]
    }) : (0, r.jsx)("div", {
      className: j.id,
      children: (0, r.jsx)(o.QWc, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => x(true)
      })
    }), (0, r.jsx)(o.cGx, {
      className: j.yF
    })]
  })
}

function E(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: i
  } = e, [c, u] = l.useState(null != i), [h, g] = l.useState(false), f = l.useCallback(() => {
    u(e => !e)
  }, []), m = (0, a.bG)([p.A], () => p.A.getLoadedGuildExperiment(n)), A = (0, a.yK)([p.A], () => s().sortBy(p.A.getRecentExposures(O.Vh.GUILD, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), [y, x] = (0, a.yK)([b.A, p.A], () => {
    let e = s().sortBy(b.A.getGuildsArray(), e => e.name.toLowerCase()),
      t = {},
      r = [];
    for (let i of e) {
      var l;
      let e = p.A.getGuildExperimentDescriptor(n, i.id),
        s = null != (l = null == e ? true : e.bucket) ? l : O.RE.NOT_ELIGIBLE;
      s in t || (t[s] = 0), t[s]++, r.push("".concat(i.name, ": ").concat(s))
    }
    let i = s()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [r.join("\n"), i]
  }), _ = (0, r.jsx)(o.DUT, {
    onClick: f,
    children: (0, r.jsxs)(o.Text, {
      variant: "text-md/medium",
      className: j.DD,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          children: t.title
        }), (0, r.jsx)(o.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: j.km,
        children: "Guild"
      })]
    })
  });
  return c ? (0, r.jsxs)("div", {
    className: j.Os,
    children: [_, (0, r.jsx)(d.g, {
      label: "Bucket Override",
      description: "Current Assignments: ".concat(x),
      experiment: t,
      experimentId: n,
      overrideInfo: i
    }), (0, r.jsx)("div", {
      className: j.h_,
      children: null == m ? (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), h ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: j.id,
        children: "Guild Assignments"
      }), (0, r.jsx)(o.Text, {
        variant: "code",
        className: j.AS,
        children: y
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: j.id,
        children: "Server Descriptor"
      }), (0, r.jsx)(o.Text, {
        variant: "code",
        className: j.AS,
        children: null == m ? "None" : JSON.stringify(m, true, 2)
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: j.id,
        children: "Override Descriptor"
      }), (0, r.jsx)(o.Text, {
        variant: "code",
        className: j.AS,
        children: (null == i ? true : i.originalDescriptor) == null ? "None" : JSON.stringify(i.originalDescriptor, true, 2)
      }), (0, r.jsx)(o.Text, {
        variant: "text-lg/medium",
        className: j.id,
        children: "Recent Exposures"
      }), (0, r.jsx)(o.Text, {
        variant: "code",
        className: j.AS,
        children: 0 === A.length ? "None" : A.join("\n")
      })]
    }) : (0, r.jsx)("div", {
      className: j.id,
      children: (0, r.jsx)(o.QWc, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => g(true)
      })
    }), (0, r.jsx)(o.cGx, {
      className: j.yF
    })]
  }) : (0, r.jsx)("div", {
    className: j.Os,
    children: _
  })
}