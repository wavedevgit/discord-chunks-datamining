/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  o = n(692547),
  a = n(481060),
  s = n(220082),
  l = n(420596),
  c = n(880563),
  u = n(687158),
  d = n(484459),
  f = n(695346),
  p = n(981631),
  _ = n(249648);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = function(e) {
  var {
    style: t,
    src: n,
    backgroundSrc: h,
    userId: g,
    pulseSpeakingIndicator: b = !1,
    speaking: y = !1
  } = e, O = v(e, ["style", "src", "backgroundSrc", "userId", "pulseSpeakingIndicator", "speaking"]);
  let S = null != h ? h : n,
    I = (0, s.ZP)(S, o.Z.unsafe_rawColors.PRIMARY_800.css),
    T = (0, l.c)(!0, "VideoBackground-web").enabled,
    N = (0, u.ZP)(null != g ? g : p.lds),
    A = null == N ? void 0 : N.getBannerURL({
      size: 1024,
      canAnimate: f.QK.getSetting()
    });
  if (i.useEffect(() => {
      null != g && T && (0, d.Z)(g, void 0, {
        dispatchWait: !0
      })
    }, [T, g]), null == n) return null;
  let C = (0, r.jsx)(a.qEK, m({
      className: _.avatarWrapper,
      src: n
    }, O)),
    R = E(m({}, t), {
      backgroundColor: I
    });
  return null != A && y && T && (R.backgroundImage = "url(".concat(A, ")"), R.backgroundSize = "cover"), (0, r.jsx)("div", {
    style: R,
    className: _.background,
    children: b ? (0, r.jsx)(c.Z, {
      shouldAnimate: y,
      children: C
    }) : C
  })
}