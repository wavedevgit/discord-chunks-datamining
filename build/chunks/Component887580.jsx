/** Chunk was on web.js **/
/** chunk id: 887580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $2: () => E,
  sZ: () => O,
  vF: () => I
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk499533 = require("./499533.js"),
  Chunk492435 = require("./492435.js"),
  Chunk389494 = require("./389494.jsx"),
  Chunk667344 = require("./667344.js"),
  Chunk453032 = require("./453032.js"),
  Chunk493075 = require("./493075.js"),
  Chunk941189 = require("./941189.js");
let g = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");

function E(e) {
  return g.test(e)
}

function b(e) {
  let t = e.match(g);
  return null == t || t.length < 2 ? null : t[1]
}

function y(e) {
  let t = e.match(g);
  return null == t || t.length < 3 ? null : parseInt(t[2], 10)
}

function O(e, t) {
  return null != t ? "dev://experiment/".concat(e, "/").concat(t) : "dev://experiment/".concat(e)
}

function v(e) {
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
    className: m.copyLinkButton,
    onClick: n,
    children: (0, r.jsx)(o.xPt, {
      size: "sm",
      color: "currentColor"
    })
  })
}

function I(e) {
  let {
    url: t
  } = e, n = b(t), c = y(t), {
    experiments: g,
    overridesInfo: E
  } = (0, h.s)(), {
    experiments: O,
    overridesInfo: I
  } = (0, _.Q)(), T = i.useMemo(() => null == n ? null : null != g[n] ? g[n] : O[n], [g, O, n]), S = i.useMemo(() => {
    if (null == n);
    else if (null != E[n]) return E[n];
    else if (null != I[n]) return I[n]
  }, [E, I, n]), A = s.default.getId(), C = (0, p.a)(T, A), N = i.useMemo(() => null == C || null == T ? null : T.system === d.I.LEGACY ? u.Z.getExperimentBucketName(C.bucket) : T.system === d.I.APEX ? "Variant ".concat(C.variantId) : null, [C, T]), R = (0, a.e7)([l.default], () => {
    let e = l.default.getCurrentUser();
    return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
  });
  if (null == n || null == T) return null;
  let P = (0, f.a)(T).find(e => e.value === c),
    w = +(null != P),
    D = null != S && null != P && S.variantId === P.value,
    x = () => {
      null != P && (D ? (0, d.rX)(T.system, n, null) : (0, d.rX)(T.system, n, P.value))
    },
    L = (0, r.jsx)(v, {
      url: t
    }),
    M = null;
  return (1 === w && null != P ? M = (0, r.jsx)(o.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    children: P.label
  }) : null != C && (M = (0, r.jsxs)(o.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    children: ["Server Config: ", N]
  })), R) ? (0, r.jsxs)("div", {
    className: m.root,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("div", {
        className: m.header,
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
                children: T.title
              }), M]
            })]
          }), L]
        })
      })
    }), null != P ? (0, r.jsx)(o.Button, {
      fullWidth: true,
      variant: D ? "critical-primary" : "primary",
      text: D ? "Clear Treatment ".concat(P.value) : "Apply Treatment ".concat(P.value),
      onClick: x
    }) : (0, r.jsx)("div", {
      className: m.experimentOverride,
      children: (0, r.jsx)(f.y, {
        experiment: T,
        experimentId: n,
        overrideInfo: S
      })
    })]
  }) : null
}