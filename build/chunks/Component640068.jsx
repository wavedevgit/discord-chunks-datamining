/** Chunk was on web.js **/
/** chunk id: 640068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
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

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, p.op)(), {
    experiments: n,
    overridesInfo: a
  } = (0, h.hI)(), s = i.useMemo(() => v({}, n, e), [n, e]), o = i.useMemo(() => v({}, a, t), [a, t]), [c, u] = i.useState(""), d = (0, b.oC)((0, b.R3)((0, b.Fm)(s), o), c);
  return (0, r.jsxs)("div", {
    "data-mtctest-ignore": "true",
    children: [(0, r.jsx)(l.IWV, {
      placeholder: "Search experiments",
      query: c,
      onChange: u,
      onClear: () => u("")
    }), d.length > 0 ? d.map(e => {
      let t = "guild" === e.experiment.kind ? T : I;
      return (0, r.jsx)(t, {
        experiment: e.experiment,
        experimentId: e.id,
        overrideInfo: o[e.id],
        defaultOpen: null != o[e.id]
      }, e.id)
    }) : (0, r.jsx)("div", {
      className: O.p$,
      children: (0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        children: "No Experiments Found"
      })
    })]
  })
}

function I(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: a,
    defaultOpen: p
  } = e, [h, g] = i.useState(p), [b, A] = i.useState(false), v = i.useCallback(() => {
    g(e => !e)
  }, []), S = (0, o.bG)([m.default], () => m.default.getId()), I = (0, _.iN)(t, S), T = (0, _.Fm)(t, S), C = (0, o.yK)([f.A], () => s().sortBy(f.A.getRecentExposures(y.Vh.USER, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), N = i.useCallback(e => {
    (0, E.C)((0, c.yA)(n), () => {
      (0, l.showToast)({
        id: "experiment-link-copied",
        message: "Copied experiment link",
        type: l.ToastType.SUCCESS
      }), e.preventDefault(), e.stopPropagation()
    })
  }, [n]), R = (0, r.jsx)(l.sqX, {
    "aria-label": "Toggle visibility",
    onClick: v,
    children: (0, r.jsxs)(l.Text, {
      variant: "text-md/medium",
      className: O.DD,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsxs)(l.BJc, {
          direction: "horizontal",
          align: "center",
          gap: 4,
          children: [t.title, " ", E.p5 && (0, r.jsx)(l.DUT, {
            onClick: N,
            children: (0, r.jsx)(l.qYV, {
              size: "xs"
            })
          })]
        }), (0, r.jsx)(l.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: O.km,
        children: "User"
      })]
    })
  });
  if (!h) return (0, r.jsx)("div", {
    className: O.Os,
    children: R
  });
  let w = "";
  return w = t.system === u.l5.LEGACY ? "Currently assigned to bucket ".concat(null != I ? I : y.RE.NOT_ELIGIBLE) : null != I ? "Currently assigned to variant ".concat(I) : "Currently unassigned", (0, r.jsxs)("div", {
    className: O.Os,
    children: [R, (0, r.jsx)("div", {
      children: (0, r.jsx)(d.g, {
        label: t.system === u.l5.LEGACY ? "Bucket Override" : "Variant Override",
        description: w,
        experiment: t,
        experimentId: n,
        overrideInfo: a
      })
    }), (0, r.jsx)("div", {
      className: O.h_,
      children: null == T ? (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), b ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.id,
        children: "Server Descriptor"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.AS,
        children: null == T ? "None" : JSON.stringify(T, true, 2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.id,
        children: "Override Descriptor"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.AS,
        children: (null == a ? true : a.originalDescriptor) == null ? "None" : JSON.stringify(a.originalDescriptor, true, 2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.id,
        children: "Recent Exposures"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.AS,
        children: 0 === C.length ? "None" : C.join("\n")
      })]
    }) : (0, r.jsx)("div", {
      className: O.id,
      children: (0, r.jsx)(l.QWc, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => A(true)
      })
    }), (0, r.jsx)(l.cGx, {
      className: O.yF
    })]
  })
}

function T(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: a
  } = e, [c, u] = i.useState(null != a), [p, _] = i.useState(false), h = i.useCallback(() => {
    u(e => !e)
  }, []), m = (0, o.bG)([f.A], () => f.A.getLoadedGuildExperiment(n)), E = (0, o.yK)([f.A], () => s().sortBy(f.A.getRecentExposures(y.Vh.GUILD, n), e => {
    let [t, n] = e;
    return -n
  }).map(e => {
    let [t, n] = e;
    return "".concat(new Date(n).toLocaleString(), " (").concat(t, ")")
  })), [b, A] = (0, o.yK)([g.A, f.A], () => {
    let e = s().sortBy(g.A.getGuildsArray(), e => e.name.toLowerCase()),
      t = {},
      r = [];
    for (let a of e) {
      var i;
      let e = f.A.getGuildExperimentDescriptor(n, a.id),
        s = null != (i = null == e ? true : e.bucket) ? i : y.RE.NOT_ELIGIBLE;
      s in t || (t[s] = 0), t[s]++, r.push("".concat(a.name, ": ").concat(s))
    }
    let a = s()(t).keys().map(Number).sort().map(e => "".concat(t[e], " guilds in bucket ").concat(e)).join(", ");
    return [r.join("\n"), a]
  }), v = (0, r.jsx)(l.DUT, {
    onClick: h,
    children: (0, r.jsxs)(l.Text, {
      variant: "text-md/medium",
      className: O.DD,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)("span", {
          children: t.title
        }), (0, r.jsx)(l.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (0, r.jsx)("span", {
        className: O.km,
        children: "Guild"
      })]
    })
  });
  return c ? (0, r.jsxs)("div", {
    className: O.Os,
    children: [v, (0, r.jsx)(d.g, {
      label: "Bucket Override",
      description: "Current Assignments: ".concat(A),
      experiment: t,
      experimentId: n,
      overrideInfo: a
    }), (0, r.jsx)("div", {
      className: O.h_,
      children: null == m ? (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
      }) : null
    }), p ? (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.id,
        children: "Guild Assignments"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.AS,
        children: b
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.id,
        children: "Server Descriptor"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.AS,
        children: null == m ? "None" : JSON.stringify(m, true, 2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.id,
        children: "Override Descriptor"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.AS,
        children: (null == a ? true : a.originalDescriptor) == null ? "None" : JSON.stringify(a.originalDescriptor, true, 2)
      }), (0, r.jsx)(l.Text, {
        variant: "text-lg/medium",
        className: O.id,
        children: "Recent Exposures"
      }), (0, r.jsx)(l.Text, {
        variant: "code",
        className: O.AS,
        children: 0 === E.length ? "None" : E.join("\n")
      })]
    }) : (0, r.jsx)("div", {
      className: O.id,
      children: (0, r.jsx)(l.QWc, {
        variant: "secondary",
        text: "More Details \xbb",
        onClick: () => _(true)
      })
    }), (0, r.jsx)(l.cGx, {
      className: O.yF
    })]
  }) : (0, r.jsx)("div", {
    className: O.Os,
    children: v
  })
}