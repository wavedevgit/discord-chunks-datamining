/** Chunk was on web.js **/
/** chunk id: 825913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CC: () => d,
  JT: () => f,
  Kq: () => c,
  P_: () => l,
  SK: () => _,
  Sl: () => u,
  _E: () => p
});
var Chunk533715 = require("./533715.js"),
  Chunk561514 = require("./561514.js"),
  Chunk803082 = require("./803082.js"),
  Chunk3388 = require("./3388.js"),
  Chunk64700 = require("./64700.js");
let l = Symbol("default");

function c({
  values: e,
  children: t
}) {
  for (let [n, r] of e) t = s.createElement(n.Provider, {
    value: r
  }, t);
  return t
}

function u(e) {
  let {
    className: t,
    style: n,
    children: r,
    defaultClassName: i,
    defaultChildren: a,
    defaultStyle: o,
    values: l
  } = e;
  return (0, s.useMemo)(() => {
    let e, s, c;
    return e = "function" == typeof t ? t({
      ...l,
      defaultClassName: i
    }) : t, s = "function" == typeof n ? n({
      ...l,
      defaultStyle: o || {}
    }) : n, c = "function" == typeof r ? r({
      ...l,
      defaultChildren: a
    }) : null == r ? a : r, {
      className: null != e ? e : i,
      style: s || o ? {
        ...o,
        ...s
      } : true,
      children: null != c ? c : a,
      "data-rac": ""
    }
  }, [t, n, r, i, a, o, l])
}

function d(e, t) {
  let n = (0, s.useContext)(e);
  if (null === t) return null;
  if (n && "object" == typeof n && "slots" in n && n.slots) {
    let e = t || l;
    if (!n.slots[e]) {
      let e = new Intl.ListFormat().format(Object.keys(n.slots).map(e => `"${e}"`)),
        r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw Error(`${r} Valid slot names are ${e}.`)
    }
    return n.slots[e]
  }
  return n
}

function f(e, t, n) {
  let {
    ref: o,
    ...l
  } = d(n, e.slot) || {}, c = (0, r.U)((0, s.useMemo)(() => (0, i.P)(t, o), [t, o])), u = (0, a.v)(l, e);
  return "style" in l && l.style && "style" in e && e.style && ("function" == typeof l.style || "function" == typeof e.style ? u.style = t => {
    let n = "function" == typeof l.style ? l.style(t) : l.style,
      r = {
        ...t.defaultStyle,
        ...n
      },
      i = "function" == typeof e.style ? e.style({
        ...t,
        defaultStyle: r
      }) : e.style;
    return {
      ...r,
      ...i
    }
  } : u.style = {
    ...l.style,
    ...e.style
  }), [u, c]
}

function p(e = true) {
  let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(false), i = (0, s.useCallback)(e => {
    r.current = true, n(!!e)
  }, []);
  return (0, o.N)(() => {
    r.current || n(false)
  }, []), [i, t]
}

function _(e) {
  let t = /^(data-.*)$/,
    n = {};
  for (let r in e) t.test(r) || (n[r] = e[r]);
  return n
}