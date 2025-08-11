/** Chunk was on web.js **/
/** chunk id: 987106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk744969 = require("./744969.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk49012 = require("./49012.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk280501 = require("./280501.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk127879 = require("./127879.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  switch (e) {
    case d.ZJ.PRIMARY:
    case d.ZJ.PREMIUM:
      return s.zx.Colors.BRAND;
    case d.ZJ.SUCCESS:
      return s.zx.Colors.GREEN;
    case d.ZJ.DESTRUCTIVE:
      return s.zx.Colors.RED;
    default:
      return s.zx.Colors.PRIMARY
  }
}

function T(e) {
  let {
    url: t,
    onSelect: n
  } = e;
  return _.wS && null != t ? <l.v2r navId={"component-button"} onClose={c.Zy} aria-label={g.intl.string(g.t.tvTXy8)} onSelect={n}><l.kSQ><l.sNh id={"copy"} label={g.intl.string(g.t.uHhnfX)} action={() => (0, _.JG)(t)} /></l.kSQ></l.v2r> : null
}

function S(e) {
  let t, {
      label: n,
      style: i,
      disabled: _,
      emoji: g,
      url: b,
      skuId: O
    } = e,
    {
      executeStateUpdate: S,
      visualState: A,
      isDisabled: N
    } = (0, h.Ee)(e),
    C = (0, f.s)(O),
    R = null != O && i === d.ZJ.PREMIUM,
    P = R && (null == C ? true : C.disabled),
    w = R ? null == C ? true : C.label : n,
    D = null != g,
    L = null != w && w.length > 0,
    x = i === d.ZJ.LINK && null != b && b.length > 0,
    M = A === m.gH.LOADING || R && null == C;
  return t = x ? () => {
    (0, p.q)({
      href: null != b ? b : "",
      shouldConfirm: true
    })
  } : R ? null != C && false === C.disabled ? C.onClick : a.noop : () => S(), <s.zx data-migration-pending={true} color={I(i)} size={s.zx.Sizes.SMALL} disabled={_ || A === m.gH.DISABLED || N || P} onClick={t} onContextMenu={e => {
      x && (0, c.vq)(e, e => (0, r.jsx)(T, v(y({}, e), {
        url: b
      })))
    }} role={x ? "link" : "button"}>{<div className={o()(E.content, {
        [E.hidden]: M,
        [E.premium]: R
      })} aria-hidden={M}>{R ? <div className={E.shopIcon}><l.EOn size={"xs"} color={"white"} /></div> : null}{D ? <u.Z className={o()({
          [E.textEmoji]: L
        })} src={g.src} emojiId={g.id} emojiName={g.name} animated={g.animated} /> : null}{L ? <div className={E.label}>{w}</div> : null}{x ? <l.rgF size={"xs"} color={"currentColor"} className={E.launchIcon} /> : null}</div>}{M ? <div className={E.loading}><l.bbz dotRadius={3.5} themed={true} /></div> : null}</s.zx>
}