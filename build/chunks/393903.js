/** Chunk was on web.js **/
/** chunk id: 393903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => f,
  y: () => p
}), require("./368063.js"), require("./358797.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk889711 = require("./889711.js"),
  Chunk493773 = require("./493773.js");

function a(e, t) {
  if (null == e) return {};
  var n, r, i = s(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function s(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function l(e, t) {
  (0, o.ZP)(() => {
    let n = t;
    return () => {
      (0, i.fO)(e, n)
    }
  })
}

function c(e) {
  var t, n, r, i, o, s;
  let l = e,
    c = e.getBoundingClientRect(),
    u = null == (t = l.parentElement) ? true : t.getBoundingClientRect(),
    d = {
      x: c.x - (null != (n = null == u ? true : u.x) ? n : 0),
      y: c.y - (null != (r = null == u ? true : u.y) ? r : 0),
      width: c.width,
      height: c.height,
      top: c.top - (null != (i = null == u ? true : u.top) ? i : 0),
      right: c.width,
      bottom: c.height,
      left: c.left - (null != (o = null == u ? true : u.left) ? o : 0),
      toJSON: () => {
        let {
          toJSON: e
        } = d;
        return a(d, ["toJSON"])
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
    m = null != (s = window.devicePixelRatio) ? s : 1,
    h = [{
      inlineSize: _[0].inlineSize * m,
      blockSize: _[0].blockSize * m
    }];
  return {
    target: l,
    borderBoxSize: p,
    contentBoxSize: _,
    devicePixelContentBoxSize: h,
    contentRect: d
  }
}

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    i = arguments.length > 3 ? arguments[3] : true,
    {
      enabled: a = true,
      fireOnMount: s = true,
      fireOnDepsChange: l = false
    } = i,
    u = (0, r.useRef)(false);
  (0, o.Ng)(() => {
    let n = e.current;
    a && s && null != n && (t(c(n)), setImmediate(() => {
      u.current = true
    }))
  }), (0, r.useLayoutEffect)(() => {
    let n = e.current;
    a && l && u.current && null != n && t(c(n))
  }, [t, e, ...n])
}

function d(e) {
  let t = (0, r.useId)(),
    n = (0, r.useRef)(null),
    o = (0, r.useRef)(null);
  return (0, r.useEffect)(() => {
    null != n.current && (o.current = (0, i.pP)(t, n.current, e))
  }, [t, e]), l(t, n.current), [o, n]
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
    a = (0, r.useId)(),
    {
      enabled: s = true
    } = o,
    c = (0, r.useRef)(null);
  l(a, e.current), u(e, t, n, o), (0, r.useEffect)(() => {
    if (!s) return;
    let n = e.current;
    if (null == n) return;
    let r = (0, i.pP)(a, n, t);
    if (c.current = r, null != r) return (0, i.YP)(r, n), () => (0, i.UC)(r, n)
  }, [s, a, t, e, ...n])
}

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
    {
      enabled: o = true
    } = n,
    [a, s] = d(e);
  return u(s, e, t, n), (0, r.useEffect)(() => {
    if (!o) return;
    let e = s.current,
      t = a.current;
    if (null != e && null != t) return (0, i.YP)(t, e), () => (0, i.UC)(t, e)
  }, [o, s, a, ...t]), s
}