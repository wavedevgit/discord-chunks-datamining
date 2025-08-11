/** Chunk was on web.js **/
/** chunk id: 289823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk974674 = require("./974674.js"),
  Chunk438784 = require("./438784.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.js"),
  Chunk3682 = require("./3682.js"),
  Chunk630403 = require("./630403.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let g = {};

function E(e, t, n) {
  let r = c.ny6[e],
    i = r.size / (d.z3 + d.o),
    o = i * d.z3,
    a = i * d.o,
    l = a + o / 2,
    u = {
      statusCoords: (0, s.Vq)(r, c.Skl.ONLINE, false, t),
      frontAvatarSizePx: o,
      backAvatarSizePx: i,
      frontAvatarOffsetPx: a,
      frontAvatarCenter: l
    };
  return g[n] = u, u
}
let b = 1 / 4;

function y(e) {
  let {
    height: t,
    fillColor: n
  } = e;
  return <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: t / 2,
      backgroundColor: n,
      height: t,
      width: t * d.jR
    }}><l.b className={f.dots} dotRadius={t * b} /></div>
}

function O(e) {
  let {
    isTyping: t,
    statusCoords: n,
    status: i
  } = e, o = (0, c.vjg)(c.Skl.ONLINE);
  return t ? <div style={{
      position: "absolute",
      top: n.y,
      left: n.x
    }}><y height={n.height} fillColor={o} /></div> : null != i ? <c.qbd size={n.height} status={i} style={{
      position: "absolute",
      top: n.y,
      left: n.x
    }} /> : null
}

function v(e) {
  let {
    src: t,
    size: n
  } = e;
  return <img className={f.circularImage} src={t} alt={""} width={n} height={n} />
}
let I = {
  [Chunk481060.EFr.SIZE_16]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_16,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_16,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_16
  },
  [Chunk481060.EFr.SIZE_20]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_20,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_20,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_20
  },
  [Chunk481060.EFr.SIZE_24]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_24,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_24,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_24
  },
  [Chunk481060.EFr.SIZE_32]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_32,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_32,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [Chunk481060.EFr.SIZE_40]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_32,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_32,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_32
  },
  [Chunk481060.EFr.SIZE_48]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_40,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_40,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_40
  },
  [Chunk481060.EFr.SIZE_56]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_56,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_56,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_56
  },
  [Chunk481060.EFr.SIZE_80]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_80,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_80,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_80
  },
  [Chunk481060.EFr.SIZE_120]: {
    default: Chunk686546.QS.DIAGONAL_FACEPILE_120,
    typing: Chunk686546.QS.DIAGONAL_FACEPILE_TYPING_120,
    status: Chunk686546.QS.DIAGONAL_FACEPILE_STATUS_120
  }
};

function T(e, t, n) {
  return t ? I[n].typing : e ? I[n].status : I[n].default
}
let S = function(e) {
  var {
    backSrc: t,
    frontSrc: n,
    size: o,
    isTyping: s,
    status: l,
    style: d,
    className: _
  } = e, m = h(e, ["backSrc", "frontSrc", "size", "isTyping", "status", "style", "className"]);
  let {
    size: b
  } = c.ny6[o], {
    statusCoords: y,
    frontAvatarOffsetPx: I,
    frontAvatarSizePx: S,
    backAvatarSizePx: A
  } = i.useMemo(() => {
    var e;
    let t = "".concat(b, "-").concat(s);
    return null != (e = g[t]) ? e : E(o, s, t)
  }, [b, s, o]), N = T(null != l, s, o);
  return <div style={p({
      width: b,
      height: b
    }, d)} aria-label={m["aria-label"]} aria-hidden={m["aria-hidden"]} className={a()(f.container, _)}>{<u.ZP mask={N} height={b} width={b}>{<img src={t} alt={""} width={A} height={A} />}{<div style={{
          position: "absolute",
          top: I,
          left: I
        }}><v src={n} size={S} isTyping={s} status={l} /></div>}</u.ZP>}{<O statusCoords={y} status={l} isTyping={s} />}</div>
}