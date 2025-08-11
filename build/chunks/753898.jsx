/** Chunk was on web.js **/
/** chunk id: 753898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk374415 = require("./374415.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk187237 = require("./187237.jsx"),
  Chunk769409 = require("./769409.js"),
  Chunk518311 = require("./518311.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk967128 = require("./967128.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk906667 = require("./906667.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  var t;
  let {
    channel: n,
    children: y,
    user: v
  } = e, T = (0, i.e7)([l.Z], () => l.Z.useReducedMotion), S = null != (t = (0, d.ZP)(n)) ? t : "", {
    avatarDecorationSrc: A,
    eventHandlers: N,
    isAnimating: C
  } = (0, m.Z)({
    userId: null == v ? true : v.id,
    size: s.EFr.SIZE_80,
    animateOnHover: true
  }), R = () => {
    let e = !T && C;
    return n.isMultiUserDM() ? <_.v channel={n} editable={true} location={c.Z.EMPTY_GROUP_DM}><f.Z channel={n} size={s.EFr.SIZE_80} experimentLocation={"empty_messages"} animated={e} aria-label={S} /></_.v> : <s.qEK aria-label={S} size={s.EFr.SIZE_80} src={(0, u.x)(n, 80, e)} avatarDecoration={A} />
  };
  return <g.ZP{...I(O({
    channelId: n.id
  }, N), {
    children: [R(), (0, r.jsx)(g.Ot, {
      children: S
    }), (0, r.jsx)(g.jz, {
      children: y
    }), n.isMultiUserDM() && (0, r.jsxs)(a.h, {
      className: b.buttonContainer,
      children: [(0, r.jsx)(h.l, {
        channel: n
      }), (0, r.jsx)(o.z, {
        icon: s.vdY,
        variant: "secondary",
        text: E.intl.string(E.t["5Q9+/P"]),
        "aria-label": E.intl.string(E.t["5Q9+/P"]),
        onClick: () => (0, p.B)(n.id, c.Z.EMPTY_GROUP_DM)
      })]
    })]
  })} />
}