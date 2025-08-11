/** Chunk was on web.js **/
/** chunk id: 73563, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g,
  e: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk507675 = require("./507675.js"),
  Chunk768030 = require("./768030.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var h = function(e) {
  return e[e.TOP = 0] = "TOP", e[e.BOTTOM = 1] = "BOTTOM", e
}({});

function m(e) {
  let {
    disableGradients: t = false,
    renderHeader: n,
    renderBottomLeft: o,
    renderBottomCenter: a,
    renderBottomRight: c,
    renderCenter: d
  } = e, f = 0 === t || true === t, _ = 1 === t || true === t, p = i.useRef(null);
  return <s.JcV containerRef={p}><div className={u.videoControls} ref={p}>{!f && <div className={u.gradientTop} />}{!_ && <div className={u.gradientBottom} />}{<div className={u.topControls}>{null == n ? true : n()}</div>}{null == d ? true : d()}{<div className={u.bottomControls}>{<l.Z grow={1} align={l.Z.Align.CENTER} className={u.edgeControls}>{null == o ? true : o()}</l.Z>}{<l.Z grow={1} justify={l.Z.Justify.CENTER} align={l.Z.Align.CENTER}>{null == a ? true : a()}</l.Z>}{" "}{<l.Z grow={1} justify={l.Z.Justify.END} align={l.Z.Align.CENTER} className={u.edgeControls}>{null == c ? true : c()}</l.Z>}</div>}</div></s.JcV>
}

function g(e) {
  var {
    screenMessage: t,
    onDoubleClick: n,
    onActive: i,
    onForceIdle: o,
    idle: s,
    children: l,
    renderChatToasts: d,
    renderVoiceChannelEffects: p,
    style: h
  } = e, g = _(e, ["screenMessage", "onDoubleClick", "onActive", "onForceIdle", "idle", "children", "renderChatToasts", "renderVoiceChannelEffects", "style"]);
  return <div className={a()(u.root, {
      [u.idle]: s
    })} style={h} onMouseMove={i} onMouseDown={i} onMouseLeave={o} onDoubleClick={n}>{l}{null != t ? <c.Z{...f({
      size: "large"
    }, t)} /> : null}{<m{...f({}, g)} />}{null == d ? true : d()}{null == p ? true : p()}</div>
}