/** Chunk was on web.js **/
/** chunk id: 409700, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dp: () => N,
  Hh: () => C,
  ZP: () => R,
  hq: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk36703 = require("./36703.js"),
  Chunk74538 = require("./74538.js"),
  Chunk125900 = require("./125900.js"),
  Chunk824690 = require("./824690.js"),
  Chunk240479 = require("./240479.jsx"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk367753 = require("./367753.js"),
  Chunk419718 = require("./419718.js");

function O(e, t, n) {
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
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S() {
  let {
    volume: e,
    onVolumeChange: t
  } = (0, Chunk824690.Z)();
  return <Chunk481060.P3F className={Chunk367753.sliderContainer} onClick={e => e.stopPropagation()}>{<Chunk481060.Text variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t["2JbvKy"])}</Chunk481060.Text>}{<Chunk481060.iRW onValueChange={exports} className={Chunk367753.slider} initialValue={(0, Chunk36703.P)(module)} maxValue={100} />}</Chunk481060.P3F>
}

function A(e) {
  let {
    sound: t,
    forceShowBetaLabel: n = false
  } = e, i = (0, p.V2)({
    location: "SoundmojiBanner"
  }), o = (0, l.e7)([d.default], () => _.ZP.canUseSoundboardEverywhere(d.default.getCurrentUser())), a = (0, l.e7)([u.Z], () => u.Z.getGuildId());
  return n || o || t.guildId === g.X8 || t.guildId === a || !i ? <c.IGR text={"BETA"} color={s.Z.BG_BRAND} className={b.betaBadge} /> : <div className={b.infoNitroContainer}>{<div className={b.infoNitroBackground} />}{<div className={b.infoNitroTextContainer}>{<c.SrA size={"xxs"} color={"white"} className={b.infoNitroIcon} />}{<c.Text variant={"text-xs/medium"} color={"always-white"} className={b.infoNitroText}>{E.intl.string(E.t["BMw+7O"])}</c.Text>}{<c.IGR text={"BETA"} color={s.Z.BG_BRAND} className={b.infoNitroBadge} />}</div>}</div>
}

function N(e) {
  let {
    sound: t
  } = e;
  return <div className={a()(b.infoContainer, b.infoTooltip)}>{<A sound={t} />}{<div className={b.infoSoundContainer}>{<div className={b.infoSoundInnerContainer}>{<c.KY1 size={"sm"} className={b.infoSoundIcon} />}{<c.Text variant={"text-md/semibold"} color={"header-primary"}>{t.name}</c.Text>}</div>}{<div className={b.infoSoundInnerContainer}><c.Text variant={"text-sm/normal"}>{E.intl.string(E.t.D6eYmZ)}</c.Text></div>}</div>}</div>
}

function C(e) {
  let {
    renderPopout: t,
    position: n,
    tooltipText: o,
    children: a,
    setTooltipShowing: s,
    clickableClassName: l
  } = e, [u, d] = i.useState(false), [f, _] = i.useState(String(Date.now())), p = i.useCallback(e => {
    e.stopPropagation(), d(!u)
  }, [u]), h = i.useCallback(() => {
    _(String(Date.now()))
  }, []), m = i.useRef(null);
  i.useEffect(() => {
    var e, t;
    u ? null == (e = m.current) || e.focus() : null == (t = m.current) || t.blur(), null == s || s(u)
  }, [u, s]);
  let g = !u;
  return <c.yRy targetElementRef={m} renderPopout={e => (0, r.jsx)(c.P3F, {
      onClick: e => e.stopPropagation(),
      onMouseOver: e => e.stopPropagation(),
      children: t(T(v({}, e), {
        refreshPosition: h
      }))
    })} align={"center"} nudgeAlignIntoViewport={true} position={n} shouldShow={u} onRequestClose={() => d(false)} animationPosition={"bottom"} positionKey={f} closeOnScroll={true}>{e => (0, r.jsx)(c.ua7, {
      onTooltipHide: () => {
        g && (null == s || s(false))
      },
      onTooltipShow: () => {
        g && (null == s || s(true))
      },
      text: o,
      position: "top",
      shouldShow: g,
      children: t => (0, r.jsx)(c.P3F, T(v({
        innerRef: m
      }, t, e), {
        "aria-label": o,
        onClick: p,
        className: l,
        children: a
      }))
    })}</c.yRy>
}

function R(e) {
  let {
    sound: t,
    channel: n,
    setTooltipShowing: i
  } = e;
  return <r.Fragment>{<C setTooltipShowing={i} renderPopout={() => (0, r.jsx)(S, {})} tooltipText={E.intl.string(E.t["19lt29"])} position={"top"}><c.gj8 size={"md"} color={"currentColor"} className={y.secondaryIcon} /></C>}{<C setTooltipShowing={i} renderPopout={e => (0, r.jsx)(m.Z, v({
        sound: t,
        channel: n
      }, e))} tooltipText={E.intl.string(E.t.KVbJU1)} position={"right"}><c.d3s size={"md"} color={"currentColor"} className={y.secondaryIcon} /></C>}</r.Fragment>
}