/** Chunk was on web.js **/
/** chunk id: 887580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk922699 = require("./922699.js"),
  Chunk492435 = require("./492435.js"),
  Chunk389494 = require("./389494.jsx"),
  Chunk667344 = require("./667344.js"),
  Chunk453032 = require("./453032.js"),
  Chunk493075 = require("./493075.js"),
  Chunk987338 = require("./987338.js"),
  Chunk941189 = require("./941189.js");

function E(e) {
  let {
    url: t
  } = e, n = i.useCallback(() => {
    (0, c.JG)(t, () => (0, o.showToast)({
      id: "experiment-link-copied",
      message: "Copied experiment link",
      type: o.ToastType.SUCCESS
    }))
  }, [t]);
  return (0, r.jsx)(o.P3F, {
    className: g.copyLinkButton,
    onClick: n,
    children: (0, r.jsx)(o.xPt, {
      size: "sm",
      color: "currentColor"
    })
  })
}

function b(e) {
  let {
    url: t
  } = e, n = (0, u.q3)(t), c = (0, u.XV)(t), {
    experiments: b,
    overridesInfo: y
  } = (0, m.sI)(), {
    experiments: O,
    overridesInfo: v
  } = (0, p.Qb)(), S = i.useMemo(() => null == n ? null : null != b[n] ? b[n] : O[n], [b, O, n]), I = i.useMemo(() => {
    if (null == n);
    else if (null != y[n]) return y[n];
    else if (null != v[n]) return v[n]
  }, [y, v, n]), T = s.default.getId(), A = (0, _.aN)(S, T), C = i.useMemo(() => (0, u.rB)(S, A), [A, S]), N = (0, a.e7)([l.default], () => {
    let e = l.default.getCurrentUser();
    return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
  });
  if (null == n || null == S) return null;
  let P = (0, u.ak)(S).find(e => e.value === c),
    R = null != P ? h.su.EXPERIMENT_TREATMENT : h.su.EXPERIMENT,
    D = null != I && null != P && I.variantId === P.value,
    w = () => {
      null != P && (D ? (0, d.rX)(S.system, n, null) : (0, d.rX)(S.system, n, P.value))
    },
    x = (0, r.jsx)(E, {
      url: t
    }),
    L = null;
  return (R === h.su.EXPERIMENT_TREATMENT && null != P ? L = (0, r.jsx)(o.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    children: P.label
  }) : null != A && (L = (0, r.jsxs)(o.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    children: ["Server Config: ", C]
  })), N) ? (0, r.jsxs)("div", {
    className: g.root,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: g.header,
        children: (0, r.jsxs)(o.Kqy, {
          direction: "horizontal",
          justify: "space-between",
          children: [(0, r.jsxs)(o.Kqy, {
            direction: "horizontal",
            gap: 8,
            children: [(0, r.jsx)(o.Che, {
              size: "lg"
            }), (0, r.jsxs)(o.Kqy, {
              direction: "vertical",
              gap: 0,
              children: [(0, r.jsx)(o.Text, {
                variant: "text-md/semibold",
                children: S.title
              }), L]
            })]
          }), x]
        })
      })
    }), null != P ? (0, r.jsx)(o.Button, {
      fullWidth: true,
      variant: D ? "critical-primary" : "primary",
      text: D ? "Clear Treatment ".concat(P.value) : "Apply Treatment ".concat(P.value),
      onClick: w
    }) : (0, r.jsx)("div", {
      className: g.experimentOverride,
      children: (0, r.jsx)(f.y, {
        experiment: S,
        experimentId: n,
        overrideInfo: I
      })
    })]
  }) : null
}