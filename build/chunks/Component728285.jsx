/** Chunk was on web.js **/
/** chunk id: 728285, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AN: () => m,
  Aq: () => O,
  GB: () => E,
  J5: () => _,
  Su: () => h,
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

function p(e, t) {
  let [n, r] = i.useState((0, s.ZY)(t)), o = i.useMemo(() => new a.b, []), l = i.useMemo(() => ({
    appContext: e,
    renderWindow: t,
    windowDispatch: o,
    windowId: n
  }), [e, t, o, n]);
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

function _(e) {
  var t;
  let n = e.ownerDocument.defaultView;
  if (null == n) return;
  let r = (0, s.ZY)(n);
  return null == (t = f.get(r)) ? true : t.windowDispatch
}

function m(e) {
  var t;
  return (0, o.kK)(null == e ? true : e.target) && null != (t = _(e.target)) ? t : null
}

function h() {
  var e;
  let t = (0, Chunk919570.GR)();
  return null == exports ? null : null != (e = f.get(exports)) ? module : null
}

function g(e) {
  return f.get(e)
}

function E() {
  let e = h();
  return null != module ? module.appContext : null
}

function b(e) {
  let {
    appContext: t,
    renderWindow: n,
    children: i
  } = e, o = p(t, n);
  return (0, r.jsx)(d.Provider, {
    value: o,
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