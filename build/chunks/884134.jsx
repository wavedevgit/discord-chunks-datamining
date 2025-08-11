/** Chunk was on web.js **/
/** chunk id: 884134, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => et
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk146187 = require("./146187.jsx"),
  Chunk179538 = require("./179538.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk230711 = require("./230711.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk784238 = require("./784238.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk233398 = require("./233398.js"),
  Chunk263198 = require("./263198.js"),
  Chunk866419 = require("./866419.js"),
  Chunk803038 = require("./803038.js"),
  Chunk771934 = require("./771934.js"),
  Chunk857658 = require("./857658.jsx"),
  Chunk714097 = require("./714097.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk671147 = require("./671147.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk409403 = require("./409403.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = 0;

function H(e) {
  let [t, n] = i.useState(0), [r, o] = i.useState(false), a = i.useRef(e);
  return i.useEffect(() => {
    e === a.current || r || n(e => e + 1), a.current = e, o(false)
  }, [e, r]), {
    key: t,
    handleInternalChange: i.useCallback(e => (o(true), e), [])
  }
}

function Y(e) {
  let {
    markAsDismissed: t
  } = e;
  return <div className={U.closeButton}><u.P size={"sm"} onClick={() => {
        null == t || t(x.L.USER_DISMISS), (0, b.Ll)()
      }} /></div>
}

function W() {
  return <div className={Chunk409403.headerContainer}>{<Chunk481060.Text variant={"text-md/bold"}>{Chunk388032.intl.string(Chunk671147.default["AsmU8/"])}</Chunk481060.Text>}{<Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t["5AFxuL"])}>{e => (0, r.jsx)(_.SrA, B({
        size: "custom",
        height: 20,
        width: 20,
        colorClass: U.nitroIcon
      }, e))}</Chunk481060.ua7>}{<Y />}</div>
}

function K(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, y.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? <z markAsDismissed={t} /> : <W /> : <z markAsDismissed={() => (0, y.Q3)(l.z.CUSTOM_THEME_COACHMARK)} />
}

function z(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, I.m)(M.p9.TIER_2);
  return <div className={U.coachmarkHeaderContainer}>{<div className={U.badgeAndCloseRow}>{<_.lBU text={j.intl.string(j.t.oW0eUV)} />}{<Y markAsDismissed={t} />}</div>}{<div className={U.coachmarkHeaderTextContainer}>{<_.X6q variant={"heading-lg/extrabold"}>{j.intl.string(k.default["23QUzs"])}</_.X6q>}{<_.Text className={U.subtitle} variant={"text-sm/medium"} color={"text-muted"}>{j.intl.string(n ? k.default.TRCE4u : k.default["UV/Vtr"])}</_.Text>}</div>}</div>
}

function q(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: o,
    handleInternalChange: s
  } = H(t), [l, c] = i.useState("".concat(Math.round(t), "\xb0"));
  i.useEffect(() => {
    c("".concat(Math.round(t), "\xb0"))
  }, [t]);
  let u = e => {
    let t = e.replace(/°/g, "").trim();
    if ("" === t) return void c("");
    let r = parseInt(t, 10);
    if (isNaN(r)) return;
    let i = Math.max(0, Math.min(360, r));
    c("".concat(i, "\xb0")), (0, P.fR)(), n(i)
  };
  return <div className={a()(U.sliderContainer, U.gradientDirectionSliderContainer)}>{<div className={U.controlLabelContainer}>{<_.Text variant={"text-sm/medium"}>{j.intl.string(k.default.dZkwg4)}</_.Text>}{<input type={"text"} value={l} onChange={e => u(e.target.value)} placeholder={"".concat(V, "\xb0")} className={U.controlLabelInput} />}</div>}{<_.iRW initialValue={t} defaultValue={0} minValue={0} maxValue={360} onValueChange={e => {
        (0, P.fR)(), s(e), n(e)
      }} onValueRender={() => null} keyboardStep={1} />}</div>
}

function X(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: o,
    handleInternalChange: a
  } = H(t), [s, l] = i.useState("".concat(Math.round(t), "%"));
  i.useEffect(() => {
    l("".concat(Math.round(t), "%"))
  }, [t]);
  let c = e => {
    let t = e.replace(/%/g, "").trim();
    if ("" === t) return void l("");
    let r = parseInt(t, 10);
    if (isNaN(r)) return;
    let i = Math.max(0, Math.min(100, r));
    l("".concat(i, "%")), (0, P.z3)(), n(i)
  };
  return <div className={U.sliderContainer}>{<div className={U.controlLabelContainer}>{<_.Text variant={"text-sm/medium"}>{j.intl.string(k.default.xlXkaG)}</_.Text>}{<input type={"text"} value={s} onChange={e => c(e.target.value)} placeholder={"".concat(A.BH, "%")} className={U.controlLabelInput} />}</div>}{<_.iRW initialValue={t} defaultValue={A.BH} minValue={0} maxValue={100} onValueChange={e => {
        (0, P.z3)(), a(e), n(e)
      }} onValueRender={() => null} keyboardStep={1} />}</div>
}

function Q() {
  let e = Chunk73800.useCallback(() => {
    var e;
    (0, Chunk771934.Om)();
    let t = (0, Chunk263198.C)();
    Chunk233398.Ig.getState().setAll({
      colors: exports.colors,
      gradientAngle: null != (e = exports.angle) ? module : Chunk233398.Ig.getState().gradientAngle,
      chassisMixAmount: exports.intensity
    })
  }, []);
  return <Chunk481060.ua7 text={Chunk388032.intl.string(Chunk671147.default.c9MBEB)}>{t => (0, r.jsx)(c.z, F(B({}, t), {
      variant: "secondary",
      onClick: e,
      icon: _.$2U,
      text: j.intl.string(k.default.c9MBEB),
      fullWidth: true
    }))}</Chunk481060.ua7>
}

function J(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return <_.ua7 text={j.intl.string(k.default.SFyHIC)} shouldShow={n}>{e => (0, r.jsx)(c.z, F(B({}, e), {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: j.intl.string(j.t["1Qm829"]),
      fullWidth: i
    }))}</_.ua7>
}

function $(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, I.m)(M.p9.TIER_2);
  return (0, P.hf)(i, g.Z.CUSTOM_THEMES_EDITOR_COACHMARK), <div className={U.coachmarkFooterContainer}>{i ? (0, r.jsx)(J, {
      disabled: !n,
      onApply: t,
      fullWidth: true
    }) : (0, r.jsx)(O.Z, {
      premiumModalAnalyticsLocation: {
        page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: L.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      },
      textOptions: {
        subscribeText: j.intl.string(j.t.JST6jo)
      },
      subscriptionTier: M.Si.TIER_2,
      showGradient: true,
      color: f.Tt.BRAND
    })}</div>
}

function ee(e) {
  let {
    onSaveTheme: t,
    canApply: n,
    metadata: i
  } = e, o = (0, I.m)(M.p9.TIER_2);
  (0, P.hf)(o, g.Z.CUSTOM_THEMES_EDITOR);
  let a = () => {
    (0, P.Vb)(), (0, y.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? true : i.from) === b.tE.SETTING ? (h.Z.open(), (0, b.Ll)()) : (null == i ? true : i.from) === b.tE.CLIENT_THEMES_EDITOR ? (0, b.XO)(b.wh.CLIENT_THEMES) : (0, b.Ll)()
  };
  return <div className={U.footerContainer}>{<d.A variant={"secondary"} onClick={a} text={j.intl.string(j.t["13/7kZ"])} />}{o ? <J disabled={!n} onApply={t} /> : <v.Z className={U.subscribeButton} size={f.zx.Sizes.MEDIUM} subscriptionTier={M.Si.TIER_2} showGradient={true} premiumModalAnalyticsLocation={{
        page: L.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: L.jXE.CUSTOM_THEMES_FOOTER
      }} textOptions={{
        textOverride: j.intl.string(j.t.pj0XBA)
      }} />}</div>
}

function et(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: o,
    isCoachmark: a
  } = e, u = R.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, d = (0, C.jJ)(), f = i.useRef(false), {
    colors: h,
    chassisMixAmount: O,
    gradientAngle: v,
    setColors: I,
    setChassisMixAmount: N,
    setGradientAngle: L
  } = (0, A.Ig)(), [M, G] = i.useState(null != (t = h[0]) ? t : A.Dp), B = (0, s.e7)([S.Z], () => S.Z.theme), Z = (0, y.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: F
  } = (0, E.ZP)(g.Z.CUSTOM_THEMES_EDITOR), V = async () => {
    f.current = true, await (0, p.ZI)({
      theme: B,
      customUserThemeSettings: {
        colors: h,
        gradientColorStops: [],
        gradientAngle: v,
        baseMix: O
      }
    }), (0, P.u7)(h, O, v, B, F), null == o || o(x.L.TAKE_ACTION), Z || (0, y.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, b.Ll)(), (0, T.UD)()
  }, H = () => {
    d(C._m.RESET_BUTTON), (0, P.uf)()
  }, Y = h.length > 0;
  return (i.useEffect(() => () => {
    f.current || d(C._m.EDITOR_CLOSE)
  }, [d]), (0, m.ZP)(() => {
    a || (0, C.lT)(h, M, I)
  }), u) ? <div className={U.container} data-app-right-panel={true}>{<_.Ttm><div className={U.editorBody}>{<K markAsDismissed={o} isCoachmark={a} />}{<div className={U.section}>{<_.Text variant={"text-sm/semibold"} color={"text-secondary"}>{j.intl.string(k.default.o2NfLC)}</_.Text>}{<D.o />}</div>}{<div className={U.section}>{<_.Text variant={"text-sm/semibold"} color={"text-secondary"}>{j.intl.string(k.default.uSL2Gx)}</_.Text>}{<w.U onChange={e => {
              G(e), 0 === h.length && (0, C.lT)(h, e, I)
            }} value={M} colors={h} setColors={I} />}</div>}{<div className={U.section}>{<_.Text variant={"text-sm/semibold"} color={"text-secondary"}>{j.intl.string(k.default.F1t0c3)}</_.Text>}{h.length > 1 && <q gradientAngle={v} setGradientAngle={L} />}{<X chassisMixAmount={O} setChassisMixAmount={e => {
              N(e), 0 === h.length && (0, C.lT)(h, M, I)
            }} />}</div>}{<div className={U.resetButton}>{<Q />}{<c.z variant={"secondary"} onClick={H} text={j.intl.string(j.t.yBZMsb)} fullWidth={true} />}</div>}</div></_.Ttm>}{a ? <$ onSaveTheme={V} canApply={Y} /> : <ee onSaveTheme={V} canApply={Y} metadata={n} />}</div> : null
}