/** Chunk was on web.js **/
/** chunk id: 865672, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  De: () => _,
  EJ: () => m,
  Ic: () => p,
  JU: () => f
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk981631 = require("./981631.js"),
  Chunk842926 = require("./842926.js");
let d = RegExp("\\p{Extended_Pictographic}", "gu");

function f(e) {
  var t, n, r;
  let {
    colorStrings: i,
    useReducedMotion: o,
    roleStyle: s,
    includeConvenienceGlow: l,
    animateGradient: d
  } = e, f = "username" === s, p = "dot" === s, _ = f && l, m = null != (t = null == i ? true : i.primaryColor) ? t : c.Pbq, h = {
    "--custom-gradient-color-1": m,
    "--custom-gradient-color-2": null != (n = null == i ? true : i.secondaryColor) ? n : m,
    "--custom-gradient-color-3": null != (r = null == i ? true : i.tertiaryColor) ? r : m
  }, g = (null == i ? true : i.tertiaryColor) != null ? u.threeColorGradient : u.twoColorGradient;
  return {
    gradientStyle: h,
    gradientClassname: a()(g, {
      [u.usernameGradient]: f,
      [u.convenienceGlowGradient]: _,
      [u.convenienceGlowGradientActive]: _ && d,
      [u.gradientDotAnimation]: !o && p,
      [u.animateGradient]: d && f
    }),
    gradientGlowClassname: a()(g, u.usernameGlow, {
      [u.usernameGradient]: f,
      [u.animateGradient]: d && f,
      [u.usernameGlowActive]: f && d
    })
  }
}

function p(e) {
  let {
    colorStrings: t,
    roleStyle: n,
    includeConvenienceGlow: r,
    animateGradient: o
  } = e, a = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
  return i.useMemo(() => f({
    colorStrings: t,
    useReducedMotion: a,
    roleStyle: n,
    includeConvenienceGlow: r,
    animateGradient: o
  }), [t, n, r, a, o])
}

function _(e, t, n) {
  return i.useMemo(() => {
    let i = [e, t, n].filter(e => null != e),
      o = i.length >= 2,
      a = i.length > 1 ? 100 / (i.length - 1) : 0,
      s = i.map((e, t) => (0, r.jsx)("stop", {
        offset: "".concat(t * a, "%"),
        style: {
          stopColor: e
        }
      }, t)),
      l = i.join("");
    return {
      hasGradient: o,
      stops: s,
      gradientId: "dotGradient-".concat(l),
      animatedGradientId: "dotAnimatedGradient-".concat(l)
    }
  }, [e, t, n])
}

function m(e, t) {
  return i.useMemo(() => {
    let n;
    if (null == e) return e;
    let i = new RegExp(d),
      o = [],
      s = 0;
    for (; null !== (n = i.exec(e));) n.index > s && o.push(e.slice(s, n.index)), o.push((0, r.jsx)("span", {
      className: a()(u.emoji, t),
      children: n[0]
    }, "emoji".concat(n.index))), s = i.lastIndex;
    return s < e.length && o.push(e.slice(s)), o
  }, [e, t])
}