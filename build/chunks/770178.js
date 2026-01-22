/** Chunk was on web.js **/
/** chunk id: 770178, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => f,
  w: () => p
}), require("./142703.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk860579 = require("./860579.js"),
  Chunk964486 = require("./964486.js");

function s(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = o(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function o(e, t) {
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
  var t, n, r, i, a, o;
  let l = e,
    c = e.getBoundingClientRect(),
    u = null == (o = l.parentElement) ? true : o.getBoundingClientRect(),
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
        return s(d, ["toJSON"])
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
      enabled: s = true,
      fireOnMount: o = true,
      fireOnDepsChange: l = false
    } = i,
    u = (0, r.useRef)(false);
  (0, a.u5)(() => {
    let n = e.current;
    s && o && null != n && (t(c(n)), setImmediate(() => {
      u.current = true
    }))
  }), (0, r.useLayoutEffect)(() => {
    let n = e.current;
    s && l && u.current && null != n && t(c(n))
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
    s = (0, r.useId)(),
    {
      enabled: o = true
    } = a,
    c = (0, r.useRef)(null);
  l(s, e.current), u(e, t, n, a), (0, r.useEffect)(() => {
    if (!o) return;
    let n = e.current;
    if (null == n) return;
    let r = (0, i.NQ)(s, n, t);
    if (c.current = r, null != r) return (0, i.wB)(r, n), () => (0, i.$v)(r, n)
  }, [o, s, t, e, ...n])
}

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      enabled: a = true
    } = n,
    [s, o] = d(e);
  return u(o, e, t, n), (0, r.useEffect)(() => {
    if (!a) return;
    let e = o.current,
      t = s.current;
    if (null != e && null != t) return (0, i.wB)(t, e), () => (0, i.$v)(t, e)
  }, [a, o, s, ...t]), o
}