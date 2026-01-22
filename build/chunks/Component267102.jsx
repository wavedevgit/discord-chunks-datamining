/** Chunk was on web.js **/
/** chunk id: 267102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => A,
  Iy: () => g,
  Us: () => y,
  Uw: () => u,
  Wr: () => b,
  aL: () => O,
  mU: () => _,
  rH: () => m,
  wp: () => h,
  zd: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk203982 = require("./203982.js"),
  Chunk365971 = require("./365971.js"),
  Chunk158368 = require("./158368.js"),
  Chunk652215 = require("./652215.js");
let u = new Chunk203982.H,
  d = Chunk64700.createContext({
    appContext: Chunk652215.BRT.APP,
    renderWindow: window,
    windowDispatch: u,
    windowId: (0, Chunk365971.Xg)()
  }),
  f = new Map;

function p(e, t) {
  let [n, r] = i.useState((0, o.Q2)(t)), a = i.useMemo(() => new s.H, []), l = i.useMemo(() => ({
    appContext: e,
    renderWindow: t,
    windowDispatch: a,
    windowId: n
  }), [e, t, a, n]);
  return i.useEffect(() => {
    if (null != n) return;
    let e = setInterval(() => {
      let n = (0, o.Q2)(t);
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
  let r = (0, o.Q2)(n);
  return null == (t = f.get(r)) ? true : t.windowDispatch
}

function h(e) {
  var t;
  return (0, a.vq)(null == e ? true : e.target) && null != (t = _(e.target)) ? t : null
}

function m() {
  var e;
  let t = (0, l.Sf)();
  return null == t ? null : null != (e = f.get(t)) ? e : null
}

function g(e) {
  return f.get(e)
}

function E() {
  let e = m();
  return null != e ? e.appContext : null
}

function b(e) {
  let {
    appContext: t,
    renderWindow: n,
    children: i
  } = e, a = p(t, n);
  return (0, r.jsx)(d.Provider, {
    value: a,
    children: i
  })
}

function y() {
  return i.useContext(d).appContext
}

function O() {
  return i.useContext(d).windowDispatch
}
let A = d