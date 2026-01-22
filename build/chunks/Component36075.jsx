/** Chunk was on web.js **/
/** chunk id: 36075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CR: () => h,
  RM: () => _,
  Wq: () => f,
  v5: () => p
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk652215 = require("./652215.js"),
  Chunk191017 = require("./191017.js");
let d = RegExp("\\p{Extended_Pictographic}", "gu");

function f(e) {
  var t, n, r;
  let {
    colorStrings: i,
    useReducedMotion: a,
    roleStyle: o,
    includeConvenienceGlow: l,
    animateGradient: d
  } = e, f = "username" === o, p = "dot" === o, _ = f && l, h = null != (t = null == i ? true : i.primaryColor) ? t : c.TpD, m = {
    "--custom-gradient-color-1": h,
    "--custom-gradient-color-2": null != (n = null == i ? true : i.secondaryColor) ? n : h,
    "--custom-gradient-color-3": null != (r = null == i ? true : i.tertiaryColor) ? r : h
  }, g = (null == i ? true : i.tertiaryColor) != null ? u.a7 : u.oD;
  return {
    gradientStyle: m,
    gradientClassname: s()(g, {
      [u.lC]: f,
      [u.FQ]: _,
      [u.Xy]: _ && d,
      [u.yJ]: !a && p,
      [u.q]: d && f
    }),
    gradientGlowClassname: s()(g, u.uk, {
      [u.lC]: f,
      [u.q]: d && f,
      [u.yb]: f && d
    })
  }
}

function p(e) {
  let {
    colorStrings: t,
    roleStyle: n,
    includeConvenienceGlow: r,
    animateGradient: a
  } = e, s = (0, o.bG)([l.A], () => l.A.useReducedMotion);
  return i.useMemo(() => f({
    colorStrings: t,
    useReducedMotion: s,
    roleStyle: n,
    includeConvenienceGlow: r,
    animateGradient: a
  }), [t, n, r, s, a])
}

function _(e, t, n) {
  return i.useMemo(() => {
    let i = [e, t, n].filter(e => null != e),
      a = i.length >= 2,
      s = i.length > 1 ? 100 / (i.length - 1) : 0,
      o = i.map((e, t) => (0, r.jsx)("stop", {
        offset: "".concat(t * s, "%"),
        style: {
          stopColor: e
        }
      }, t)),
      l = i.join("");
    return {
      hasGradient: a,
      stops: o,
      gradientId: "dotGradient-".concat(l),
      animatedGradientId: "dotAnimatedGradient-".concat(l)
    }
  }, [e, t, n])
}

function h(e, t) {
  return i.useMemo(() => {
    let n;
    if (null == e) return e;
    let i = new RegExp(d),
      a = [],
      o = 0;
    for (; null !== (n = i.exec(e));) n.index > o && a.push(e.slice(o, n.index)), a.push((0, r.jsx)("span", {
      className: s()(u.Zg, t),
      children: n[0]
    }, "emoji".concat(n.index))), o = i.lastIndex;
    return o < e.length && a.push(e.slice(o)), a
  }, [e, t])
}