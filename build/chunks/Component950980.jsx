/** Chunk was on web.js **/
/** chunk id: 950980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk957565 = require("./957565.js"),
  Chunk100392 = require("./100392.js"),
  Chunk102609 = require("./102609.js"),
  Chunk271478 = require("./271478.jsx"),
  Chunk386976 = require("./386976.js"),
  Chunk257433 = require("./257433.js"),
  Chunk32523 = require("./32523.js"),
  Chunk688151 = require("./688151.js"),
  Chunk717482 = require("./717482.js");

function E(e) {
  let {
    url: t
  } = e, n = i.useCallback(() => {
    (0, c.C)(t, () => (0, o.showToast)({
      id: "experiment-link-copied",
      message: "Copied experiment link",
      type: o.ToastType.SUCCESS
    }))
  }, [t]);
  return (0, r.jsx)(o.DUT, {
    className: g.wp,
    onClick: n,
    children: (0, r.jsx)(o.qYV, {
      size: "sm",
      color: "currentColor"
    })
  })
}

function y(e) {
  let {
    url: t
  } = e, n = (0, u.OL)(t), c = (0, u.Kb)(t), {
    experiments: y,
    overridesInfo: b
  } = (0, h.hI)(), {
    experiments: O,
    overridesInfo: v
  } = (0, p.op)(), A = i.useMemo(() => null == n ? null : null != y[n] ? y[n] : O[n], [y, O, n]), I = i.useMemo(() => {
    if (null == n);
    else if (null != b[n]) return b[n];
    else if (null != v[n]) return v[n]
  }, [b, v, n]), S = s.default.getId(), T = (0, _.Fm)(A, S), C = i.useMemo(() => (0, u.GI)(A, T), [T, A]), N = (0, a.bG)([l.default], () => {
    let e = l.default.getCurrentUser();
    return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
  });
  if (null == n || null == A) return null;
  let w = (0, u.hp)(A).find(e => e.value === c),
    R = null != w ? m.Ps.EXPERIMENT_TREATMENT : m.Ps.EXPERIMENT,
    P = null != I && null != w && I.variantId === w.value,
    D = () => {
      null != w && (P ? (0, d.t$)(A.system, n, null) : (0, d.t$)(A.system, n, w.value))
    },
    L = (0, r.jsx)(E, {
      url: t
    }),
    x = null;
  return (R === m.Ps.EXPERIMENT_TREATMENT && null != w ? x = (0, r.jsx)(o.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    children: w.label
  }) : null != T && (x = (0, r.jsxs)(o.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    children: ["Server Config: ", C]
  })), N) ? (0, r.jsxs)("div", {
    className: g.zr,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: g.wx,
        children: (0, r.jsxs)(o.BJc, {
          direction: "horizontal",
          justify: "space-between",
          children: [(0, r.jsxs)(o.BJc, {
            direction: "horizontal",
            gap: 8,
            children: [(0, r.jsx)(o.gR_, {
              size: "lg"
            }), (0, r.jsxs)(o.BJc, {
              direction: "vertical",
              gap: 0,
              children: [(0, r.jsx)(o.Text, {
                variant: "text-md/semibold",
                children: A.title
              }), x]
            })]
          }), L]
        })
      })
    }), null != w ? (0, r.jsx)(o.Button, {
      fullWidth: true,
      variant: P ? "critical-primary" : "primary",
      text: P ? "Clear Treatment ".concat(w.value) : "Apply Treatment ".concat(w.value),
      onClick: D
    }) : (0, r.jsx)("div", {
      className: g.uh,
      children: (0, r.jsx)(f.g, {
        experiment: A,
        experimentId: n,
        overrideInfo: I
      })
    })]
  }) : null
}