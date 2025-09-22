/** Chunk was on web.js **/
/** chunk id: 681897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  aX: () => l,
  jn: () => c,
  pE: () => u,
  vl: () => d
});
var Chunk422305 = require("./422305.js"),
  Chunk554997 = require("./554997.js"),
  Chunk506364 = require("./506364.js"),
  Chunk647438 = require("./647438.js");
let s = Symbol("default");

function l(e) {
  let {
    className: t,
    style: n,
    children: r,
    defaultClassName: i,
    defaultChildren: a,
    defaultStyle: s,
    values: l
  } = e;
  return (0, o.useMemo)(() => {
    let e, o, c;
    return e = "function" == typeof t ? t({
      ...l,
      defaultClassName: i
    }) : t, o = "function" == typeof n ? n({
      ...l,
      defaultStyle: s || {}
    }) : n, c = "function" == typeof r ? r({
      ...l,
      defaultChildren: a
    }) : null == r ? a : r, {
      className: null != e ? e : i,
      style: o || s ? {
        ...s,
        ...o
      } : true,
      children: null != c ? c : a,
      "data-rac": ""
    }
  }, [t, n, r, i, a, s, l])
}

function c(e, t) {
  let n = (0, o.useContext)(e);
  if (null === t) return null;
  if (n && "object" == typeof n && "slots" in n && n.slots) {
    let e = t || s;
    if (!n.slots[e]) {
      let e = new Intl.ListFormat().format(Object.keys(n.slots).map(e => `"${e}"`)),
        r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw Error(`${r} Valid slot names are ${e}.`)
    }
    return n.slots[e]
  }
  return n
}

function u(e, t, n) {
  let {
    ref: s,
    ...l
  } = c(n, e.slot) || {}, u = (0, r.B)((0, o.useMemo)(() => (0, i.l)(t, s), [t, s])), d = (0, a.d)(l, e);
  return "style" in l && l.style && "style" in e && e.style && ("function" == typeof l.style || "function" == typeof e.style ? d.style = t => {
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
  } : d.style = {
    ...l.style,
    ...e.style
  }), [d, u]
}

function d(e) {
  let t = /^(data-.*)$/,
    n = {};
  for (let r in e) t.test(r) || (n[r] = e[r]);
  return n
}