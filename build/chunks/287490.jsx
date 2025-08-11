/** Chunk was on 75708 **/
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
  Chunk887580 = require("./887580.js"),
  Chunk492435 = require("./492435.js"),
  Chunk389494 = require("./389494.js"),
  Chunk353926 = require("./353926.js"),
  Chunk667344 = require("./667344.js"),
  Chunk453032 = require("./453032.js"),
  Chunk493075 = require("./493075.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk572004 = require("./572004.js"),
  Chunk878209 = require("./878209.js"),
  Chunk987338 = require("./987338.js"),
  Chunk516370 = require("./516370.js");

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
  return <Chunk481060.hjN tag={Chunk481060.RB0.H1} title={"Experiments"}>{<Chunk481060.E1j query={Chunk755721} onChange={Chunk887580} onClear={() => Chunk887580("")} />}{Chunk492435.length > 0 ? Chunk492435.map(e => {
      let t = "guild" === e.experiment.kind ? T : S;
      return <t experiment={e.experiment} experimentId={e.id} overrideInfo={l[e.id]} defaultOpen={null != l[e.id]} />
    }) : <div className={Chunk516370.emptyState}><Chunk481060.X6q variant={"heading-md/semibold"}>{"No Experiments Found"}</Chunk481060.X6q></div>}</Chunk481060.hjN>
}

function S(e) {
  let {
    experiment: t,
    experimentId: n,
    overrideInfo: s,
    defaultOpen: g
  } = e, [f, x] = r.useState(g), [j, O] = r.useState(false), v = r.useCallback(() => {
    x(e => !e)
  }, []), S = (0, l.e7)([b.default], () => b.default.getId()), T = (0, h.q)(t, S), I = (0, h.a)(t, S), N = (0, l.Wu)([p.Z], () => a().sortBy(p.Z.getRecentExposures(E.xY.USER, n), e => {
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
  }, [n]), A = <c.kL8 aria-label={"Toggle visibility"} onClick={v}><c.vwX tag={c.RB0.H3} className={C.title}>{<div>{<c.Kqy direction={"horizontal"} align={"center"} gap={4}>{t.title}{" "}{_.wS && <c.P3F onClick={y}><c.xPt size={"xs"} /></c.P3F>}</c.Kqy>}{<c.Text color={"text-muted"} variant={"text-sm/normal"}>{n}</c.Text>}</div>}{<span className={C.experimentDate}>{"User"}</span>}</c.vwX></c.kL8>;
  if (!f) return <div className={C.group}><c.hjN>{A}</c.hjN></div>;
  let P = "";
  return P = t.system === u.I.LEGACY ? "Currently assigned to bucket ".concat(null != T ? T : E.NZ.NOT_ELIGIBLE) : null != T ? "Currently assigned to variant ".concat(T) : "Currently unassigned", <div className={C.group}>{<c.hjN>{A}{<div><c.xJW title={"Bucket Override"}><m.y experiment={t} experimentId={n} overrideInfo={s} /></c.xJW></div>}{<div className={C.description}>{<c.R94 type={c.geA.DESCRIPTION}>{P}</c.R94>}{null == I ? <c.R94 type={c.geA.DESCRIPTION}>{'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'}</c.R94> : null}</div>}{j ? <div>{<c.vwX tag={"h5"} className={C.debugTitle}>{"Server Descriptor"}</c.vwX>}{<c.Text variant={"code"} className={C.pre}>{null == I ? "None" : JSON.stringify(I, true, 2)}</c.Text>}{<c.vwX tag={"h5"} className={C.debugTitle}>{"Override Descriptor"}</c.vwX>}{<c.Text variant={"code"} className={C.pre}>{(null == s ? true : s.originalDescriptor) == null ? "None" : JSON.stringify(s.originalDescriptor, true, 2)}</c.Text>}{<c.vwX tag={"h5"} className={C.debugTitle}>{"Recent Exposures"}</c.vwX>}{<c.Text variant={"code"} className={C.pre}>{0 === N.length ? "None" : N.join("\n")}</c.Text>}</div> : <o.zx className={C.debugButton} size={o.zx.Sizes.SMALL} look={o.zx.Looks.BLANK} onClick={() => O(true)}>{"More Details \xbb"}</o.zx>}</c.hjN>}{<c.$i$ className={C.divider} />}</div>
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
  }), v = <c.P3F onClick={f}><c.vwX tag={c.RB0.H3} className={C.title}>{<div>{<span>{t.title}</span>}{<c.Text color={"text-muted"} variant={"text-sm/normal"}>{n}</c.Text>}</div>}{<span className={C.experimentDate}>{"Guild"}</span>}</c.vwX></c.P3F>;
  return d ? <div className={C.group}>{<c.hjN>{v}{<div><c.xJW title={"Bucket Override"}><m.y experiment={t} experimentId={n} overrideInfo={s} /></c.xJW></div>}{<div className={C.description}>{<c.R94 type={c.geA.DESCRIPTION}>{"Current Assignments: "}{O}</c.R94>}{null == b ? <c.R94 type={c.geA.DESCRIPTION}>{'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'}</c.R94> : null}</div>}{g ? <div>{<c.vwX tag={"h5"} className={C.debugTitle}>{"Guild Assignments"}</c.vwX>}{<c.Text variant={"code"} className={C.pre}>{j}</c.Text>}{<c.vwX tag={"h5"} className={C.debugTitle}>{"Server Descriptor"}</c.vwX>}{<c.Text variant={"code"} className={C.pre}>{null == b ? "None" : JSON.stringify(b, true, 2)}</c.Text>}{<c.vwX tag={"h5"} className={C.debugTitle}>{"Override Descriptor"}</c.vwX>}{<c.Text variant={"code"} className={C.pre}>{(null == s ? true : s.originalDescriptor) == null ? "None" : JSON.stringify(s.originalDescriptor, true, 2)}</c.Text>}{<c.vwX tag={"h5"} className={C.debugTitle}>{"Recent Exposures"}</c.vwX>}{<c.Text variant={"code"} className={C.pre}>{0 === _.length ? "None" : _.join("\n")}</c.Text>}</div> : <o.zx className={C.debugButton} size={o.zx.Sizes.SMALL} look={o.zx.Looks.BLANK} onClick={() => h(true)}>{"More Details \xbb"}</o.zx>}</c.hjN>}{<c.$i$ className={C.divider} />}</div> : <div className={C.group}><c.hjN>{v}</c.hjN></div>
}