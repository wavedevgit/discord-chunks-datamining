/** Chunk was on web.js **/
/** chunk id: 705262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Yk: () => z,
  ZP: () => er,
  yH: () => Y
}), require("./314940.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk153867 = require("./153867.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk550385 = require("./550385.js"),
  Chunk313201 = require("./313201.js"),
  Chunk98278 = require("./98278.js"),
  Chunk639119 = require("./639119.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk587446 = require("./587446.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk238302 = require("./238302.js"),
  Chunk514361 = require("./514361.js"),
  Chunk803038 = require("./803038.js"),
  Chunk717953 = require("./717953.js"),
  Chunk583901 = require("./583901.jsx"),
  Chunk469115 = require("./469115.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk874893 = require("./874893.js"),
  Chunk526761 = require("./526761.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk622581 = require("./622581.js");

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

function V(e, t) {
  if (null == e) return {};
  var n, r, i = H(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function H(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var Y = function(e) {
  return e.EDITOR = "EDITOR", e.SETTINGS = "SETTINGS", e
}({});
let W = Object.freeze({
    EDITOR: Chunk526761.fy.SLOW_USER_ACTION,
    SETTINGS: Chunk526761.fy.INFREQUENT_USER_ACTION
  }),
  K = Chunk73800.createContext({}),
  z = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: r
    } = e;
    S.default.track(D.rMx.CLIENT_THEME_UPDATED, {
      feature_name: L.QP.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: r
    })
  },
  q = e => {
    let {
      type: t,
      isPreview: n,
      isCoachmark: i
    } = e, o = (0, s.EQ)({
      type: t,
      isPreview: n,
      isCoachmark: i
    }).with({
      type: "EDITOR",
      isCoachmark: true,
      isPreview: true
    }, () => j.intl.string(j.t.D29k19)).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => j.intl.string(j.t["8+vbqa"])).otherwise(() => j.intl.string(j.t.hjV0fX));
    return <div className={U.title}>{<u.X6q aria-label={o} className={U.titleText} variant={"text-md/medium"}>{o}</u.X6q>}{<O.Z className={U.premiumIcon} />}</div>
  },
  X = e => {
    var t, n;
    let {
      type: i,
      isPreview: o,
      isCoachmark: a
    } = e;
    if ((null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === L.Si.TIER_2 && o) return null;
    let l = (0, s.EQ)({
      type: i,
      isPreview: o,
      isCoachmark: a
    }).with({
      type: "EDITOR",
      isPreview: true
    }, () => j.intl.format(j.t.G8yQXl, {
      onPremiumClick: () => E.z
    })).with({
      type: "EDITOR",
      isCoachmark: true
    }, () => j.intl.string(j.t.jmZiNj)).with({
      type: "EDITOR",
      isPreview: false
    }, () => j.intl.string(j.t.dqDFwc)).with({
      isPreview: true
    }, () => j.intl.format(j.t.DWIjJy, {
      onPremiumClick: () => E.z
    })).otherwise(() => j.intl.string(j.t["np0X/v"]));
    return <u.X6q variant={"text-sm/normal"} className={U.subtext}>{l}</u.X6q>
  },
  Q = e => {
    var t, n;
    let {
      renderCTAButtons: o,
      isCoachmark: a
    } = e, {
      type: s
    } = i.useContext(K), [c] = (0, l.Wu)([N.Z], () => [N.Z.isPreview]), u = (null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? true : t.sku_id) === L.Si.TIER_2;
    return "EDITOR" === s && c && u ? <y.ZP type={L.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT} subscriptionTier={L.Si.TIER_2}>{j.intl.format(j.t.G8yQXl, {
        onPremiumClick: () => E.z
      })}</y.ZP> : <div className={U.header}>{<div className={U.headings}>{<q type={s} isPreview={c} isCoachmark={a} />}{<X type={s} isPreview={c} isCoachmark={a} />}</div>}{null == o ? true : o()}</div>
  },
  J = e => {
    let {
      disabled: t
    } = e, {
      type: o,
      delay: a
    } = i.useContext(K), {
      analyticsLocations: s
    } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR), [g, E] = (0, l.Wu)([N.Z], () => {
      var e;
      return [N.Z.isPreview, null == (e = N.Z.gradientPreset) ? true : e.id]
    }), [b, y] = i.useState(false), [O, v] = i.useState(false), I = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), T = C.Mc.useExperiment({
      location: "GradientSelectors"
    }).enabled;
    i.useEffect(() => {
      (O === w.XV.length - 2 && "EDITOR" === o || E === c.Us.EASTER_EGG) && y(true)
    }, [O, o, E]);
    let S = (e, t) => {
        if ((0, A.zO)(e.id), z({
            isPersisted: !g,
            analyticsLocations: s,
            themeName: c.Us[e.id]
          }), (0, f.ZI)({
            backgroundGradientPresetId: e.id,
            theme: e.theme,
            useSystemTheme: g ? x.KW.OFF : true
          }, a), null != t) {
          if (b && y(false), t <= O || 0 === t) return void v(0);
          v(e => e + 1)
        }
      },
      D = () => {
        if (!b) return null;
        let e = w.qt[c.Us.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("5217").then(n.t.bind(n, 801048, 19));
          return e
        }
        return <div className={U.easterEggSelection}>{<P.DR preset={e} isSelected={E === c.Us.EASTER_EGG} onSelect={() => S(e)} />}{<u.Fmz importData={t} shouldAnimate={!I} className={U.sparkles} />}</div>
      };
    return <r.Fragment>{T && <R.Z isDisabled={t} onSelect={() => {
          (0, m.XO)(m.wh.CUSTOM_THEME, {
            from: "SETTINGS" === o ? m.tE.SETTING : m.tE.CLIENT_THEMES_EDITOR
          }), "SETTINGS" === o && (0, d.xf)()
        }} />}{w.XV.filter(e => {
        let {
          id: t
        } = e;
        return t !== c.Us.EASTER_EGG
      }).map((e, n) => <P.DR preset={e} isSelected={E === e.id} onSelect={() => S(e, n)} disabled={t} tabIndex={0 !== n || t ? true : 0} showBadge={false} showLockedBadge={false} />)}{D()}</r.Fragment>
  },
  $ = e => {
    let {
      className: t,
      renderCTAButtons: n,
      disabled: i = false,
      isCoachmark: o
    } = e;
    return <section className={t}>{<Q renderCTAButtons={n} isCoachmark={o} />}{<div className={U.presets}><J disabled={i} /></div>}</section>
  },
  ee = e => {
    let {
      systemSelectorFirst: t,
      hideSystemSelector: n = false
    } = e, {
      delay: o
    } = i.useContext(K), {
      analyticsLocations: a
    } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR), [s, c, u] = (0, l.Wu)([v.Z, I.ZP, N.Z], () => [v.Z.theme, null == N.Z.gradientPreset && null == T.L1.getSetting().customUserThemeSettings, I.ZP.useSystemTheme === x.KW.ON]), d = e => {
      (0, A.xs)(), z({
        isPersisted: true,
        analyticsLocations: a,
        themeName: "default ".concat(e)
      }), (0, f.ZI)({
        theme: e
      }, o)
    };
    return <r.Fragment>{!n && t && <P.bD theme={"system"} isSelected={c && u} onSelect={() => d("system")} />}{<P.bD theme={k.BR.LIGHT} isSelected={c && !u && s === k.BR.LIGHT} onSelect={() => d(k.BR.LIGHT)} />}{<P.bD theme={k.BR.DARK} isSelected={c && !u && s === k.BR.DARK} onSelect={() => d(k.BR.DARK)} />}{<P.bD theme={k.BR.DARKER} isSelected={c && !u && s === k.BR.DARKER} onSelect={() => d(k.BR.DARKER)} />}{<P.bD theme={k.BR.MIDNIGHT} isSelected={c && !u && s === k.BR.MIDNIGHT} onSelect={() => d(k.BR.MIDNIGHT)} />}{!n && !t && <P.bD theme={"system"} isSelected={c && u} onSelect={() => d("system")} />}</r.Fragment>
  },
  et = e => {
    let {
      isEditor: t,
      className: n,
      renderCTAButtons: i,
      isCoachmark: o
    } = e;
    return <section className={n}>{!t && <Q renderCTAButtons={i} isCoachmark={o} />}{t && o && <u.X6q className={U.upsellText} variant={"heading-sm/semibold"}>{j.intl.string(j.t.POSLGR)}</u.X6q>}{<div className={a()(U.presets, {
          [U.presetsJustify]: t
        })}>{<ee systemSelectorFirst={true} />}{<J disabled={false} />}</div>}</section>
  },
  en = e => {
    let {
      type: t,
      children: n
    } = e, o = (0, g.Dt)(), a = (0, u.arW)({
      orientation: "horizontal",
      labelledBy: o
    }), {
      ref: s
    } = a, l = V(a, ["ref"]), c = i.useMemo(() => ({
      type: t,
      delay: W[t]
    }), [t]);
    return <K.Provider value={c}><div{...F(B({
        ref: s
      }, l), {
        className: U.__invalid_container,
        children: n
      })} /></K.Provider>
  };
en.Basic = e => {
  let {
    className: t,
    hideSystemSelector: n
  } = e;
  return <section className={a()(U.presets, t)}><ee hideSystemSelector={n} /></section>
}, en.Gradient = $, en.BasicAndGradient = et;
let er = en