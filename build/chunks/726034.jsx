/** Chunk was on web.js **/
/** chunk id: 726034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => et
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk146187 = require("./146187.jsx"),
  Chunk861066 = require("./861066.js"),
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
  Chunk784238 = require("./784238.js"),
  Chunk767714 = require("./767714.js"),
  Chunk612659 = require("./612659.js"),
  Chunk781391 = require("./781391.js"),
  Chunk210887 = require("./210887.js"),
  Chunk233398 = require("./233398.js"),
  Chunk263198 = require("./263198.js"),
  Chunk866419 = require("./866419.js"),
  Chunk803038 = require("./803038.js"),
  Chunk771934 = require("./771934.js"),
  Chunk877865 = require("./877865.js"),
  Chunk536847 = require("./536847.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk671147 = require("./671147.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882903 = require("./882903.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

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
  return <div className={G.closeButton}><u.P size={"sm"} onClick={() => {
        null == t || t(M.L.USER_DISMISS), (0, y.Ll)()
      }} /></div>
}

function W() {
  return <div className={Chunk882903.headerContainer}>{<Chunk481060.Text variant={"text-md/bold"}>{Chunk388032.intl.string(Chunk671147.default["AsmU8/"])}</Chunk481060.Text>}{<Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t["5AFxuL"])}>{e => (0, r.jsx)(p.SrA, Z({
        size: "custom",
        height: 20,
        width: 20,
        colorClass: G.nitroIcon
      }, e))}</Chunk481060.ua7>}{<Y />}</div>
}

function K(e) {
  let {
    markAsDismissed: t,
    isCoachmark: n
  } = e;
  return (0, O.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? n ? <z markAsDismissed={t} /> : <W /> : <z markAsDismissed={() => (0, O.Q3)(l.z.CUSTOM_THEME_COACHMARK)} />
}

function z(e) {
  let {
    markAsDismissed: t
  } = e, n = (0, T.m)(k.p9.TIER_2);
  return <div className={G.coachmarkHeaderContainer}>{<div className={G.badgeAndCloseRow}>{<p.lBU text={U.intl.string(U.t.oW0eUV)} />}{<Y markAsDismissed={t} />}</div>}{<div className={G.coachmarkHeaderTextContainer}>{<p.X6q variant={"heading-lg/extrabold"}>{U.intl.string(j.default["23QUzs"])}</p.X6q>}{<p.Text className={G.subtitle} variant={"text-sm/medium"} color={"text-muted"}>{U.intl.string(n ? j.default.TRCE4u : j.default["UV/Vtr"])}</p.Text>}</div>}</div>
}

function q(e) {
  let {
    gradientAngle: t,
    setGradientAngle: n
  } = e, {
    key: i,
    handleInternalChange: o
  } = H(t);
  return <div className={a()(G.sliderContainer, G.gradientDirectionSliderContainer)}>{<p.Text variant={"text-sm/medium"}>{U.intl.string(j.default.dZkwg4)}</p.Text>}{<p.iRW initialValue={t} defaultValue={0} minValue={0} maxValue={360} onValueChange={e => {
        (0, w.fR)(), o(e), n(e)
      }} onValueRender={e => "".concat(Math.round(e), "\xb0")} keyboardStep={1} />}</div>
}

function X(e) {
  let {
    chassisMixAmount: t,
    setChassisMixAmount: n
  } = e, {
    key: i,
    handleInternalChange: o
  } = H(t);
  return <div className={G.sliderContainer}>{<p.Text variant={"text-sm/medium"}>{U.intl.string(j.default.xlXkaG)}</p.Text>}{<p.iRW initialValue={t} defaultValue={N.BH} minValue={0} maxValue={100} onValueChange={e => {
        (0, w.z3)(), o(e), n(e)
      }} keyboardStep={1} />}</div>
}

function Q(e) {
  let {
    type: t
  } = e, n = i.useCallback(() => {
    var e;
    (0, w.Om)();
    let t = (0, C.C)();
    N.Ig.getState().setAll({
      colors: t.colors,
      gradientAngle: null != (e = t.angle) ? e : N.Ig.getState().gradientAngle,
      chassisMixAmount: t.intensity
    })
  }, []);
  return <p.ua7 text={U.intl.string(j.default.c9MBEB)}>{e => "with-text" === t ? (0, r.jsx)(c.z, V(Z({}, e), {
      variant: "secondary",
      onClick: n,
      icon: p.T$Z,
      text: U.intl.string(j.default.c9MBEB),
      fullWidth: true
    })) : (0, r.jsx)("div", {
      className: G.surpriseMeButton,
      children: (0, r.jsx)(d.h, V(Z({}, e), {
        variant: "icon-only",
        size: "md",
        onClick: n,
        icon: p.T$Z,
        "aria-label": U.intl.string(j.default.c9MBEB)
      }))
    })}</p.ua7>
}

function J(e) {
  let {
    onApply: t,
    disabled: n,
    fullWidth: i
  } = e;
  return <p.ua7 text={U.intl.string(j.default.SFyHIC)} shouldShow={n}>{e => (0, r.jsx)(c.z, V(Z({}, e), {
      variant: "primary",
      onClick: t,
      disabled: n,
      text: U.intl.string(U.t["1Qm829"]),
      fullWidth: i
    }))}</p.ua7>
}

function $(e) {
  let {
    onSaveTheme: t,
    canApply: n
  } = e, i = (0, T.m)(k.p9.TIER_2);
  return (0, w.hf)(i, E.Z.CUSTOM_THEMES_EDITOR_COACHMARK), <div className={G.coachmarkFooterContainer}>{<Q type={"with-text"} />}{i ? <J disabled={!n} onApply={t} fullWidth={true} /> : <v.Z premiumModalAnalyticsLocation={{
        page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: x.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
      }} textOptions={{
        subscribeText: U.intl.string(U.t.JST6jo)
      }} subscriptionTier={k.Si.TIER_2} showGradient={true} color={_.Tt.BRAND} />}</div>
}

function ee(e) {
  let {
    onSaveTheme: t,
    canApply: n,
    metadata: i
  } = e, o = (0, T.m)(k.p9.TIER_2);
  (0, w.hf)(o, E.Z.CUSTOM_THEMES_EDITOR);
  let a = () => {
    (0, w.Vb)(), (0, O.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? true : i.from) === y.tE.SETTING ? (m.Z.open(), (0, y.Ll)()) : (null == i ? true : i.from) === y.tE.CLIENT_THEMES_EDITOR ? (0, y.XO)(y.wh.CLIENT_THEMES) : (0, y.Ll)()
  };
  return <div className={G.footerContainer}>{<Q type={"no-text"} />}{<f.A variant={"secondary"} onClick={a} text={U.intl.string(U.t["13/7kZ"])} />}{o ? <J disabled={!n} onApply={t} /> : <I.Z className={G.subscribeButton} size={_.zx.Sizes.MEDIUM} subscriptionTier={k.Si.TIER_2} showGradient={true} premiumModalAnalyticsLocation={{
        page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
        section: x.jXE.CUSTOM_THEMES_FOOTER
      }} textOptions={{
        textOverride: U.intl.string(U.t.pj0XBA)
      }} />}</div>
}

function et(e) {
  var t;
  let {
    metadata: n,
    markAsDismissed: o,
    isCoachmark: a
  } = e, u = P.Mc.useExperiment({
    location: "ClientThemeColorPickerTools"
  }).enabled, d = (0, R.jJ)(), f = i.useRef(false), {
    colors: _,
    chassisMixAmount: m,
    gradientAngle: v,
    setColors: I,
    setChassisMixAmount: T,
    setGradientAngle: C
  } = (0, N.Ig)(), [x, k] = i.useState(null != (t = _[0]) ? t : N.Dp), j = (0, s.e7)([A.Z], () => A.Z.theme), B = (0, O.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), {
    analyticsLocations: Z
  } = (0, b.ZP)(E.Z.CUSTOM_THEMES_EDITOR), F = async () => {
    f.current = true, await (0, h.ZI)({
      theme: j,
      customUserThemeSettings: {
        colors: _,
        gradientColorStops: [],
        gradientAngle: v,
        baseMix: m
      }
    }), (0, w.u7)(_, m, v, j, Z), null == o || o(M.L.TAKE_ACTION), B || (0, O.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT), (0, y.Ll)(), (0, S.UD)()
  }, V = () => {
    d(R._m.RESET_BUTTON), (0, w.uf)()
  }, H = _.length > 0;
  return (i.useEffect(() => () => {
    f.current || d(R._m.EDITOR_CLOSE)
  }, [d]), (0, g.ZP)(() => {
    a || (0, R.lT)(_, x, I)
  }), u) ? <div className={G.container} data-app-right-panel={true}><div className={G.containerInner}>{<p.Ttm><div className={G.editorBody}>{<K markAsDismissed={o} isCoachmark={a} />}{<L.o />}{<D.U onChange={e => {
              k(e), 0 === _.length && (0, R.lT)(_, e, I)
            }} value={x} colors={_} setColors={I} />}{_.length > 1 && <q gradientAngle={v} setGradientAngle={C} />}{<X chassisMixAmount={m} setChassisMixAmount={e => {
              T(e), 0 === _.length && (0, R.lT)(_, x, I)
            }} />}{<c.z variant={"secondary"} onClick={V} icon={p.Oe7} text={U.intl.string(U.t.yBZMsb)} fullWidth={true} />}</div></p.Ttm>}{a ? <$ onSaveTheme={F} canApply={H} /> : <ee onSaveTheme={F} canApply={H} metadata={n} />}</div></div> : null
}