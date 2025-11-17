/** Chunk was on web.js **/
/** chunk id: 728285, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AN: () => h,
  Aq: () => O,
  GB: () => E,
  J5: () => p,
  Su: () => m,
  UI: () => u,
  Wu: () => b,
  ZP: () => v,
  bp: () => y,
  g0: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk585483 = require("./585483.js"),
  Chunk830917 = require("./830917.js"),
  Chunk919570 = require("./919570.js"),
  Chunk981631 = require("./981631.js");
let u = new Chunk585483.b,
  d = Chunk473749.createContext({
    appContext: Chunk981631.IlC.APP,
    renderWindow: window,
    windowDispatch: u,
    windowId: (0, Chunk830917.UU)()
  }),
  f = new Map;

function _(e, t) {
  let [n, r] = i.useState((0, s.ZY)(t)), a = i.useMemo(() => new o.b, []), l = i.useMemo(() => ({
    appContext: e,
    renderWindow: t,
    windowDispatch: a,
    windowId: n
  }), [e, t, a, n]);
  return i.useEffect(() => {
    if (null != n) return;
    let e = setInterval(() => {
      let n = (0, s.ZY)(t);
      null != n && (r(n), clearInterval(e))
    }, 10);
    return () => clearInterval(e)
  }, [t, n]), i.useEffect(() => {
    f.set(n, l);
    let e = () => {
      f.delete(n)
    };
    return t.addEventListener("unload", e), () => t.removeEventListener("unload", e)
  }, [l, t, n]), l
}

function p(e) {
  var t;
  let n = e.ownerDocument.defaultView;
  if (null == n) return;
  let r = (0, s.ZY)(n);
  return null == (t = f.get(r)) ? true : t.windowDispatch
}

function h(e) {
  var t;
  return (0, a.kK)(null == e ? true : e.target) && null != (t = p(e.target)) ? t : null
}

function m() {
  var e;
  let t = (0, Chunk919570.GR)();
  return null == exports ? null : null != (e = f.get(exports)) ? module : null
}

function g(e) {
  return f.get(e)
}

function E() {
  let e = m();
  return null != module ? module.appContext : null
}

function b(e) {
  let {
    appContext: t,
    renderWindow: n,
    children: i
  } = e, a = _(t, n);
  return (0, r.jsx)(d.Provider, {
    value: a,
    children: i
  })
}

function y() {
  return Chunk473749.useContext(d).appContext
}

function O() {
  return Chunk473749.useContext(d).windowDispatch
}
let v = d