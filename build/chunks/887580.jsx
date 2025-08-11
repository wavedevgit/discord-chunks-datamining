/** Chunk was on web.js **/
/** chunk id: 887580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $2: () => b,
  sZ: () => v,
  vF: () => T
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk405548 = require("./405548.js");
let E = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");

function b(e) {
  return E.test(e)
}

function y(e) {
  let t = e.match(E);
  return null == t || t.length < 2 ? null : t[1]
}

function O(e) {
  let t = e.match(E);
  return null == t || t.length < 3 ? null : parseInt(t[2], 10)
}

function v(e, t) {
  return null != t ? "dev://experiment/".concat(e, "/").concat(t) : "dev://experiment/".concat(e)
}

function I(e) {
  let {
    url: t
  } = e, n = i.useCallback(() => {
    (0, u.JG)(t, () => (0, s.showToast)({
      id: "experiment-link-copied",
      message: "Copied experiment link",
      type: s.ToastType.SUCCESS
    }))
  }, [t]);
  return <s.P3F className={g.copyLinkButton} onClick={n}><s.xPt size={"sm"} color={"currentColor"} /></s.P3F>
}

function T(e) {
  let {
    url: t
  } = e, n = y(t), u = O(t), {
    experiments: E,
    overridesInfo: b
  } = (0, m.s)(), {
    experiments: v,
    overridesInfo: T
  } = (0, p.Q)(), S = i.useMemo(() => null == n ? null : null != E[n] ? E[n] : v[n], [E, v, n]), A = i.useMemo(() => {
    if (null == n);
    else if (null != b[n]) return b[n];
    else if (null != T[n]) return T[n]
  }, [b, T, n]), N = l.default.getId(), C = (0, h.a)(S, N), R = i.useMemo(() => null == C || null == S ? null : S.system === f.I.LEGACY ? d.Z.getExperimentBucketName(C.bucket) : S.system === f.I.APEX ? "Variant ".concat(C.variantId) : null, [C, S]), P = (0, o.e7)([c.default], () => {
    let e = c.default.getCurrentUser();
    return (null == e ? true : e.isStaff()) || (null == e ? true : e.isStaffPersonal())
  });
  if (null == n || null == S) return null;
  let w = (0, _.a)(S.variants).find(e => e.value === u),
    D = +(null != w),
    L = null != A && null != w && A.variantId === w.value,
    x = () => {
      null != w && (L ? (0, f.rX)(S.system, n, null) : (0, f.rX)(S.system, n, w.value))
    },
    M = <I url={t} />,
    k = null;
  return (1 === D && null != w ? k = <s.Text variant={"text-xs/normal"} color={"text-muted"}>{w.label}</s.Text> : null != C && (k = <s.Text variant={"text-xs/normal"} color={"text-muted"}>{"Server Config: "}{R}</s.Text>), P) ? <div className={g.root}>{<div><div className={g.header}><s.Kqy direction={"horizontal"} align={"start"} gap={8}>{<s.Che size={"lg"} />}{<s.Kqy direction={"vertical"} gap={0}>{<s.Text variant={"text-md/semibold"}>{S.title}</s.Text>}{k}</s.Kqy>}{M}</s.Kqy></div></div>}{<s.Kqy direction={"horizontal"} align={"center"} gap={4} justify={"space-between"}>{null != w ? (0, r.jsx)(s.Kqy, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: "end",
        children: (0, r.jsx)(a.zx, {
          fullWidth: true,
          onClick: x,
          color: L ? a.zx.Colors.RED : a.zx.Colors.BRAND,
          children: L ? "Clear Treatment ".concat(w.value) : "Apply Treatment ".concat(w.value)
        })
      }) : (0, r.jsx)("div", {
        className: g.experimentOverride,
        children: (0, r.jsx)(_.y, {
          experiment: S,
          experimentId: n,
          overrideInfo: A
        })
      })}</s.Kqy>}</div> : null
}