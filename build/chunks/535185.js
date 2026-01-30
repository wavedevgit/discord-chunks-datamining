/** Chunk was on web.js **/
/** chunk id: 535185, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => f,
  w: () => p
}), require("./142703.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk238040 = require("./238040.js"),
  Chunk935399 = require("./935399.js");

function o(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = s(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function s(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function l(e, t) {
  (0, a.Ay)(() => {
    let n = t;
    return () => {
      (0, i.JE)(e, n)
    }
  })
}

function c(e) {
  var t, n, r, i, a, s;
  let l = e,
    c = e.getBoundingClientRect(),
    u = null == (s = l.parentElement) ? true : s.getBoundingClientRect(),
    d = {
      x: c.x - (null != (t = null == u ? true : u.x) ? t : 0),
      y: c.y - (null != (n = null == u ? true : u.y) ? n : 0),
      width: c.width,
      height: c.height,
      top: c.top - (null != (r = null == u ? true : u.top) ? r : 0),
      right: c.width,
      bottom: c.height,
      left: c.left - (null != (i = null == u ? true : u.left) ? i : 0),
      toJSON: () => {
        let {
          toJSON: e
        } = d;
        return o(d, ["toJSON"])
      }
    },
    f = getComputedStyle(l),
    p = [{
      inlineSize: d.width,
      blockSize: d.height
    }],
    _ = [{
      inlineSize: d.width - (parseFloat(f.paddingLeft) + parseFloat(f.paddingRight)),
      blockSize: d.height - (parseFloat(f.paddingTop) + parseFloat(f.paddingBottom))
    }],
    h = null != (a = window.devicePixelRatio) ? a : 1,
    m = [{
      inlineSize: _[0].inlineSize * h,
      blockSize: _[0].blockSize * h
    }];
  return {
    target: l,
    borderBoxSize: p,
    contentBoxSize: _,
    devicePixelContentBoxSize: m,
    contentRect: d
  }
}

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    i = arguments.length > 3 ? arguments[3] : true,
    {
      enabled: o = true,
      fireOnMount: s = false,
      fireOnDepsChange: l = false
    } = i,
    u = (0, r.useRef)(false);
  (0, a.u5)(() => {
    let n = e.current;
    o && s && null != n && (t(c(n)), setImmediate(() => {
      u.current = true
    }))
  }), (0, r.useLayoutEffect)(() => {
    let n = e.current;
    o && l && u.current && null != n && t(c(n))
  }, [t, e, ...n])
}

function d(e) {
  let t = (0, r.useId)(),
    n = (0, r.useRef)(null),
    a = (0, r.useRef)(null);
  return (0, r.useEffect)(() => {
    null != n.current && (a.current = (0, i.NQ)(t, n.current, e))
  }, [t, e]), l(t, n.current), [a, n]
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
    o = (0, r.useId)(),
    {
      enabled: s = true
    } = a,
    c = (0, r.useRef)(null);
  l(o, e.current), u(e, t, n, a), (0, r.useEffect)(() => {
    if (!s) return;
    let n = e.current;
    if (null == n) return;
    let r = (0, i.NQ)(o, n, t);
    if (c.current = r, null != r) return (0, i.wB)(r, n), () => (0, i.$v)(r, n)
  }, [s, o, t, e, ...n])
}

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      enabled: a = true
    } = n,
    [o, s] = d(e);
  return u(s, e, t, n), (0, r.useEffect)(() => {
    if (!a) return;
    let e = s.current,
      t = o.current;
    if (null != e && null != t) return (0, i.wB)(t, e), () => (0, i.$v)(t, e)
  }, [a, s, o, ...t]), s
}