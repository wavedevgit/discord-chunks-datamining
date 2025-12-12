/** Chunk was on web.js **/
/** chunk id: 615673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cp: () => B,
  Me: () => M,
  RR: () => Z,
  X5: () => U,
  cv: () => k,
  dp: () => F,
  dr: () => V,
  oo: () => H,
  uY: () => G
});
var Chunk119576 = require("./119576.js"),
  Chunk393347 = require("./393347.js"),
  Chunk274676 = require("./274676.js");

function a(e) {
  let t = (0, o.Dx)(e),
    n = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0,
    a = (0, o.Re)(e),
    s = a ? e.offsetWidth : n,
    l = a ? e.offsetHeight : i,
    c = (0, r.NM)(n) !== s || (0, r.NM)(i) !== l;
  return c && (n = s, i = l), {
    width: n,
    height: i,
    $: c
  }
}

function s(e) {
  return (0, o.kK)(e) ? e : e.contextElement
}

function l(e) {
  let t = s(e);
  if (!(0, o.Re)(t)) return (0, r.ze)(1);
  let n = t.getBoundingClientRect(),
    {
      width: i,
      height: l,
      $: c
    } = a(t),
    u = (c ? (0, r.NM)(n.width) : n.width) / i,
    d = (c ? (0, r.NM)(n.height) : n.height) / l;
  return u && Number.isFinite(u) || (u = 1), d && Number.isFinite(d) || (d = 1), {
    x: u,
    y: d
  }
}
let c = (0, Chunk119576.ze)(0);

function u(e) {
  let t = (0, o.Jj)(e);
  return (0, o.Pf)() && t.visualViewport ? {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  } : c
}

function d(e, t, n) {
  return true === t && (t = false), !!n && (!t || n === (0, o.Jj)(e)) && t
}

function f(e, t, n, i) {
  true === t && (t = false), true === n && (n = false);
  let a = e.getBoundingClientRect(),
    c = s(e),
    f = (0, r.ze)(1);
  t && (i ? (0, o.kK)(i) && (f = l(i)) : f = l(e));
  let p = d(c, n, i) ? u(c) : (0, r.ze)(0),
    _ = (a.left + p.x) / f.x,
    m = (a.top + p.y) / f.y,
    h = a.width / f.x,
    g = a.height / f.y;
  if (c) {
    let e = (0, o.Jj)(c),
      t = i && (0, o.kK)(i) ? (0, o.Jj)(i) : i,
      n = e,
      r = (0, o.wK)(n);
    for (; r && i && t !== n;) {
      let e = l(r),
        t = r.getBoundingClientRect(),
        i = (0, o.Dx)(r),
        a = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
        s = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
      _ *= e.x, m *= e.y, h *= e.x, g *= e.y, _ += a, m += s, n = (0, o.Jj)(r), r = (0, o.wK)(n)
    }
  }
  return (0, r.JB)({
    width: h,
    height: g,
    x: _,
    y: m
  })
}

function p(e, t) {
  let n = (0, o.Lw)(e).scrollLeft;
  return t ? t.left + n : f((0, o.tF)(e)).left + n
}

function _(e, t) {
  let n = e.getBoundingClientRect();
  return {
    x: n.left + t.scrollLeft - p(e, n),
    y: n.top + t.scrollTop
  }
}

function m(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: i,
    strategy: a
  } = e, s = "fixed" === a, c = (0, o.tF)(i), u = !!t && (0, o.tR)(t.floating);
  if (i === c || u && s) return n;
  let d = {
      scrollLeft: 0,
      scrollTop: 0
    },
    p = (0, r.ze)(1),
    m = (0, r.ze)(0),
    h = (0, o.Re)(i);
  if ((h || !h && !s) && (("body" !== (0, o.wk)(i) || (0, o.ao)(c)) && (d = (0, o.Lw)(i)), (0, o.Re)(i))) {
    let e = f(i);
    p = l(i), m.x = e.x + i.clientLeft, m.y = e.y + i.clientTop
  }
  let g = !c || h || s ? (0, r.ze)(0) : _(c, d);
  return {
    width: n.width * p.x,
    height: n.height * p.y,
    x: n.x * p.x - d.scrollLeft * p.x + m.x + g.x,
    y: n.y * p.y - d.scrollTop * p.y + m.y + g.y
  }
}

function h(e) {
  return Array.from(e.getClientRects())
}

function g(e) {
  let t = (0, o.tF)(e),
    n = (0, o.Lw)(e),
    i = e.ownerDocument.body,
    a = (0, r.Fp)(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    s = (0, r.Fp)(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight),
    l = -n.scrollLeft + p(e),
    c = -n.scrollTop;
  return "rtl" === (0, o.Dx)(i).direction && (l += (0, r.Fp)(t.clientWidth, i.clientWidth) - a), {
    width: a,
    height: s,
    x: l,
    y: c
  }
}
let E = 25;

function b(e, t) {
  let n = (0, o.Jj)(e),
    r = (0, o.tF)(e),
    i = n.visualViewport,
    a = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    c = 0;
  if (i) {
    a = i.width, s = i.height;
    let e = (0, o.Pf)();
    (!e || e && "fixed" === t) && (l = i.offsetLeft, c = i.offsetTop)
  }
  let u = p(r);
  if (u <= 0) {
    let e = r.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      i = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
      o = Math.abs(r.clientWidth - t.clientWidth - i);
    o <= E && (a -= o)
  } else u <= E && (a += u);
  return {
    width: a,
    height: s,
    x: l,
    y: c
  }
}
let y = new Set(["absolute", "fixed"]);

function O(e, t) {
  let n = f(e, true, "fixed" === t),
    i = n.top + e.clientTop,
    a = n.left + e.clientLeft,
    s = (0, o.Re)(e) ? l(e) : (0, r.ze)(1),
    c = e.clientWidth * s.x,
    u = e.clientHeight * s.y;
  return {
    width: c,
    height: u,
    x: a * s.x,
    y: i * s.y
  }
}

function v(e, t, n) {
  let i;
  if ("viewport" === t) i = b(e, n);
  else if ("document" === t) i = g((0, o.tF)(e));
  else if ((0, o.kK)(t)) i = O(t, n);
  else {
    let n = u(e);
    i = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height
    }
  }
  return (0, r.JB)(i)
}

function S(e, t) {
  let n = (0, o.Ow)(e);
  return !(n === t || !(0, o.kK)(n) || (0, o.Py)(n)) && ("fixed" === (0, o.Dx)(n).position || S(n, t))
}

function I(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = (0, o.Kx)(e, [], false).filter(e => (0, o.kK)(e) && "body" !== (0, o.wk)(e)),
    i = null,
    a = "fixed" === (0, o.Dx)(e).position,
    s = a ? (0, o.Ow)(e) : e;
  for (;
    (0, o.kK)(s) && !(0, o.Py)(s);) {
    let t = (0, o.Dx)(s),
      n = (0, o.hT)(s);
    n || "fixed" !== t.position || (i = null), (a ? !n && !i : !n && "static" === t.position && !!i && y.has(i.position) || (0, o.ao)(s) && !n && S(e, s)) ? r = r.filter(e => e !== s) : i = t, s = (0, o.Ow)(s)
  }
  return t.set(e, r), r
}

function T(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: i,
    strategy: a
  } = e, s = [..."clippingAncestors" === n ? (0, o.tR)(t) ? [] : I(t, this._c) : [].concat(n), i], l = s[0], c = s.reduce((e, n) => {
    let i = v(t, n, a);
    return e.top = (0, r.Fp)(i.top, e.top), e.right = (0, r.VV)(i.right, e.right), e.bottom = (0, r.VV)(i.bottom, e.bottom), e.left = (0, r.Fp)(i.left, e.left), e
  }, v(t, l, a));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  }
}

function C(e) {
  let {
    width: t,
    height: n
  } = a(e);
  return {
    width: t,
    height: n
  }
}

function A(e, t, n) {
  let i = (0, o.Re)(t),
    a = (0, o.tF)(t),
    s = "fixed" === n,
    l = f(e, true, s, t),
    c = {
      scrollLeft: 0,
      scrollTop: 0
    },
    u = (0, r.ze)(0);

  function d() {
    u.x = p(a)
  }
  if (i || !i && !s)
    if (("body" !== (0, o.wk)(t) || (0, o.ao)(a)) && (c = (0, o.Lw)(t)), i) {
      let e = f(t, true, s, t);
      u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
    } else a && d();
  s && !i && a && d();
  let m = !a || i || s ? (0, r.ze)(0) : _(a, c);
  return {
    x: l.left + c.scrollLeft - u.x - m.x,
    y: l.top + c.scrollTop - u.y - m.y,
    width: l.width,
    height: l.height
  }
}

function N(e) {
  return "static" === (0, o.Dx)(e).position
}

function P(e, t) {
  if (!(0, o.Re)(e) || "fixed" === (0, o.Dx)(e).position) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (0, o.tF)(e) === n && (n = n.ownerDocument.body), n
}

function R(e, t) {
  let n = (0, o.Jj)(e);
  if ((0, o.tR)(e)) return n;
  if (!(0, o.Re)(e)) {
    let t = (0, o.Ow)(e);
    for (; t && !(0, o.Py)(t);) {
      if ((0, o.kK)(t) && !N(t)) return t;
      t = (0, o.Ow)(t)
    }
    return n
  }
  let r = P(e, t);
  for (; r && (0, o.Ze)(r) && N(r);) r = P(r, t);
  return r && (0, o.Py)(r) && N(r) && !(0, o.hT)(r) ? n : r || (0, o.gQ)(e) || n
}
let w = async function(e) {
  let t = this.getOffsetParent || R,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: A(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  }
};

function D(e) {
  return "rtl" === (0, o.Dx)(e).direction
}
let x = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m,
  getDocumentElement: Chunk274676.tF,
  getClippingRect: T,
  getOffsetParent: R,
  getElementRects: w,
  getClientRects: h,
  getDimensions: C,
  getScale: l,
  isElement: Chunk274676.kK,
  isRTL: D
};

function L(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function j(e, t) {
  let n, i = null,
    a = (0, o.tF)(e);

  function s() {
    var e;
    clearTimeout(n), null == (e = i) || e.disconnect(), i = null
  }

  function l(o, c) {
    true === o && (o = false), true === c && (c = 1), s();
    let u = e.getBoundingClientRect(),
      {
        left: d,
        top: f,
        width: p,
        height: _
      } = u;
    if (o || t(), !p || !_) return;
    let m = (0, r.GW)(f),
      h = (0, r.GW)(a.clientWidth - (d + p)),
      g = {
        rootMargin: -m + "px " + -h + "px " + -(0, r.GW)(a.clientHeight - (f + _)) + "px " + -(0, r.GW)(d) + "px",
        threshold: (0, r.Fp)(0, (0, r.VV)(1, c)) || 1
      },
      E = true;

    function b(t) {
      let r = t[0].intersectionRatio;
      if (r !== c) {
        if (!E) return l();
        r ? l(false, r) : n = setTimeout(() => {
          l(false, 1e-7)
        }, 1e3)
      }
      1 !== r || L(u, e.getBoundingClientRect()) || l(), E = false
    }
    try {
      i = new IntersectionObserver(b, {
        ...g,
        root: a.ownerDocument
      })
    } catch (e) {
      i = new IntersectionObserver(b, g)
    }
    i.observe(e)
  }
  return l(true), s
}

function M(e, t, n, r) {
  let i;
  true === r && (r = {});
  let {
    ancestorScroll: a = true,
    ancestorResize: l = true,
    elementResize: c = "function" == typeof ResizeObserver,
    layoutShift: u = "function" == typeof IntersectionObserver,
    animationFrame: d = false
  } = r, p = s(e), _ = a || l ? [...p ? (0, o.Kx)(p) : [], ...(0, o.Kx)(t)] : [];
  _.forEach(e => {
    a && e.addEventListener("scroll", n, {
      passive: true
    }), l && e.addEventListener("resize", n)
  });
  let m = p && u ? j(p, n) : null,
    h = false,
    g = null;
  c && (g = new ResizeObserver(e => {
    let [r] = e;
    r && r.target === p && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var e;
      null == (e = g) || e.observe(t)
    })), n()
  }), p && !d && g.observe(p), g.observe(t));
  let E = d ? f(e) : null;

  function b() {
    let t = f(e);
    E && !L(E, t) && n(), E = t, i = requestAnimationFrame(b)
  }
  return d && b(), n(), () => {
    var e;
    _.forEach(e => {
      a && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
    }), null == m || m(), null == (e = g) || e.disconnect(), g = null, d && cancelAnimationFrame(i)
  }
}
let k = Chunk393347.cv,
  U = Chunk393347.X5,
  G = Chunk393347.uY,
  Z = Chunk393347.RR,
  F = Chunk393347.dp,
  B = Chunk393347.Cp,
  V = Chunk393347.dr,
  H = (e, t, n) => {
    let r = new Map,
      o = {
        platform: x,
        ...n
      },
      a = {
        ...o.platform,
        _c: r
      };
    return (0, i.oo)(e, t, {
      ...o,
      platform: a
    })
  }