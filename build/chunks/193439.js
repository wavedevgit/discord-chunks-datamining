/** Chunk was on web.js **/
/** chunk id: 193439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BN: () => G,
  ER: () => H,
  Ej: () => F,
  RK: () => U,
  UU: () => V,
  cY: () => k,
  jD: () => B,
  ll: () => j,
  rD: () => Y
});
var Chunk56027 = require("./56027.js"),
  Chunk764647 = require("./764647.js"),
  Chunk84157 = require("./84157.js");

function o(e) {
  let t = (0, a.L9)(e),
    n = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0,
    o = (0, a.sb)(e),
    s = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : i,
    c = (0, r.LI)(n) !== s || (0, r.LI)(i) !== l;
  return c && (n = s, i = l), {
    width: n,
    height: i,
    $: c
  }
}

function s(e) {
  return (0, a.vq)(e) ? e : e.contextElement
}

function l(e) {
  let t = s(e);
  if (!(0, a.sb)(t)) return (0, r.Jx)(1);
  let n = t.getBoundingClientRect(),
    {
      width: i,
      height: l,
      $: c
    } = o(t),
    u = (c ? (0, r.LI)(n.width) : n.width) / i,
    d = (c ? (0, r.LI)(n.height) : n.height) / l;
  return u && Number.isFinite(u) || (u = 1), d && Number.isFinite(d) || (d = 1), {
    x: u,
    y: d
  }
}
let c = (0, Chunk56027.Jx)(0);

function u(e) {
  let t = (0, a.zk)(e);
  return (0, a.Tc)() && t.visualViewport ? {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  } : c
}

function d(e, t, n) {
  return true === t && (t = false), !!n && (!t || n === (0, a.zk)(e)) && t
}

function f(e, t, n, i) {
  true === t && (t = false), true === n && (n = false);
  let o = e.getBoundingClientRect(),
    c = s(e),
    f = (0, r.Jx)(1);
  t && (i ? (0, a.vq)(i) && (f = l(i)) : f = l(e));
  let p = d(c, n, i) ? u(c) : (0, r.Jx)(0),
    _ = (o.left + p.x) / f.x,
    h = (o.top + p.y) / f.y,
    m = o.width / f.x,
    g = o.height / f.y;
  if (c) {
    let e = (0, a.zk)(c),
      t = i && (0, a.vq)(i) ? (0, a.zk)(i) : i,
      n = e,
      r = (0, a._m)(n);
    for (; r && i && t !== n;) {
      let e = l(r),
        t = r.getBoundingClientRect(),
        i = (0, a.L9)(r),
        o = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
        s = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
      _ *= e.x, h *= e.y, m *= e.x, g *= e.y, _ += o, h += s, n = (0, a.zk)(r), r = (0, a._m)(n)
    }
  }
  return (0, r.B1)({
    width: m,
    height: g,
    x: _,
    y: h
  })
}

function p(e, t) {
  let n = (0, a.CP)(e).scrollLeft;
  return t ? t.left + n : f((0, a.ep)(e)).left + n
}

function _(e, t) {
  let n = e.getBoundingClientRect();
  return {
    x: n.left + t.scrollLeft - p(e, n),
    y: n.top + t.scrollTop
  }
}

function h(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: i,
    strategy: o
  } = e, s = "fixed" === o, c = (0, a.ep)(i), u = !!t && (0, a.Tf)(t.floating);
  if (i === c || u && s) return n;
  let d = {
      scrollLeft: 0,
      scrollTop: 0
    },
    p = (0, r.Jx)(1),
    h = (0, r.Jx)(0),
    m = (0, a.sb)(i);
  if ((m || !m && !s) && (("body" !== (0, a.mq)(i) || (0, a.ZU)(c)) && (d = (0, a.CP)(i)), (0, a.sb)(i))) {
    let e = f(i);
    p = l(i), h.x = e.x + i.clientLeft, h.y = e.y + i.clientTop
  }
  let g = !c || m || s ? (0, r.Jx)(0) : _(c, d);
  return {
    width: n.width * p.x,
    height: n.height * p.y,
    x: n.x * p.x - d.scrollLeft * p.x + h.x + g.x,
    y: n.y * p.y - d.scrollTop * p.y + h.y + g.y
  }
}

function m(e) {
  return Array.from(e.getClientRects())
}

function g(e) {
  let t = (0, a.ep)(e),
    n = (0, a.CP)(e),
    i = e.ownerDocument.body,
    o = (0, r.T9)(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    s = (0, r.T9)(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight),
    l = -n.scrollLeft + p(e),
    c = -n.scrollTop;
  return "rtl" === (0, a.L9)(i).direction && (l += (0, r.T9)(t.clientWidth, i.clientWidth) - o), {
    width: o,
    height: s,
    x: l,
    y: c
  }
}
let E = 25;

function y(e, t) {
  let n = (0, a.zk)(e),
    r = (0, a.ep)(e),
    i = n.visualViewport,
    o = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    c = 0;
  if (i) {
    o = i.width, s = i.height;
    let e = (0, a.Tc)();
    (!e || e && "fixed" === t) && (l = i.offsetLeft, c = i.offsetTop)
  }
  let u = p(r);
  if (u <= 0) {
    let e = r.ownerDocument,
      t = e.body,
      n = getComputedStyle(t),
      i = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
      a = Math.abs(r.clientWidth - t.clientWidth - i);
    a <= E && (o -= a)
  } else u <= E && (o += u);
  return {
    width: o,
    height: s,
    x: l,
    y: c
  }
}
let b = new Set(["absolute", "fixed"]);

function O(e, t) {
  let n = f(e, true, "fixed" === t),
    i = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = (0, a.sb)(e) ? l(e) : (0, r.Jx)(1),
    c = e.clientWidth * s.x,
    u = e.clientHeight * s.y;
  return {
    width: c,
    height: u,
    x: o * s.x,
    y: i * s.y
  }
}

function v(e, t, n) {
  let i;
  if ("viewport" === t) i = y(e, n);
  else if ("document" === t) i = g((0, a.ep)(e));
  else if ((0, a.vq)(t)) i = O(t, n);
  else {
    let n = u(e);
    i = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height
    }
  }
  return (0, r.B1)(i)
}

function A(e, t) {
  let n = (0, a.$4)(e);
  return !(n === t || !(0, a.vq)(n) || (0, a.eu)(n)) && ("fixed" === (0, a.L9)(n).position || A(n, t))
}

function I(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = (0, a.v9)(e, [], false).filter(e => (0, a.vq)(e) && "body" !== (0, a.mq)(e)),
    i = null,
    o = "fixed" === (0, a.L9)(e).position,
    s = o ? (0, a.$4)(e) : e;
  for (;
    (0, a.vq)(s) && !(0, a.eu)(s);) {
    let t = (0, a.L9)(s),
      n = (0, a.sQ)(s);
    n || "fixed" !== t.position || (i = null), (o ? !n && !i : !n && "static" === t.position && !!i && b.has(i.position) || (0, a.ZU)(s) && !n && A(e, s)) ? r = r.filter(e => e !== s) : i = t, s = (0, a.$4)(s)
  }
  return t.set(e, r), r
}

function S(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: i,
    strategy: o
  } = e, s = [..."clippingAncestors" === n ? (0, a.Tf)(t) ? [] : I(t, this._c) : [].concat(n), i], l = s[0], c = s.reduce((e, n) => {
    let i = v(t, n, o);
    return e.top = (0, r.T9)(i.top, e.top), e.right = (0, r.jk)(i.right, e.right), e.bottom = (0, r.jk)(i.bottom, e.bottom), e.left = (0, r.T9)(i.left, e.left), e
  }, v(t, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  }
}

function T(e) {
  let {
    width: t,
    height: n
  } = o(e);
  return {
    width: t,
    height: n
  }
}

function C(e, t, n) {
  let i = (0, a.sb)(t),
    o = (0, a.ep)(t),
    s = "fixed" === n,
    l = f(e, true, s, t),
    c = {
      scrollLeft: 0,
      scrollTop: 0
    },
    u = (0, r.Jx)(0);

  function d() {
    u.x = p(o)
  }
  if (i || !i && !s)
    if (("body" !== (0, a.mq)(t) || (0, a.ZU)(o)) && (c = (0, a.CP)(t)), i) {
      let e = f(t, true, s, t);
      u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
    } else o && d();
  s && !i && o && d();
  let h = !o || i || s ? (0, r.Jx)(0) : _(o, c);
  return {
    x: l.left + c.scrollLeft - u.x - h.x,
    y: l.top + c.scrollTop - u.y - h.y,
    width: l.width,
    height: l.height
  }
}

function N(e) {
  return "static" === (0, a.L9)(e).position
}

function w(e, t) {
  if (!(0, a.sb)(e) || "fixed" === (0, a.L9)(e).position) return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (0, a.ep)(e) === n && (n = n.ownerDocument.body), n
}

function R(e, t) {
  let n = (0, a.zk)(e);
  if ((0, a.Tf)(e)) return n;
  if (!(0, a.sb)(e)) {
    let t = (0, a.$4)(e);
    for (; t && !(0, a.eu)(t);) {
      if ((0, a.vq)(t) && !N(t)) return t;
      t = (0, a.$4)(t)
    }
    return n
  }
  let r = w(e, t);
  for (; r && (0, a.Lv)(r) && N(r);) r = w(r, t);
  return r && (0, a.eu)(r) && N(r) && !(0, a.sQ)(r) ? n : r || (0, a.gJ)(e) || n
}
let P = async function(e) {
  let t = this.getOffsetParent || R,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: C(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  }
};

function D(e) {
  return "rtl" === (0, a.L9)(e).direction
}
let L = {
  convertOffsetParentRelativeRectToViewportRelativeRect: h,
  getDocumentElement: Chunk84157.ep,
  getClippingRect: S,
  getOffsetParent: R,
  getElementRects: P,
  getClientRects: m,
  getDimensions: T,
  getScale: l,
  isElement: Chunk84157.vq,
  isRTL: D
};

function x(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function M(e, t) {
  let n, i = null,
    o = (0, a.ep)(e);

  function s() {
    var e;
    clearTimeout(n), null == (e = i) || e.disconnect(), i = null
  }

  function l(a, c) {
    true === a && (a = false), true === c && (c = 1), s();
    let u = e.getBoundingClientRect(),
      {
        left: d,
        top: f,
        width: p,
        height: _
      } = u;
    if (a || t(), !p || !_) return;
    let h = {
        rootMargin: -(0, r.RI)(f) + "px " + -(0, r.RI)(o.clientWidth - (d + p)) + "px " + -(0, r.RI)(o.clientHeight - (f + _)) + "px " + -(0, r.RI)(d) + "px",
        threshold: (0, r.T9)(0, (0, r.jk)(1, c)) || 1
      },
      m = true;

    function g(t) {
      let r = t[0].intersectionRatio;
      if (r !== c) {
        if (!m) return l();
        r ? l(false, r) : n = setTimeout(() => {
          l(false, 1e-7)
        }, 1e3)
      }
      1 !== r || x(u, e.getBoundingClientRect()) || l(), m = false
    }
    try {
      i = new IntersectionObserver(g, {
        ...h,
        root: o.ownerDocument
      })
    } catch (e) {
      i = new IntersectionObserver(g, h)
    }
    i.observe(e)
  }
  return l(true), s
}

function j(e, t, n, r) {
  let i;
  true === r && (r = {});
  let {
    ancestorScroll: o = true,
    ancestorResize: l = true,
    elementResize: c = "function" == typeof ResizeObserver,
    layoutShift: u = "function" == typeof IntersectionObserver,
    animationFrame: d = false
  } = r, p = s(e), _ = o || l ? [...p ? (0, a.v9)(p) : [], ...(0, a.v9)(t)] : [];
  _.forEach(e => {
    o && e.addEventListener("scroll", n, {
      passive: true
    }), l && e.addEventListener("resize", n)
  });
  let h = p && u ? M(p, n) : null,
    m = false,
    g = null;
  c && (g = new ResizeObserver(e => {
    let [r] = e;
    r && r.target === p && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var e;
      null == (e = g) || e.observe(t)
    })), n()
  }), p && !d && g.observe(p), g.observe(t));
  let E = d ? f(e) : null;

  function y() {
    let t = f(e);
    E && !x(E, t) && n(), E = t, i = requestAnimationFrame(y)
  }
  return d && y(), n(), () => {
    var e;
    _.forEach(e => {
      o && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
    }), null == h || h(), null == (e = g) || e.disconnect(), g = null, d && cancelAnimationFrame(i)
  }
}
let k = Chunk764647.cY,
  U = Chunk764647.RK,
  G = Chunk764647.BN,
  V = Chunk764647.UU,
  F = Chunk764647.Ej,
  B = Chunk764647.jD,
  H = Chunk764647.ER,
  Y = (e, t, n) => {
    let r = new Map,
      a = {
        platform: L,
        ...n
      },
      o = {
        ...a.platform,
        _c: r
      };
    return (0, i.rD)(e, t, {
      ...a,
      platform: o
    })
  }