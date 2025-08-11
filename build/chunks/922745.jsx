/** Chunk was on web.js **/
/** chunk id: 922745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I,
  r: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk312956 = require("./312956.js"),
  Chunk501967 = require("./501967.jsx"),
  Chunk19780 = require("./19780.js"),
  Chunk540028 = require("./540028.jsx"),
  Chunk507675 = require("./507675.jsx"),
  Chunk273716 = require("./273716.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk992955 = require("./992955.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e) {
  let {
    title: t,
    onJumpToChannel: n,
    onHide: i,
    idle: o,
    preventIdleComponent: s
  } = e, c = (0, a.e7)([f.Z], () => f.Z.getChannelId()), d = null != c ? <_.Z voiceChannelId={c} idle={o} /> : null, {
    enabled: p
  } = u.Z.useExperiment({
    location: "PictureInPicturePlayer"
  });
  return <s className={g.headerIdleContainer}>{<l.P3F className={g.headerTitle} onClick={n}>{<l.whL size={"custom"} color={"currentColor"} aria-label={m.intl.string(m.t.mSfLs7)} className={g.backButton} width={20} height={20} />}{<l.X6q variant={"heading-md/normal"} className={g.headerText} color={"always-white"}>{t}</l.X6q>}</l.P3F>}{p && null != i ? <h.Z onClick={i} label={m.intl.string(m.t.BEuDEh)} /> : null}{d}</s>
}

function I(e) {
  var {
    children: t,
    idle: n,
    onJumpToChannel: i,
    onHide: a,
    backgroundKey: l,
    onActive: u,
    onForceIdle: f,
    renderBottomLeftControls: _,
    renderBottomRightControls: h,
    screenMessage: m,
    hideControls: E = false,
    className: O,
    innerClassName: I,
    videoControlsClassName: T
  } = e, S = y(e, ["children", "idle", "onJumpToChannel", "onHide", "backgroundKey", "onActive", "onForceIdle", "renderBottomLeftControls", "renderBottomRightControls", "screenMessage", "hideControls", "className", "innerClassName", "videoControlsClassName"]);
  return <div onMouseMove={u} onMouseDown={u} onMouseLeave={f} className={o()(g.pictureInPictureVideo, {
      [g.idle]: n
    }, O)} onDoubleClick={i}>{<s.W><d.B className={I}>{t}</d.B></s.W>}{null != m ? <p.Z{...b({
      size: "small"
    }, m)} /> : null}{!E && <div className={o()(g.videoControls, T, "theme-dark")}>{<div className={g.topControls}><v{...b({
          idle: n,
          onJumpToChannel: i,
          onHide: a
        }, S)} /></div>}{<div className={g.bottomControls}>{<c.Z grow={0} shrink={1} basis={"50%"} align={c.Z.Align.CENTER} className={g.bottomLeftControls}>{null == _ ? true : _()}</c.Z>}{<c.Z grow={0} shrink={1} justify={c.Z.Justify.END} basis={"50%"} align={c.Z.Align.CENTER}>{null == h ? true : h()}</c.Z>}</div>}</div>}</div>
}