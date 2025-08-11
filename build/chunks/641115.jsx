/** Chunk was on 46746 **/
/** chunk id: 641115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => R,
  Z: () => M
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk2052 = require("./2052.js"),
  Chunk924557 = require("./924557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk140465 = require("./140465.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk451467 = require("./451467.js"),
  Chunk122186 = require("./122186.jsx"),
  Chunk37113 = require("./37113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk347226 = require("./347226.js"),
  Chunk480197 = require("./480197.js"),
  Chunk20493 = require("./20493.js");

function T(e) {
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

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let {
    analyticsLocation: t
  } = e;
  (0, u.ZDy)(async () => {
    let {
      default: e
    } = await n.e("28479").then(n.bind(n, 78865));
    return n => <e{...E(T({}, n), {
      analyticsSource: t
    })} />
  })
}

function R() {
  return <div className={Chunk480197.toolTipTextContainer}>{<Chunk481060.SrA size={"md"} color={Chunk436774.JX.PREMIUM_TIER_2} className={Chunk480197.premiumIcon} />}{<Chunk481060.Text className={Chunk480197.upsellText} variant={"text-sm/medium"}>{Chunk388032.intl.string(Chunk388032.t.sEAnVF)}</Chunk481060.Text>}</div>
}

function A(e) {
  let t, n, {
      type: i,
      selected: l,
      needsPremium: o,
      needsDemo: a,
      analyticsLocation: c,
      onClick: d,
      onClose: f,
      setIsHovering: m
    } = e,
    {
      value: h,
      label: p
    } = i;
  return o ? (t = <u.DY3 tooltipClassName={w.tooltip} spacing={6} aria-label={I.intl.string(I.t.sEAnVF)} text={(0, r.jsx)(R, {})}><div className={w.textContainer} onMouseEnter={() => m(true)} onMouseLeave={() => m(false)}><u.Text variant={"text-xs/bold"} className={s()(w.selectorNitroText, w.enhancedSelectorNitroText)}>{p}</u.Text></div></u.DY3>, n = () => P({
    analyticsLocation: c,
    onClose: f
  })) : (t = <div className={w.textContainer}><u.Text variant={"text-xs/normal"} className={s()(w.selectorText, {
        [w.enhancedSelectorNitroText]: a
      })}>{p}</u.Text></div>, n = () => d(h)), {
    content: t,
    className: s()(w.selectorButton, {
      [w.selectorButtonSelected]: l,
      [w.perksDemo]: a,
      [w.premiumUpsell]: o
    }),
    onClick: n
  }
}

function M(e) {
  let {
    onClose: t,
    selectedPreset: n,
    selectedResolution: l,
    selectedFPS: s,
    onResolutionChange: o,
    onFPSChange: x,
    onPresetChange: R,
    targetGuildPremiumTier: M,
    captureDeviceSelected: k
  } = e, L = (0, c.e7)([j.default], () => {
    let e = j.default.getCurrentUser();
    return a()(null != e, "StreamSettings: user cannot be undefined"), e
  }), D = (0, c.e7)([v.Z, _.Z], () => _.Z.getChannel(v.Z.getVoiceChannelId())), B = b.ZP.canStreamQuality(b.U2.MID, L), {
    location: U
  } = (0, m.O)(), G = (0, h.Zq)({
    autoTrackExposure: false
  }), W = (0, g.B4)(), F = !B && !G, [H, z] = i.useState(false), V = k ? y.z8 : y.WC, Y = E(T({}, U), {
    section: O.jXE.STREAM_SETTINGS
  }), J = <d.hE buttons={V.map(e => A({
      type: e,
      selected: e.value === l,
      needsPremium: !(0, S.Z)(n, e.value, s, L, M, D),
      needsDemo: W && e.value !== y.LY.RESOLUTION_720,
      analyticsLocation: Y,
      onClick: () => o(e.value),
      onClose: t,
      setIsHovering: z
    }))} />, X = <d.hE buttons={y.k0.map(e => A({
      type: e,
      selected: e.value === s,
      needsPremium: !(0, S.Z)(n, l, e.value, L, M, D),
      needsDemo: W && e.value === y.ws.FPS_60,
      analyticsLocation: Y,
      onClick: () => x(e.value),
      onClose: t,
      setIsHovering: z
    }))} />, K = [{
    value: y.tI.PRESET_VIDEO,
    label: I.intl.string(I.t.HcwHc3)
  }, ...k ? [] : [{
    value: y.tI.PRESET_DOCUMENTS,
    label: I.intl.string(I.t["/RfohI"])
  }], {
    value: y.tI.PRESET_CUSTOM,
    label: I.intl.string(I.t["+eOtrK"])
  }], q = n === y.tI.PRESET_DOCUMENTS ? <r.Fragment>{<p.Z><u.xJW title={I.intl.string(I.t.rHyPXl)} titleClassName={Z.formItemTitleSlim} className={w.documentModeGroup}><u.Text variant={"text-xs/normal"}>{I.intl.format(I.t["U+hmam"], {
            fps: s
          })}</u.Text></u.xJW></p.Z>}{F ? <C.Z message={I.intl.string(I.t.deDogI)} onClose={t} openStreamUpsellModal={P} /> : null}{W && <C.c />}</r.Fragment> : <r.Fragment>{<p.Z>{<u.xJW title={I.intl.string(I.t.rHyPXl)} className={w.settingsGroup} titleClassName={Z.formItemTitleSlim}>{J}</u.xJW>}{<u.xJW title={I.intl.string(I.t.SkkeIi)} className={w.settingsGroup} titleClassName={Z.formItemTitleSlim}>{X}</u.xJW>}</p.Z>}{F ? <C.Z onClose={t} openStreamUpsellModal={P} glow={H} /> : null}{W && <C.c />}</r.Fragment>;
  return <f.Z{...E(T({}, Y), {
    children: (0, r.jsx)(u.xJW, {
      title: I.intl.string(I.t.ax4FnZ),
      titleClassName: Z.formItemTitle,
      className: Z.modalContent,
      children: (0, r.jsxs)("div", {
        className: w.qualitySettingsContainer,
        children: [(0, r.jsx)(u.q4e, {
          value: n,
          className: N.marginTop8,
          options: K,
          onChange: e => R(e)
        }), q]
      })
    })
  })} />
}