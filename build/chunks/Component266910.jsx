/** Chunk was on web.js **/
/** chunk id: 266910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk420596 = require("./420596.js"),
  Chunk880563 = require("./880563.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk484459 = require("./484459.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk781416 = require("./781416.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = function(e) {
  var {
    style: t,
    src: n,
    backgroundSrc: h,
    userId: g,
    pulseSpeakingIndicator: y = false,
    speaking: O = false
  } = e, v = b(e, ["style", "src", "backgroundSrc", "userId", "pulseSpeakingIndicator", "speaking"]);
  let I = null != h ? h : n,
    T = (0, s.ZP)(I, a.Z.unsafe_rawColors.PRIMARY_800.css),
    S = (0, l.c)(true, "VideoBackground-web").enabled,
    A = (0, u.ZP)(null != g ? g : _.lds),
    C = null == A ? true : A.getBannerURL({
      size: 1024,
      canAnimate: f.QK.getSetting()
    });
  if (i.useEffect(() => {
      null != g && S && (0, d.Z)(g, true, {
        dispatchWait: true
      })
    }, [S, g]), null == n) return null;
  let N = (0, r.jsx)(o.qEK, m({
      className: p.avatarWrapper,
      src: n
    }, v)),
    R = E(m({}, t), {
      backgroundColor: T
    });
  return null != C && O && S && (R.backgroundImage = "url(".concat(C, ")"), R.backgroundSize = "cover"), (0, r.jsx)("div", {
    style: R,
    className: p.background,
    children: y ? (0, r.jsx)(c.Z, {
      shouldAnimate: O,
      children: N
    }) : N
  })
}